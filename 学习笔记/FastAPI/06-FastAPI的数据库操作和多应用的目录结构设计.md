# FastAPI的数据库操作和多应用的目录结构设计


database.py
models.py
schemas.py 表与类对应关系
crud.py
main.py应用逻辑
 
## 一、FastAPI项目中配置SQLAlchemy ORM
```python
#chapter07.py
from fastapi import APIRouter
app07=APIRouter()
```
```python
#database.py
from  sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
SQLALCHEMY_DATABASE_URL='sql///./coronvirus.sqlite'
#SQLALCHEMY_DATABASE_URL='postgresql://username:password@host:port/database_name  mysql和postgresql的连接方式

engin=create_engine(
    SQLCHEMY_DATABASE_URL
    encoding='utf-8',
    #echo引擎将用repl函数记录所有的语句和参数列表到日志里。
    echo=True,
    #由于SQLAlchemy是多线程的，指定check_same_thread=False来让建立的对象任意线程都可以使用。是sqllit使用的的参数，其它数据库不用。
    connect_args={'check_same_thread':False}
)

#在SQLAlchemy中，CRUD都是通过会话(session)进行的，所以我们必须要先创建会话，每个SessionLocal实例就是一个数据库session
#autoflush发送语句到数据库，但不一定执行写入磁盘。commit()是指提交事务，将变更保存到数据库文件中。
SessionLocal=sessionmaker(bing=engin,autoflush=False,autocommit=False,expir_on_commit=True)
 
#创建基本的映射类（创建表）
#生成一个sqllit的文件
Base=declarative_base(bind=engine,name='Base')
```
## 二、SQLAlchemy开发模型类

```python
#models.py
from sqlalchemy.orm import relationship
from sqlchemy import Colum,String,Integer,BigInteger,Date,DateTime,ForeignKey,func

from .database import Base

class City(Base):
    __tablename__='city'
    id=Column(Integer,primary_key=True,index=True,autoincrement=True)
    province =Column(String(100),unique=True,nullable=False,comment="省/直辖市")
    country=Column(String(30),unique=True,nullable=False,comment="国家")
    country_code=Column(string(10),unique=True,nullable=False,comment="国家代码")
    country_population=Column(BigInteger,nullable=False,comment="国家人口")
    #'Data'是关联的类名；back_populates来指定反向访问的属性名
    data=relationship('Data',back_populates='city')
    create_at=Column(DateTime,server_default=func.now(),comment='创建时间')
    update_at=Column(DateTime,server_default=func.now(),onupdate=func.now(),comment='更新时间')

    #排序默认是正序，倒序加上.desc()方法。
    __mapper_args__={"order_by":country_code.desc()}
    def __repr__(self,):
        return f'{self.country}_{self.province}'

class Data(Base):
    __tablename='data'
    id=Column(Integer,primary_key=True,index=True,autoincrement=True)
    #'city.id'是表名.字段名
    city_id=Column(Integer,ForeignKey('city.id'),comment="所属省/直辖市ID")
    date=Column(Date,nullable=False,comment='数据日志')
    confiremed=Column(BigInteger,default=0,nullable=False,comment="确诊数量")
    deaths=Column(BigInteger,default=0,nullable=False,comment="死亡数量")
    recovered=Column(BigInteger,default=0,nullable=False,comment="痊愈数量")
    #'City'是类名，'data'是表名
    city=relationship('City',back_populates='data')

    created_at=Column(DateTime,server_default=func.now(),comment='创建时间')
    updated_at=Column(DateTime,server_default=func.now(),onupdate=func.now(),comment='更新时间')

    #排序默认是正序，倒序加上.desc()方法。
    __mapper_args__={"order_by":country_code.desc()}
    def __repr__(self,):
        #repr将日期格式可读
        return f'{repr(self.date)}:确诊{self.province}例。'
```

## 三、pydantic建立与模型类对应的数据格式类

```python
#scheams.py
from pydantic import BaseModel
from datetime import datetime
from datetime import date as date_

class CreateData(BaseModel):
    date:date_
    confiremd:int=0
    deaths:int=0
    recovered:int=0

class CreateCity(BaseModel):
    province:str
    country:str
    country_code:str
    country_population;int

class ReadData(CreateData):
    id:int
    city_id:int
    updated_at:datetime
    create_at:datetime
    class Config:
        #从模型类的实例里创建数据
        orm_mode=True

class ReadCity(CreateCity):
    id:int
    updated_at:datetime
    create_at:datetime
    class Config:
        orm_mode=True
```

## 四、创建和查询数据封装成函数

```python
#crud.py

from sqlalchemy.orm import Session

from coronavirus import models,schemas

def get_city(db.Session,city_id:int):
    return db.query(models.City).filter(models.City.id==city_id).first()

def get_city_by_name(db.Session,name:str):
    return db.query(models.City).filter(models.City.province==name).first()

def get_cities(db:Session,skip:int=0,limit:int=10):
    return db.query(models.City).offset(skip).limit(limit).all()

def create_city(db:Session,city:schemas.CreateCity):
    db_city=models.City(**city.dict())
    db.add(db_city)
    db.commit()
    db.refresh(db_city)
    return db_city

def get_data(db:Session,city:str=None,skip:int=0,limit:int=10):
    if city:
        #外键关联查询，这里不像DjangoORM那样Data.city.province得到数据，需要models.Data.city.has(province=city)查询得到。
        return db.query(models.Data)filter(models.Data.city.has(province=city))
    return db.query(models.Data).offset(skip).limit(limit).all()

def create_city_data(db:Session,data:schemas.CreateData,city_id:int):
    db_data=models.Data(**data.dict(),city_id=citr_id)
    db.add(db_data)
    db.commit()
    db.refresh(db_data)
    return db_data
```

## 五、开发数据查询接口

```python
#main.py
#run.py中导入main.py 中的application(APIRouter实例)
from fastapi import APIRouter,Depends,HTTPException,status
from sqlalchemy.orm import Session
from coronavirus import crud,schemas
from coronavirus.database import engine,Base,SessionLocal
from coronavirus.models import City.Data
from typing import List

application=APIRouter()

#创建表格
Base.metadata.create_all(bind=engine)

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()


@application.post('/create_city',response_model=schemas.ReadCity)
def create_city(city:schema.CreateCity,db:Session=Depends(get_db)):
    db_city=crud.get_city_by_name(db=db,name=city.province)
    if db_city:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="City already registered"
        )
    return curd.create_city(db=db,city=city)

@application.get('/query/{city}',response_model=schemas.ReadCity)
def get_city(city:str,db:Session=Depends(get_db)):
    db_city=crud.get_city_by_name(db=db,name=city)
    if db_city is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,detail='City not found'
        )
    return db_city

@application.get('/getcitys',response_model=List[schemas,ReadCity])
def get_cities(skip:int=0,limit:int=100,db:Session=Depends(get_db)):
    cities=crud.get_cities(db=db,skip=skip,limit=limit)
    return cities

@application.post('/create_data',response_model=schemas.ReadData)
def create_data_for_city(cityo:str,data:schemas.CreateData,db:Session=Depends(get_db)):
    db_city=crud.get_city_by_name(db=db,name=city)
    data=crud.create_city_data(db=db,data=data,city_id=db_city.id)
    return data

@application.get('/get_data')
def get_data(city:str=None,skip:int=0,limit:int=100,db:Session=Depends(get_db)):
    data=crud.get(db=db,city=city,skip=skip,limit=limit)
    return data
```

## 六、Jinja2模板渲染前端页面

## 七、大型工程的目录结构-应用文件拆分