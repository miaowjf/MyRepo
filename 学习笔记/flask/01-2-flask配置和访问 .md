# Flask的配置和访问

```python
from flask import Flask
app=Flask(__name__) #__name__是当前文件返回__main__
@app.route('/')
def hello_world():
    return "Hello World!"

if __name__=='__main__' :
    app.run()
#以上内容可以通过python3 app.py进行运行，是WSGI服务器来运行
#app.run(host='0.0.0.0',port=8080)**注意事项**  ：需要将系统的端口打开，sudo ufw allow 8080
#host='0.0.0.0' 外网也能使用
#debug=1 True False 改变代码时重新加载，用于调试
```

**WSGI** ：Web服务器网关接口（Python Web Gateway Interface）为Python定义的Web服务器和Web应用程序或框架之间的一种简单的通用接口。让Flask、Django、Tornado都能和Web Server进行操作。

安装完**flask**后，直接创建app.py，使用python app.py 就可以执行

app.run(host='0.0.0.0',port=8080)**注意事项**  ：需要将系统的端口打开，sudo ufw allow 8080

使用配置文件

```python
from flask import Flask
app=Flask(__name__)
app.config['ENV']='development'
app.config['DEBUG']=True
app.config['HOST']='0.0.0.0'
#新建一个配置文件做以上的配置

import settings
app.config.from_object(settings)
app.config.from_pyfile('settings.py')#从文件中调取配置
```

```python
settings.py
#配置文件
ENV='development'
DEBUG=True
#配置文件不能更改端口号PORT
在app.py中导入settings,使用app.config.from_object(settings)
```



production

development

testing 



