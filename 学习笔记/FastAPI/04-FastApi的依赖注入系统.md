# FastAPI的依赖注入系统

## 一、依赖注入系统介绍和使用场景
<font color=red>依赖注入</font>是在编程中，为保证代码成功运行，先导入或声明其所需要的<font color=red>依赖</font>，如子函数、数据库连接等。

- 提高代码的利用率
- 共享数据库的连接
- 增强安全、认证和角色管理

**提高FastAPI的兼容性**

- 所有的关系型数据库，支撑NoSQL数据库
- 第三方的包和API
- 认证和授权系统
- 响应数据注入系统

## 二、创建、导入和声明依赖

```python
#app05.py
from fastapi import APIRouter,Depends
from typeig import Optional

app05=APIRouter()

async def common_parameters(q:Optional[str]=None,Page:int=1,limit:int=100):
    return{"q":q,"page":page,"limit":limit}

@app05.get("/dependency01")
async def dependency01(commons:dict=Depends(common_parameters)):
    return commons

@app05.get("/dependency02")
def dependency01(commons:dict=Depends(common_parameters)):
    return commons

```
<font color=red>以上是将函数做为依赖项</font>

## 三、如何将类作为依赖项
```python
#假如fake_items_db是数据库传回来的内容
fake_items_db=[{"item_name":"Foo"},{"item_name":"Baz"},{"item_name":"Bar"}]

class CommonQueryParams:
    def __init__(self,q:Optional[str]=None,page:int=1,limit:int=100):
        self.q=q
        self.page=page
        self.limie=limit

@app05.get("/classes_as_dependencies")
async def classes_as_dependencies(commons:CommonQueryParams=Depends(CommonQueryParams)):
    response={}
    if commons.q:
        response.update("q":commons.q)
    items=fake_items_db[commons.page:commons.page+commons.limit]
    response.update({"items":items})
    return response
# async def classes_as_dependencies(comons:CommonQueryParams=Depends())
# async def classes_as_dependencies(comons=Depends(CommonQueryParams))
#后面两个定义与第一个功能一样
```
类的__ init __参数列表来传参数
请求数据将会传递到类的初始化方法中(  __ init__)


## 四、子依赖的创建和调用
<font color=red>(嵌套依赖,比如一层层的权限管理)</font>

```python
def query(q:Optional[str]=None):
    return q

def sub_query(q:str=Depends(query),last_query:Optional[str]=None):
    if not q:
        return last_query
    return q

@app05.get("/sub_dependency")
async def sub_dependency(final_query:str=Depends(sub_query,use_cache=True)):
    #use_cache默认为True
    return {"sub_dependency":final_query}

```
## 五、路径操作装饰器中导入依赖

```python
from fastapi import Header,HTTPException
async def verify_token(x_token:str=Header(...)):
    #没有返回值的子依赖
    if x_token !="fask-super-secret-token":
        raise HTTPException(status_code=400,detail="X-Token header invalid")
    return x_token


async def verify_key(x_key:str=Header(...)):
    #有返回值的子依赖,但返回值不会被调用
    if x_key !="fask-super-secret-key":
        raise HTTPException(status_code=400,detail="X-key header invalid")
    return x_key

@app05.get('/dependency+in_path_operation',dependencies=[Depends(verify_koken),Depends(verify_key)])
asyn def dependency_in_path_operation():
return [{"user":"user01"},{"user":"user02"}]
```
## 六、FastAPI框架中全局依赖的使用

```python
app05=APIRouter(dependencies=[Depends(verify_token),Depends(verify_key)])
#或在run.py中加入 
#app=FastAPI(...,dependenices=[Depends(verify_token),Depends(verify_key)])
```

## 七、使用yield的依赖和子依赖

```python
async def get_db():
    db="db_connect"
    try:
        yield db
    finally:
        db.endswitch("db_close")

async def dependency_a():
    dep_a="generate_dep_a()"
    try:
        yield dep_a
    finally:
        dep_a.endswith("db_close")
async def dependency_b(dep_a=Depends(dependency_a)):
    dep_b="generate_dep_b()"
    try:
        yield dep_a
    finally:
        dep_b.endswith("db_close")
async def dependency_c(dep_b=Depends(dependency_b)):
    dep_c="generate_dep_c()"
    try:
        yield dep_b
    finally:
        dep_c.endswith("db_close")
```
<font color=red>最后说明:</font> 重点在于Depends(),可以携带一个函数，或者一个类。<font color=yellow>返回的结果是其result，或者实例。</font>所有 的依赖项都可以有自己的参数，这些参数从报文中拦截。