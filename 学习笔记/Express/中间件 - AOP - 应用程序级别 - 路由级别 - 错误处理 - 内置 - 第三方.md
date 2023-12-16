
> 之前我们对[Express进行了一个入门](https://juejin.cn/post/7022539322670710798 "https://juejin.cn/post/7022539322670710798")，今天来学习Express中间件相关内容，先介绍一些内置中间件的使用，后面我们做小demo的时候再用一些第三方中间件.

## 1\. 示例

需求：输出请求日志

```javascript
app.get("/", (req, res) => {
  console.log(req.method, req.url, Date.now());
  res.send("get /");
});
```

如果要给每个路由都输出请求日志，我们可以封装在一个函数中

```javascript
const myLooger = (req) => {
  console.log(req.method, req.url, Date.now());
};
app.get("/", (req, res) => {
  myLooger(req);
  res.send("get /");
});
```

但是我们不想修改每一个路由，可以用中间件 【任何请求都会使用这个中间件】

```javascript
// req 请求对象
// res 响应对象
// next 下一个中间件
app.use((req, res, next) => {
  console.log(req.method, req.url, Date.now())
  // 交出执行权，往后继续匹配执行
  next()
})

app.get("/", (req, res) => {
  res.send("get /");
});
```

中间件的顺序很重要【从上往下】 【路由】也是一种【中间件】

## 2\. 概念解析

## 2.1 中间件与AOP

Express的最大特色，也是最重要的一个设计，就是中间件。

**在不修改原有代码的基础上，增加一些新的功能**

一个Express应用，就是由许许多多的中间件来完成的。

Express中间件类似于AOP面向切面编程 都是需要经过一些步骤，不用去修改自己的代码，从此来拓展或处理一些功能

-   AOP（Aspect Oriented Programming）面向切面编程
    -   将日志记录，性能统计、安全控制、事务处理、异常处理等代码从业务逻辑代码中划分出来，通过对这些行为的分离，希望可以将它们独立到非指导业务逻辑的方法中，进而改变这些行为的时候不影响业务逻辑的代码
    -   利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性同时提高了开发的效率和可维护性

![在这里插入图片描述](media/在这里插入图片描述-1.webp) 总结：在现有的代码程序中，在程序生命周期或者横向流程中，加入/减去一个或多个功能，不影响原有功能。

## 2.2 Express中的中间件

在Express中，中间件就是一个可以访问请求对象、响应对象和调用next方法的一个函数

![在这里插入图片描述](media/在这里插入图片描述.webp)

在中间件函数中，可以执行以下任何任务

-   执行任何代码
-   修改 `request` 或 `response` 响应对象【同一个生命周期】
-   结束请求响应周期
-   调用下一个中间件

【注意】如果当前的中间件功能没有结束请求-响应周期，则必须调用`next()`将控制全传递给下一个中间件功能。否则，该请求将被挂起

## 3\. 详细使用

在Express中应用程序可以使用以下类型的中间件

-   应用程序级别中间件
-   路由级别中间件
-   错误处理中间件
-   内置中间件
-   第三方中间件

## 3.1 应用程序级别中间件

不关心请求路径

```javascript
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});
```

限定请求路径

```javascript
app.use('/user/:id',(req, res, next) => {
  console.log("Request Type", req.method); // GET
  next();
});
```

限定请求方法+请求路径【路由中间件】

```javascript
app.get('/user/:id',(req, res, next) => {
  res.send('Hello World')
});
```

多个处理函数

```javascript
app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Type", req.method);
    next();
  }
);
```

为同一个路径定义多个处理中间件

```javascript
app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("ID", req.params.id);
    next();
  },
  (req, res, next) => {
    res.send("User Info");
    next();
  }
);

app.get("/user/:id", (req, res, next) => {
  console.log("123");
  // res.end(req.params.id);
});
```

要从路由器中间件堆栈中跳过其余多个中间件功能，请调用`next('route')`将控制权传递给下一条路由

【注意】`next('route')`仅在使用`app.METHOD()`或`router.METHOD()`函数加载的中间函数中有效

此示例显示了一个中间件子堆栈，该子堆栈处理对`/user/:id`路径的GET请求

```javascript
app.get(
  "/user/:id",
  (req, res, next) => {
    if (req.params.id === "0") next("route");
    else next();
  },
  (req, res, next) => {
    res.send("regular");
  }
);

app.get("/user/:id", (req, res, next) => {
  res.send("special");
});
```

中间件也可以在【数组】中声明为可重用。

此示例显示了一个带有中间件子堆栈的数组，该子堆栈处理对`/user/:id`路径的GET请求

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

## 3.2 路由级别中间件

创建路由器文件

router.js

```javascript
const express = require('express')

// 1. 创建路由实例
// 路由实例相当于一个 mini Express实例
const router = express.Router()

// 2. 配置路由
router.get('/user', (req, res) => {
  res.send('get /user')
})

router.post('/user/:id', (req, res) => {
  res.send(`post /user/${req.params.id}`)
})

// 3. 导出路由实例
// export default router
module.exports = router

// 4. 将路由集成到 Express实例中[挂载]
```

app.js

```javascript
const express = require("express");
const router = require('./router')

const app = express();
const port = 3000; // 默认3000

// 4. 挂载路由
app.use(router)
app.use('/yk', router)//设定前缀/yk/login

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

![在这里插入图片描述](media/在这里插入图片描述-3.webp)

## 3.3 错误处理中间件

错误处理【匹配到了出现错误调用next(err)】

定义错误处理中间件函数，使用四个参数

一般是在所有中间件之后挂载错误处理中间件

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

错误处理中间件始终带有四个参数，必须提供四个参数，即使不需要`next`也要指定它，否则，将会解释成常规中间件，并且无法处理错误

如果将任何内容传递给该`next()`函数（`'route'`除外），Express都会将当前请求视为错误，并且将跳过所有剩余的非错误处理路由和中间件函数

```javascript
app.get("/todos", async (req, res, next) => {
  try {
    const db = await getDb();
    res.status(200).json(db.todos);
  } catch (err) {
    // 跳过所有剩余的无错误处理路由和中间函数
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log("错误", err);
  res.status(500).json({
    error: err.message,
  });
});
```

处理404【路由匹配不到情况】

通常会在所有的路由之后配置处理 404 的内容，与错误处理中间件位置可以互换，其它的中间件不行。

```javascript
app.use((req, res, next) => {
  res.status(404).send("404 Not Found.");
});
```

## 3.4 内置中间件

-   `express.json()` 解析Content-Type为`application/json`格式的请求体
-   `express.urlencoded()` 解析Content-Type 为`application/x-www-form-urlencoded`格式的请求体
-   `express.raw()` 解析Content-Type为`application/octet-stream`格式的请求体
-   `express.text()` 解析Content-Type为`text/plain`格式的请求体
-   `express.static()` 托管静态资源文件

## 3.5 第三方中间件

早期的Express内置了很多中间件。后来Express在4.x之后移除了这些内置中间件，官方把这些功能中间件以包的形式提供出来。这样做的目的是为了保持Express本身极简灵活的特性，开发人员可以根据自己的需要去灵活的使用。

[www.expressjs.com.cn/resources/m…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.expressjs.com.cn%2Fresources%2Fmiddleware.html "https://www.expressjs.com.cn/resources/middleware.html")

![在这里插入图片描述](media/在这里插入图片描述-2.webp) ![在这里插入图片描述](media/在这里插入图片描述-4.webp)
