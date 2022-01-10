# Flask的配置和访问

```python
from flask import Flask
app=Flask(__name__) #__name__是当前文件返回__main__

app.run()
#以上内容可以通过python3 app.py进行运行，是WSGI服务器来运行
```

**WSGI** ：Web服务器网关接口（Python Web Gateway Interface）为Python定义的Web服务器和Web应用程序或框架之间的一种简单的通用接口。让Flask、Django、Tornado都能和Web Server进行操作。

