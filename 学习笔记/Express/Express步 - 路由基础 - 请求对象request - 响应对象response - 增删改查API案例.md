

## 1\. 起步



## 1.1 文档

[www.expressjs.com.cn/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.expressjs.com.cn%2F "https://www.expressjs.com.cn/")
## 1.2 安装

```
npm i express
```

![在这里插入图片描述](media/在这里插入图片描述-5.webp) 安装接口测试工具Postman [www.postman.com/downloads/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.postman.com%2Fdownloads%2F "https://www.postman.com/downloads/")

## 1.3 Hello World

创建app.js文件

```javascript
const express = require("express");

const app = express();
const port = 3000 // 默认3000

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

运行app.js

![在这里插入图片描述](media/在这里插入图片描述-6.webp)

打开网页

![在这里插入图片描述](media/在这里插入图片描述-9.webp) 可以使用nodemon启动程序

![在这里插入图片描述](media/在这里插入图片描述-8.webp)

这样可以检测文件变化，自动更新程序

Postman接口测试

![在这里插入图片描述](media/在这里插入图片描述-7.webp)

## 2\. 路由基础

路由是指确定应用程序响应客户端对特定端点的请求，该特定端点是URI和特定HTTP请求方法（GET/POST等） 每个路由可以具有一个或多个处理程序函数，这些函数在匹配该路由时执行

路由定义采用以下结构

```
app.METHOD(path, handle)
```

-   `app` Express实例
-   `METHOD` 小写的HTTP请求方法
-   `path` 服务器上的路由路径
-   `handle` 当路由匹配时执行的处理函数

更多路由相关 [www.expressjs.com.cn/guide/routi…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.expressjs.com.cn%2Fguide%2Frouting.html "https://www.expressjs.com.cn/guide/routing.html")

## demo

1.  在根路径响应 ‘Hello World’

```javascript
app.get('/', (req, res) => {
  res.send('Hello World')
})
```

![在这里插入图片描述](media/在这里插入图片描述-7.webp)

2.  在根路径响应POST请求

```javascript
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```

![在这里插入图片描述](media/在这里插入图片描述-13.webp)

3.  响应对/user路径的PUT请求

```
app.put("/user", (req, res) => {
  res.send("Got a POST request at /user");
});
```

![在这里插入图片描述](media/在这里插入图片描述-12.webp)

4.  响应对/user路径的DELETE 请求

```javascript
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
```

![在这里插入图片描述](media/在这里插入图片描述-16.webp)

## 3\. 请求和响应

Express 应用使用路由回调函数的参数 `request` 和 `response` 对象来处理**请求**和**响应**的数据

```javascript
app.get('/', (request, response)=>{
// ...
})
```

Express不对Node.js已有的特性进行二次抽象，只是在它之上拓展了web应用所需的基本功能

-   内部使用的还是http模块
-   请求对象继承自 `http.IncomingMessage`
-   响应对象继承自 `http.ServerResponse`

Express拓展了HTTP模块中的请求和响应对象

## 3.1 请求对象 request

API

Node.js [nodejs.org/dist/latest…](https://link.juejin.cn/?target=https%3A%2F%2Fnodejs.org%2Fdist%2Flatest-v14.x%2Fdocs%2Fapi%2Fhttp.html "https://nodejs.org/dist/latest-v14.x/docs/api/http.html")

![在这里插入图片描述](media/在这里插入图片描述-15.webp)

Express [www.expressjs.com.cn/4x/api.html…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.expressjs.com.cn%2F4x%2Fapi.html%23req "https://www.expressjs.com.cn/4x/api.html#req")

![在这里插入图片描述](media/在这里插入图片描述-11.webp)

`request` 对象代表HTTP请求，并具有请求查询字符串，参数，正文，HTTP标头等属性

```javascript
app.get("/", (request, res) => {
  console.log("request.url:", request.url);
  console.log("request.method:", request.method);
  console.log("request.headers:", request.headers);
  console.log('请求参数：', request.query)
  res.send("Hello World");
});
```

postman发送请求 ![在这里插入图片描述](media/在这里插入图片描述-13.webp)

控制台输出 ![在这里插入图片描述](media/在这里插入图片描述-21.webp)

## 3.2 响应对象 response

Node.js [nodejs.org/dist/latest…](https://link.juejin.cn/?target=https%3A%2F%2Fnodejs.org%2Fdist%2Flatest-v14.x%2Fdocs%2Fapi%2Fhttp.html "https://nodejs.org/dist/latest-v14.x/docs/api/http.html")

![在这里插入图片描述](media/在这里插入图片描述-21.webp)

Express [www.expressjs.com.cn/4x/api.html…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.expressjs.com.cn%2F4x%2Fapi.html%23res "https://www.expressjs.com.cn/4x/api.html#res")

![在这里插入图片描述](media/在这里插入图片描述-10.webp)

```javascript
app.get("/", (request, response) => {
  // 设置响应状态码
  // response.statusCode = 201

  // response.write('a')
  // response.write('b')
  // response.write('c')

  // 结束响应
  // response.end()
  // response.end('efg')

  // response.send("Hello World");
  // response.send({
  //   name: 'yk'
  // })
  response.cookie('yk', 'kk')
  response.status(201).send('OK')
});
```

![在这里插入图片描述](media/在这里插入图片描述-16.webp)

## 3.3 案例

通过该案例创建一个简单的CRUD接口服务，从而掌握Express的基本用法

需求：实现对任务清单的CRUD接口服务

-   查询任务列表
    -   GET /todos
-   根据ID查询单个任务
    -   GET /todos/:id
-   添加任务
    -   POST /todos
-   修改任务
    -   PATCH /todos
-   删除任务
    -   DELETE /todos/:id

首先创建一个文件db.json用来存储数据

```json
{
  "todos": [
    {
      "id": 1,
      "title": "吃饭"
    },
    {
      "id": 2,
      "title": "睡觉"
    },
    {
      "id": 3,
      "title": "写代码"
    }
  ]
}
```

### GET 查询任务列表

```javascript
app.get("/todos", (req, res) => {
  fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
    const db = JSON.parse(data);
    res.status(200).json(db.todos);
  });
});
```

测试

![在这里插入图片描述](media/在这里插入图片描述-17.webp)

### GET 根据ID查询单个任务

```javascript
app.get("/todos/:id", (req, res) => {
  fs.readFile("./db.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
    const db = JSON.parse(data);
    // console.log(typeof req.params.id) // string
    const todo = db.todos.find((todo) => todo.id === +req.params.id);
    if (!todo) {
      return res.status(404).end();
    }
    res.status(200).json(todo);
  });
});
```

测试

![在这里插入图片描述](media/在这里插入图片描述-21.webp)

![在这里插入图片描述](media/在这里插入图片描述-20.webp)

### 优化：将数据读取操作封装起来

创建db.js

```javascript
const fs = require("fs");
const { promisify } = require("util");
const path = require("path");

const readFile = promisify(fs.readFile);

const dbPath = path.join(__dirname, "./db.json");

exports.getDb = async () => {
  const data = await readFile(dbPath, "utf8");
  return JSON.parse(data);
};
```

优化后的GET请求

```javascript
const { getDb } = require("./db");

app.get("/todos", async (req, res) => {
  try {
    const db = await getDb();
    res.status(200).json(db.todos);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const db = await getDb();
    const todo = db.todos.find((todo) => todo.id === +req.params.id);
    if (!todo) {
      return res.status(404).end();
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
```

### POST添加任务

在db.js中

封装保存文件的方法saveDb

```javascript
const writeFile = promisify(fs.writeFile);

exports.saveDb = async (db) => {
  const data = JSON.stringify(db, null, "  ");
  await writeFile(dbPath,data);
};
```

在app.js中

【中间件】

配置解析表单请求体：application/json

```javascript
app.use(express.json());
```

配置解析表单请求体：applicatioin/x-www-form-urlencoded

```javascript
app.use(express.urlencoded());
```

完整代码

```javascript
app.post("/todos", async (req, res) => {
  try {
    // 1. 获取客户端请求体参数
    const todo = req.body;

    // 2. 数据验证
    if (!todo.title) {
      return res.status(422).json({
        error: "The filed title is required.",
      });
    }

    // 3. 数据验证通过，把数据存储到db中
    const db = await getDb();
    const lastTodo = db.todos[db.todos.length - 1];
    todo.id = lastTodo ? lastTodo.id + 1 : 1;
    db.todos.push(todo);
    await saveDb(db);

    // 4. 发送响应
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
```

测试 ![在这里插入图片描述](media/在这里插入图片描述-15.webp) ![在这里插入图片描述](media/在这里插入图片描述-14.webp) ![在这里插入图片描述](media/在这里插入图片描述-21.webp)

db.json文件更新 ![在这里插入图片描述](media/在这里插入图片描述-11.webp)

### PATCH 修改任务

```javascript
app.patch("/todos/:id", async (req, res) => {
  try {
    // 1. 获取表单数据
    const todo = req.body;
    // 2. 查找到要修改的任务项
    const db = await getDb();
    const result = db.todos.find((todo) => todo.id === +req.params.id);
    if (!result) {
      return res.status(404).end();
    }
    // 3. 合并对象
    Object.assign(result, todo);
    await saveDb(db);
    // 4. 发送响应
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
```

![在这里插入图片描述](media/在这里插入图片描述-21.webp) ![在这里插入图片描述](media/在这里插入图片描述-22.webp)

### DELETE 删除任务

```javascript
app.delete("/todos/:id", async (req, res) => {
  try {
    const db = await getDb();
    const index = db.todos.findIndex((todo) => todo.id === +req.params.id);
    if (index === -1) {
      return res.status(404).end();
    }
    db.todos.splice(index, 1);
    await saveDb(db);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
```

测试 ![在这里插入图片描述](media/在这里插入图片描述-20.webp) ![在这里插入图片描述](media/在这里插入图片描述-18.webp) ![在这里插入图片描述](media/在这里插入图片描述-19.webp)

## 4\. 路由详细

## 4.1 路由方法

路由方法是从HTTP方法之一派生的，并附加到express该类的实例

以下代码是为GET和POST方法定义的到应用根目录的路由的示例

```javascript
app.get('/', (req, res) => {
  res.send('GET request to the homeage')
})
app.post('/', (req, res) => {
  res.send('POST request to the homeage')
})
```

Express支持与所有HTTP请求方法相对应的方法：get，post等。 有关完整列表请见[www.expressjs.com.cn/4x/api.html…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.expressjs.com.cn%2F4x%2Fapi.html%23routing-methods "https://www.expressjs.com.cn/4x/api.html#routing-methods")

还有一种特殊的路由方法，`app.all()`用于为所有HTTP请求方法的路径加载中间件功能。无论是使用GET, POST, PUT, DELETE还是http模块支持的任何其他HTTP请求方法，都会对路由的请求执行以下处理程序

```javascript
app.all('/', (req, res) => {
  console.log("all Method");
  next();
})
```

## 4.2 路由路径

路由路径与请求方法结合，定义了可以进行请求的端点。

路由路径可以是【字符串】，【字符串模式】或【正则表达式】。

子符`?` 、`+` 、`*` 和`()` 是他们的正则表达式的对应的子集。

连字符`-`和点`.`由基于字符串的路径字面意义进行解释

如果需要`$`在路径字符串中使用美元字符，要将其转移(\[并括在和中\])

例如`/data/$book`用于请求的路径字符串将为 `/data/([\s])book`

Express使用path-to-regexp来匹配路由路径；有关定义路由路径的所有可能性满清参见正则表达式路径文档

Express Route Tester 尽管不支持模式匹配，但却是用于测试基本Express路由的便捷工具

查询字符串不是路由路径的一部分

### 基于【字符串】的路由路径示例

1.  此路由路径会将请求匹配到根路由/

```javascript
app.get('/', (req, res) => {
  res.send('root');
})
```

2.  此路由路径会将请求匹配到/about

```javascript
app.get('/about', (req, res) => {
  res.send('about');
})
```

3.  此路由路径会将请求匹配到/random.text

```javascript
app.get('/random.text', (req, res) => {
  res.send('random.text');
})
```

### 基于【字符串模式】的路由路径示例

1.  此路由路径会将请求匹配到/acd和/abcd

```javascript
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd');
})
```

2.  此路由路径将请求匹配到/abcd、/abbcd、/abbbcd等

```javascript
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
})
```

3.  此路由路径将请求匹配到/abcd、/abxcd、/ab123cd、/abRANDOMcd等

```javascript
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd');
})
```

4.  此路由路径将请求匹配到/abe、/abcde

```javascript
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e');
})
```

### 基于【正则表达式】的路由路径示例

1.  此路由路径将请求匹配到其中带有'a'的任何内容

```javascript
app.get(/a/, (req, res) => {
  res.send('/a/');
})
```

2.  此路由路径将请求匹配到 fly结尾的内容

```javascript
app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/');
})
```

## 4.3 路径参数

路由参数被命名为URL段，用于捕获URL中在其位置处所指定的值 捕获的值将填充到req.params对象中，并将路径中指定的route参数的名称作为其各自的键

```javascript
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: {"userId": "34", "bookId": "8989"}
```

要使用路由参数定义路由，只需在路由路径中指定路由参数

```javascript
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
})
```

路径参数的名称必须由文字字符（\[A-Za-z0-9\_\]）组成 由于连字符`-`和点`.`是按字面解释的，因此可以将它们与路由参数一起使用

```javascript
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: {"from": "LAX", "to": "SFO"}
```

```javascript
Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: {"genus": "Prunus", "species": "persica"}
```

要更好的控制可以由route参数匹配的确切字符串，可以在括号`()`后面附加一个正则表达式

```javascript
Route path: /user/:userId(\\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
```

## 4.4 路由处理程序

您可以提供行为类似于中间件的多个回调函数来处理请求。唯一的例外是这些回调可能会调用next( 'route ')以绕过其余的路由回调。您可以使用此机制在路由上施加先决条件，然后在没有理由继续使用当前路由的情况下将控制权传递给后续路由。 路由处理程序可以采用函数，函数数组或二者组合的形式，如以下示例所示。 单个回调函数可以处理路由。

```javascript
app.get('/users/a', (req, res) => {
  res.send('Hello A');
})
```

多个回调函数可以处理同一条路由（清确保指定了next对象）

```javascript
app.get('/users/b', (req, res) => {
  console.log('Hello')
  next()
}, (req, res) => {
  res.send('Hello B');
})
```

回调函数数组可以处理路由

```javascript
function logOriginalUrl(req, res, next) {
  console.log("Request URL", req.originalUrl);
  next();
}
function logMethod(req, res, next) {
  console.log("Requset Type", req.method);
  next();
}
const logStuff = [logOriginalUrl, logMethod];

app.get("/user/:id", logStuff, (req, res, next) => {
  res.send("User Info");
});
```

独立功能和功能数组的组合可以处理路由

## 4.5 响应方法

res下表中响应对象()上的方法可以将响应发送到客户端，并终止请求-响应周期。如果没有从路由处理程序调用这些方法，则客户端请求将被挂起。

| 方法 | 描述 |
| --- | --- |
| res.download() | 提示要下载的文件 |
| res.end() | 结束响应过程 |
| res.json() | 发送JSON响应 |
| res.jsonp() | 发送带有JSONP支持的JSON响应 |
| res.redirect() | 重定向请求 |
| res.render() | 渲染视图模板 |
| res.send() | 发送各种类型的响应 |
| res.sendFile() | 将文件作为八位字节流发送 |
| res.sendStatus() | 设置响应状态码，并将其字符串表示形式发送为响应正文 |

## 4.6 app.route()

您可以使用来为路由路径创建可链接的路由处理程序app.route()。由于路径是在单个位置指定的，因此创建模块化路由非常有帮助，减少冗余和错别字也很有帮助。有关路由的更多信息，请参见: Router()文档。

这是使用定义的链式路由处理程序的示例app.route()。

```javascript
app.route('/book')
.get((req, res)=>{
  res.send('Get a random book')
})
.post((req, res)=>{
  res.send('Add a book')
})
.put((req, res)=>{
  res.send('Update the book')
})
```

