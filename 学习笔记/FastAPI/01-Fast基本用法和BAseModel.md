# 基本用法

```python
from fastapi import FastApi

app=FastAPI()
#RESTful接口设计规范中：
     #1.面向资源（URI->url)
     #2.每一个资源都具有GET/POST/PUT/DELETE
     #3.每个资源动作都是无状态的（HTTP协议的短连接，即不保存客户端和服务端的连接通道）
     #4.（C/S、B/S)客户端和服务端交互的数据格式都使用json(content-type:application/json)
@app.get('/')
async def index():
    return {'data':['disen','jack','lucy']}


#启动服务器
#uvicorn 文件名（不带py后缀）：对象名 --reload
uvicorn main:app --reload --host 0.0.0.0


```

# BaseModel

response body

BaseModel可以定义请求体的结构（json对象）

```python
from fastapi import FastAPI
from pydantic import BaseModel
app=FastAPI()

class LoginUser(BaseModel):
    phone:str
    code:str
    
@app.post('/login')
async def user_login_by_phone(user:LoginUser):
    
    return {'msg':'用户已登录','phone':user.phone}
```

