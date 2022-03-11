# 中间件、CORS、后台任务、测试用例

## 一、中间件的概念和开发示例

```python
#chapter08.py
from fastapi import APIRouter,Request
import time

app08=APIRouter()
#http的请求先过这个中间件
#注：带yield的依赖的退出部分的代码和后台任务会在中间件之后运行
@app.middleware('http')
#call_next是将request接收到的请求做为参数
async def add_process_time_header(request:Request,call_next):
    start_time=time.time()
    #开始处理request
    response=await call_next(request)
    processtime=time.time()-start_time
    #添加自定义的header，以"X-"开头
    response.headers['x-process-time']=str(processtime)
    return response

```
## 二、跨域资源共享CORS的原理
## 三、FastAPI的CORSMiddleware实现CORS

```python
import fastapi.middleware.cors import CORSMiddleware
#增加中间件
app.add_middleware(
    CORSMiddleware,
    #允许跨域的地址
    allow_origins=[
        "http://127.0.0.1",
        "http://127.0.0.1:8080"
    ],
    #允许证书跨域
    allow_credentials=True,
    #允许的方法，GET、POST等，*代表都可以
    allow_methods=["*"],
    #设置允许的请求头
    allow_headers=["*"]
)
```
## 四、实现类似Celery的后台任务

```python
from fastapi import BackgroundTasks

#定义一个后台任务
def bg_task(framework:str):
    with open("readme.md",mode="a") as f:
        f.write(f'##{framework}框架精讲')


@app08.post("/background_tasks")
async def run_bg_task(framework:str,background_task:BackgroundTasks):
    """
    :param framework:后台任务函数调用时使用的参数
    :param background_task:FastAPI.BackgroundTasks
    :return
    """
    #func为上面定义的功能函数(注意bg_task没有括号)，framework是传过来的参数
    background_task.add_task(func=bg_task,framework)
    return {"message":"任务已经在后台运行"}

#依赖注入系统导入后台任务,q是查询参数
def continue_writre_readme(background_task:BackgroundTasks,q:Optional[str]=None):
    if q:
        background_task.add_task(bg_task,"\n>整体介绍FastAPI")
    return q
@app08.post("/dependency_run_bg_task")
#注意Depends(函数名),不带后面的括号。
async def dependency_run_task(q:str=Depends(continue_write_readme)):
    if q:
        return {"message":"任务已在后台"}

```
## 五、后台任务更新数据
<font color=red>不要后台任务中导入数据库依赖（别的依赖还不清楚)</font>,<font color=yellow>在路由处理的函数中导入依赖。</font>

## 六、TestClient编写测试用例

```python

from fastapi.testclient import TestClient
#测试run文件中的app
from run import app

#建立测试端，测试哪个应用程序 #pip3 install pytest
client=TestClient(app)
#文件以test_开头
#test_chapter08.py
#方法以test_开头(pytest的规范，注意不是async def开头)
#运行时使在使用环境下执行pytest
def test_run_bg_task():
    #url是相对于站点的路径，不用写全
    response=client.post(url="/index")
    assert response.status_code==200
    assert response.json()=={"message":"任务已在后台运行"}

def test_dependency_run_bg_task():
    response=client.post(url="/chapter08/dependency/background-tasks")
    assert response.status_code==200
    assert response.json() is None

#加上q查询参数
def test_dependency_run_bg_task_q():
    response=client.post(url="/chapter08/dependency/background-tasks?q=1")
    assert response.status_code==200
    assert response.json()=={"message":"Readme.md更新成功"} 




```