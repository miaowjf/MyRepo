# 响应处理和FastAPI配置
## 一、响应模型示例
```python
#chapter04.py

from fastapi import APIRouter
from pydantic import BaseModel,EmailStr
from typing import Optional,List,Union
#Union并集，需要查看相关资料


app04=APIRouter()

"""Response Model响应模型"""

class UserIn(BaseModel):
    username:str
    password:str
    email:EmailStr
    mobile:str="10086"
    address:str=None
    full_name:Optional[str]=None

class UserOut(BaseModel):
    username:str
    email:EmailStr
    mobile:str="10086"
    address:str=None
    full_name:Optional[str]=None

users={
    "user01":...
    "user02":...
}
#path operation路径操作：
@app04.post("/response_model",response_model=UserOut,response_model_exclude_unset=True)
#rsponse_model_exclude_unset=True表示默认值不包含在响应中，仅包含实际给的值,如果实际给的值与默认值相同也会包含在响应中
async def response_model(user:UserIn):
    #password不会被返回
    print(user.password)
    #下面只返回username和email。其它的是password和有默认值，因此不回传。如果unset设为False,会有mobile传回
    return  user["user01"],user["user02"]
```
上面定义了<font color=red>两个Pydantic模型(UserIn,UserOut)</font>，一个为<font color=red>请求体模型</font>，另一个则是<font color=red>响应体模型</font>。<font color=red>响应体模型</font>在<font color=yellow>路径操作</font>中进行声明，所以<font color=yellow>响应体数据会经过这个模型校验</font>，<font color=red>返回的数据</font>是符合这个<font color=yellow>模型的数据</font>。显然响应体模型<font color=yellow>过滤掉了password字段</font>。
```python
@app04.post(
    "/response_model/attributes",
    response_model=Union[UserIn,UserOut]
    #response_model_include=["username','email']返回哪些字段值
    #response_model_exclude=['mobile'] 不返回哪些值
)
async def response_model_attrributes(user:UserIn):
    #并集password也返回,del user.passerod可以删除password属性,del user.passwrod可以删除password属性
    return user
```
## 二、响应状态码和快捷属性
```python
from fastapi import status

@app04.post("/status_code",status_code=200)
async def status_code():
    return {"stauts_code":200}


@app04.post("/status_attribute",status_code=status.HTTP_200_OK)
async def status_attribute():
    return {"stauts_code":status.HTTP_200_OK}
```
## 三、表单数据处理

```python
from fastapi import Form
@app04.post("/login")
#定义表单参数,Form与Field、Path、Query一样，可以校验数据
async def login(user:str=Form(...),password:str=Form(...)):
    return({"username":username})
```

## 四、单文件、多文件上传及参数详解

```python
from fastapi import File,UploadFile
@app04.powt("/file")
#async def file_(file:List[bytes]=File(...))用列表传送多个文件
async def file_(file:bytes=File(...)):
    #使用File类文件内容会以bytes形式读入内存，适合上传小文件
    return {"file_size":len(file)}


#上传大文单个文件不用List
@app04.post("/upload_files")
async def upload_files(files:List[UploadFile]=File(...))):
"""
    UploadFile的优势:
    1.文件存储在内存中，使用内存达到阈值后，将被保存到磁盘中
    2.适合于图片、视频等大文件
    3.可以获取上传的文件的元数据，如文件名、创建时间等
    4.有文件对象的异步接口
    5.上传的文件是Python文件对象，可以使用write()、read()、seek()、close()操作。
"""
    for file in files:
        contents=await file.read()
        pront(contents)
    return {"filename":files[0].filename,"content_type":file[0].content_type}
```

## 五、FastAPI项目的静态文件配置

```python
#run.py中配置
#新建static文件夹
import fastapi.staticfiles import StaticFiles
app.mount(path='/static',app=StaticFiles(directory='./static',name='static'))
```

## 六、路径操作配置（Path Operation Configuration)

```python
@app04.post(
    "/path_option_configuration",
    response_model=UserOut,tags=["Path","Operation","Configuration"],
    summary="This is summary",
    description="This is description",
    response_description="This is response description",
    #deprecated=True,#废弃接口，但还能用
    status_code=status.HTTP_200_OK
)
async def path_opreation_configuration(user:UserIn):
    """
    :param user:用户信息
    :return :返回结果
    """
    return user.dict()
```
## 七、FastAPI应用的常见配置项
```python
#run.py中进行配置
app=FastAPI(
    title='FastAPI Tutorial and Coronavirvs',
    description="FastAPI教程",
    version='1.1.1',
    docs_usl='/docs',
    redoc_url='/redocs'
)
```
## 八、FastAPI框架错误处理
```python
import HTTPException
@app04.get("/http_exception")
async def http_exception(city:str):
    if city != "Beijing":
        raise HTTPException(status_code=404,detail="City not found!",headers={"X-Error":"Error"})
    return {"city":city}
```
```python
#run.py中更改（异常处理在主程序中更改后，后面的程序都能用）
from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from fastapi.exceptions import HTTPExcepton
from starlette.exceptions import HTTPException as StarletteHTTPException

#重写HTTPException异常处理器
@app.exception_handler(StarletteHTTPExcepton)
async def http_exception_handler(request,exc):
    """
        :param request:这个参数不能省
        :param exc:
        :return
    """
    return PlainTextResponse(str(exc.detail),status_code=exc.status_code)

#重写请求验证异常处理器
@app.excepton_handler(RequestValidationError)
async def validation_exeception_handler(request,exc):
    return PlainTextResponse(str(exc),status_code=400)

@app04.get("/http_exception/{city_id}")
async def override_http_exception(city:str):
    if city.id == 1:
        raise HTTPException(status_code=418,detail="City not found!",headers={"X-Error":"Error"})
    return {"city":city}
```