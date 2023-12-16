> 嗨！~ 大家好，我是YK菌 🐷 ，一个微系前端 ✨，喜欢分享自己学到的小知识 🏹，欢迎关注我呀 😘 ~ \[微信号: yk2012yk2012，微信公众号：ykyk2012\]

小知识，大挑战！本文正在参与“[程序员必备小知识](https://juejin.cn/post/7008476801634680869 "https://juejin.cn/post/7008476801634680869")”创作活动。 本文已参与「[掘力星计划](https://juejin.cn/post/7012210233804079141/ "https://juejin.cn/post/7012210233804079141/")」，赢取创作大礼包，挑战创作激励金。

> 前两天我们学习了[Express基础](https://juejin.cn/post/7022539322670710798 "https://juejin.cn/post/7022539322670710798")、[中间件](https://juejin.cn/post/7022848797319364638 "https://juejin.cn/post/7022848797319364638")和[MongoDB基础](https://juejin.cn/post/7022851535461679141 "https://juejin.cn/post/7022851535461679141")，今天我们就来写一个Github上一个很火的开源项目RealWorld后端接口，会实现登录注册接口、用户操作、文章操作增删改查接口等...

开源项目的地址 [github.com/gothinkster…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgothinkster%2Frealworld "https://github.com/gothinkster/realworld") ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-50.webp) 本文源码 [github.com/yk2012/expe…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fyk2012%2Fexperss_demo%2Ftree%2Fmaster%2Frealworld-api-express "https://github.com/yk2012/experss_demo/tree/master/realworld-api-express")

视频 [Express 教程（基础+实战+原理）](https://link.juejin.cn/?target=https%3A%2F%2Fwww.bilibili.com%2Fvideo%2FBV1mQ4y1C7Cn "https://www.bilibili.com/video/BV1mQ4y1C7Cn")

## 1\. 项目初始化

## 1.1 创建项目

```
mkdir realworld-api-express
cd .\realworld-api-express\
npm init -y
npm i express
复制代码
```

创建app.js

```javascript
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
复制代码
```

启动app

```
nodemon app.js
复制代码
```

测试 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-5.webp)

## 1.2 目录结构

```
.
|-- config     # 配置文件
|-- config.default.js
|-- controller # 用于解析用户的输入，处理后返回相应的结果
|-- model      # 数据持久层
|-- middleware # 用于编写中间件
|-- router     # 用于哦欸之URL路由规则
|-- util       # 工具模块
|-- app.js     # 用于自定义启动时的初始化工作
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-9.webp)

## 1.3 配置常用中间件

### 1.3.1 解析请求体 中间件

-   express.json()
-   express.urlencoded()

```javascript
app.use(express.json())
app.use(express.urlencoded())
复制代码
```

### 1.3.2 日志输出 中间件

-   morgan()

```
npm i morgan
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-32.webp)

```javascript
const morgan = require("morgan");

app.use(morgan("dev"));
复制代码
```

### 1.3.3 为客户端提供跨域资源请求 中间件

-   cors()

```
npm i cors
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述.webp)

```javascript
const cors = require("cors");

app.use(cors());
复制代码
```

### 1.3.4 挂载测试中间件

app.js

```javascript
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-21.webp)

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-13.webp)

## 2\. 路由设计

参照

[github.com/gothinkster…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fgothinkster%2Frealworld%2Ftree%2Fmaster%2Fapi "https://github.com/gothinkster/realworld/tree/master/api")

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-38.webp)

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-1.webp)

## ① app.js

```javascript
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");

const app = express();

// 配置常用中间件
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://loaclhost:${PORT}`);
});
复制代码
```

## ② index.js 路由

```javascript
const express = require("express");
const router = express.Router();

// 用户相关路由
router.use(require("./user"));

// 用户资料相关路由
router.use("/profiles", require("./profile"));

// 文章相关路由
router.use("/articles", require("./article"));

// 标签相关路由
router.use(require("./tag"));

module.exports = router;
复制代码
```

## ③ user.js 用户相关路由

```javascript
const express = require("express");
const router = express.Router();

// Authentication 用户登录
router.post("/users/login", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /users/login");
  } catch (err) {
    next(err);
  }
});

// Registration 用户注册
router.post("/users", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /users");
  } catch (err) {
    next(err);
  }
});

// Get Current User 获取当前登录用户
router.get("/user", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /user");
  } catch (err) {
    next(err);
  }
});

// Update User 更新用户
router.put("/user", async (req, res, next) => {
  try {
    // 处理请求
    res.send("put /user");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
复制代码
```

## ④ profile.js 用户资料相关路由

```javascript
const express = require("express");
const router = express.Router();

// Get Profile 获取用户资料
router.get("/:username", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /profile/:username");
  } catch (err) {
    next(err);
  }
});

// Follow user 关注用户
router.post("/:username/follow", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /profile/:username/follow");
  } catch (err) {
    next(err);
  }
});

// Unfollow user 取消关注用户
router.delete("/:username/follow", async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /profile/:username/follow");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
复制代码
```

## ⑤ article.js 文章相关路由

```javascript
const express = require("express");
const router = express.Router();

// List Articles
router.get("/", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /");
  } catch (err) {
    next(err);
  }
});

// Feed Articles
router.get("/feed", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/feed");
  } catch (err) {
    next(err);
  }
});

// Get Article
router.get("/:slug", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/:slug");
  } catch (err) {
    next(err);
  }
});

// Create Article
router.post("/", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /articles");
  } catch (err) {
    next(err);
  }
});

// Update Article
router.put("/:slug", async (req, res, next) => {
  try {
    // 处理请求
    res.send("put /articles/:slug");
  } catch (err) {
    next(err);
  }
});

// Delete Article
router.delete("/:slug", async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug");
  } catch (err) {
    next(err);
  }
});

// Add Comments to an Article
router.post("/:slug/comments", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /articles/:slug/comments");
  } catch (err) {
    next(err);
  }
});

// Get Comments from an Article
router.get("/:slug/comments", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/:slug/comments");
  } catch (err) {
    next(err);
  }
});

// Delete Comment
router.delete("/:slug/comments/:id", async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug/comments/:id");
  } catch (err) {
    next(err);
  }
});

// Favorite Article
router.post("/:slug/favorite", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
});

// Unfavorite Article
router.delete("/:slug/favorite", async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
复制代码
```

## ⑥ tag.js 标签相关路由

```javascript
const express = require("express");
const router = express.Router();

// Get Tags
router.get("/tags", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /tags");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
复制代码
```

## 3\. 提取控制器模块

将具体的处理请求的操作提取到控制器模块中

【以user为例】

controller/user.js

```javascript
// Authentication 用户登录
exports.login = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /users/login");
  } catch (err) {
    next(err);
  }
};

// Registration 用户注册
exports.register = async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /users");
  } catch (err) {
    next(err);
  }
};

// Get Current User 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /user");
  } catch (err) {
    next(err);
  }
};

// Update User 更新用户
exports.updateUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send("put /user");
  } catch (err) {
    next(err);
  }
};
复制代码
```

router/user.js

```javascript
const express = require("express");
const userCtrl = require("../controller/user");

const router = express.Router();

// Authentication 用户登录
router.post("/users/login", userCtrl.login);

// Registration 用户注册
router.post("/users", userCtrl.register);

// Get Current User 获取当前登录用户
router.get("/user", userCtrl.getCurrentUser);

// Update User 更新用户
router.put("/user", userCtrl.updateUser);

module.exports = router;
复制代码
```

## 4\. 配置统一错误处理中间件

middleware/error-handler.js

```javascript
const util = require("util");

module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      error: util.format(err),
    });
  };
};

复制代码
```

app.js

```javascript
const errorHandler = require("./middleware/error-handler");

// 挂载统一处理服务端错误中间件
app.use(errorHandler());
复制代码
```

## 5\. 统一管理测试接口

在Postman中 新建一个集合realworld-API 里面新建一些文件夹和具体的请求操作 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-30.webp)

配置开发环境与生产环境的 base\_url ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-32.webp) 测试接口 {{base\_url}} ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-36.webp)

## 6\. 数据库

数据库相关知识可以参考 [【MongoDB】数据库安装与基本操作 - mongoose - 增删改查](https://juejin.cn/post/7022851535461679141 "https://juejin.cn/post/7022851535461679141")

## 6.1 安装mongoose

```
npm i mongoose
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-31.webp) 开启数据库 打开MongoDB Compass

## 6.2 连接数据库

配置数据库默认地址 config/config.default.js

```javascript
/**
 * 默认配置
 */
module.exports = {
  dbURI: "mongodb://localhost:27017/realworld",
};
复制代码
```

model/index.js

```javascript
const mongoose = require("mongoose");
const { dbURI } = require("../config/config.default");

// 连接 MongoDB 数据库
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// 当连接失败的时候
db.on("error", (err) => {
  console.log("MongoDB 数据库连接失败！", err);
});
// 当连接成功的时候
db.once("open", function () {
  console.log("MongoDB 数据库连接成功！");
});
复制代码
```

app.js引入连接数据库

```javascript
require("./model");
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-3.webp)

## 6.3 设计数据模型

model/user.js userSchema

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
复制代码
```

## 6.4 导出数据模型

model/index.js

```javascript
const mongoose = require("mongoose");
const { dbURI } = require("../config/config.default");

// 连接 MongoDB 数据库
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// 当连接失败的时候
db.on("error", (err) => {
  console.log("MongoDB 数据库连接失败！", err);
});
// 当连接成功的时候
db.once("open", function () {
  console.log("MongoDB 数据库连接成功！");
});

// 组织导出模型看类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}
复制代码
```

## 6.5 将数据插入数据库

```javascript
const { User } = require("../model");

// Registration 用户注册
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user);
    // 保存到数据库
    await user.save();
    // 转成json
    user = user.toJSON();
    // 删除密码属性
    delete user.password;
    // 4. 发送成功响应，返回用户数据
    res.status(201).json({
      user,
    });
  } catch (err) {
    next(err);
  }
};
复制代码
```

## 6.6 测试

【注册用户】 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-36.webp) ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-33.webp)

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-39.webp) ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-6.webp) ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-8.webp)

## 6.7 【优化】提取通用数据模型

将通用的数据模型提取出来单独创建一个文件base-model.js，然后在需要用的地方引入即可

model/base-model.js

```javascript
module.exports = {
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
};
复制代码
```

## 7\. 数据验证

## 7.1 接口设计步骤

1.  获取请求体数据
2.  数据验证 2.1 基本数据验证 2.2 业务数据验证
3.  验证通过，将数据保存到数据库
4.  发送成功响应

## 7.2 数据验证问题

mongodb会在插入数据库的时候进行数据验证 其实我们需要在插入之前就要对数据进行一些验证

可以借助一些Node.js资源来实现 可以关注这个仓库，收集了很多很棒的Node.js资源

`awesome-nodejs` [github.com/sindresorhu…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fsindresorhus%2Fawesome-nodejs "https://github.com/sindresorhus/awesome-nodejs") 其中有一些优秀的数据验证的库 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-44.webp)

这里我们使用express-validator，这是一个基于validator的Express中间件(对validator的包装) [github.com/express-val…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fexpress-validator%2Fexpress-validator "https://github.com/express-validator/express-validator") ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-20.webp) 安装

```
npm i express-validator
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-29.webp) 文档 [express-validator.github.io/docs/](https://link.juejin.cn/?target=https%3A%2F%2Fexpress-validator.github.io%2Fdocs%2F "https://express-validator.github.io/docs/")

## 7.3 使用express-validator

在router/user.js中加入中间件

```javascript
const { body, validationResult } = require("express-validator");
const { User } = require("../model");

// Registration 用户注册
router.post(
  "/users",
  [
    // 1. 配置验证规则
    body("user.username")
      .notEmpty()
      .withMessage("用户名不能为空")
      .custom(async (value) => {
        // 查询数据库 查看数据是否存在
        const user = await User.findOne({ username: value });
        if (user) {
          return Promise.reject("用户已存在");
        }
      }),
    body("user.password").notEmpty().withMessage("密码不能为空"),
    body("user.email")
      .notEmpty().withMessage("邮箱不能为空")
      .isEmail().withMessage("邮箱格式不正确")
      .bail() // 如果错误就不向下执行
      .custom(async (value) => {
        // 查询数据库查看数据是否存在
        const user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject("邮箱已存在");
        }
      }),
  ],
  (req, res, next) => {
    // 2. 判断验证结果
    const errors = validationResult(req);
    // 验证失败
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // 验证通过，放行
    next();
  },
  userCtrl.register
); // 3. 通过验证，执行具体的控制器处理
复制代码
```

数据错误 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-15.webp)

成功 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-49.webp) 数据重复 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-11.webp)

## 7.4 提取验证中间件模块

在路由中写这么多的【验证规则】和【判断验证规则】的代码，导致代码很乱，我们应该把这些校验抽离出来成一个中间件 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-43.webp)

middleware/validate.js 对验证结果进行处理，抽离在validate中间件

```javascript
const { validationResult } = require("express-validator");

// parallel processing 并行处理
// 暴露一个函数，函数接收验证规则，返回一个函数
module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};
复制代码
```

validator/user.js 将【验证规则】抽离出来

```javascript
const { body } = require("express-validator");
const validate = require("../middleware/validate");
const { User } = require("../model");

exports.register = validate([
  // 1. 配置验证规则
  body("user.username")
    .notEmpty().withMessage("用户名不能为空")
    .custom(async (value) => {
      // 查询数据库查看数据是否存在
      const user = await User.findOne({ username: value });
      if (user) {
        return Promise.reject("用户已存在");
      }
    }),
    
  body("user.password").notEmpty().withMessage("密码不能为空"),
  
  body("user.email")
    .notEmpty().withMessage("邮箱不能为空")
    .isEmail().withMessage("邮箱格式不正确")
    .bail() // 如果错误就不向下执行
    .custom(async (value) => {
      // 查询数据库查看数据是否存在
      const user = await User.findOne({ email: value });
      if (user) {
        return Promise.reject("邮箱已存在");
      }
    }),
]);
复制代码
```

路由就可以简化 router/user.js

```
const userValidator = require("../validator/user");

// Registration 用户注册
router.post("/users", userValidator.register, userCtrl.register); 
复制代码
```

## 8\. 密码加密处理

密码存储在数据库中是明文存储的，应该采用密文存储 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-7.webp) 明文通过md5算法转换成密文

```javascript
const crypto = require("crypto");

// 获取 crypto 支持的散列算法
console.log(crypto.getHashes());

// 使用
const reslut = crypto.createHash("md5").update("hello").digest("hex");

// 获取结果
console.log(reslut)
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-42.webp) 相同的字符串明文通过md5加密得到的结果都是一样的 可以在加密的时候混入一个明文私钥 或者进行二次md5加密

util/md5.js

```javascript
const crypto = require("crypto");

module.exports = (str) => {
  return crypto
    .createHash("md5")
    .update("yk" + str) //加了一个混淆字符串，安全性更好 
    .digest("hex");
};
复制代码
```

在模型中配置 model/user.js

```javascript
const mongoose = require("mongoose");
const baseModle = require("./base-model");
const md5 = require("../util/md5");

const userSchema = new mongoose.Schema({
  ...baseModle,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});

module.exports = userSchema;
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-21.webp) 再加一条，这样返回的信息中就不包含password了

```javascript
password: {
  type: String,
  required: true,
  set: (value) => md5(value),
  select: false,
},
复制代码
```

还要在控制器中删除password属性，这样就不会返回了

```javascript
// Registration 用户注册
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user);
    // 保存到数据库
    await user.save();
    user = user.toJSON();
    delete user.password;
    // 4. 发送成功响应
    res.status(201).json({
      user,
    });
  } catch (err) {
    next(err);
  }
};
复制代码
```

## 9\. 登录接口

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-40.webp) ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-4.webp)

## 9.1 登录信息验证

validator/user.js 在数组中配置多个validate 前一个通过才会走下面的

```javascript
exports.login = [
  validate([
    body("user.emil").notEmpty().withMessage("邮箱不能为空"),
    body("user.password").notEmpty().withMessage("密码不能为空"),
  ]),
  // 验证用户是否存在
  validate([
    body("user.emil").custom(async (email, { req }) => {
      const user = await User.findOne({ email }).select([
        "email",
        "password",
        "username",
        "bio",
        "image",
      ]);
      // 查询数据库查看数据是否存在
      if (!user) {
        return Promise.reject("用户不存在");
      }
      // 将数据挂载到请求对象中，后续的中间件也可以直接使用，就不需要重复查询了
      req.user = user;
    }),
  ]),
  // 验证密码是否正确
  validate([
    body("user.password").custom(async (password, { req }) => {
      if (md5(password) !== req.user.password) {
        return Promise.reject("密码错误");
      }
    }),
  ]),
];
复制代码
```

```javascript
// Authentication 用户登录
router.post("/users/login", userValidator.login, userCtrl.login);
复制代码
```

## 9.2 基于JWT的身份认证

`JSON Web Token` 简称 `JWT` 是目前最流行的跨域认证解决方案

### 跨域认证问题

互联网服务离不开用户认证。一般流程是下面这样：

1.  用户向服务器发送【用户名】和【密码】
2.  服务器验证通过后，在当前对话(session)里面保存相关数据，比如用户角色、登录时间等等
3.  服务器向用户返回一个session\_id，写入用户的Cookie
4.  用户随后的每一次请求，都会通过Cookie，将session\_id 传回服务器
5.  服务器收到session\_id，找到前期保存的数据，由此得知用户的身份

这种模式的问题在于，扩展性(scaling）不好。 单机当然没有问题，如果是服务器集群，或者是跨域的服务导向架构，就要求session数据共享，每台服务器都能够读取session。

举例来说，A网站和B网站是同一家公司的关联服务。现在要求，用户只要在其中一个网站登录，再访问另一个网站就会自动登录，请问怎么实现?

一种解决方案是session数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。

另一种方案是服务器不保存session数据，所有数据都保存在【客户端】，每次请求都发回服务器。JWT就是这种方案的一个代表。

### JWT原理

JWT的原理是，服务器认证以后，生成一个JSON 对象，发回给用户，就像下面这样。

```json
{
"姓名":"张三"，
"角色":"管理员",
"到期时间": "2021年7月1日0点0分"
}
复制代码
```

以后，用户与服务端通信的时候，都要发回这个JSON对象。 服务器完全只靠这个对象认定用户身份。 为了防止用户篡改数据，服务器在生成这个对象的时候，会加上【签名】(详见后文)。

服务器就不保存任何session数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。

### JWT的数据结构

实际上的JWT是这样的 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-12.webp) 它是一个很长的字符串，中间用点 `.` 分隔成三个部分。 注意，JWT内部是没有换行的，这里只是为了便于展示，将它写成了几行。

JWT的三个部分依次如下:

-   Header (头部)
-   Payload (负载)
-   Signature（签名）

写成一行就是

```
Header.Payload.Signature
复制代码
```

#### Header

Header部分是一个JSON对象，描述JWT的元数据，通常是下面这样

```
{
"alg": "HS256",
"type": "JWT"
}
复制代码
```

-   `alg`属性表示签名的算法(algorithm)，默认是HMAC SHA256(写成 HS256) ;
-   `typ`属性表示这个令牌(token)的类型(type) ,JWT令牌统一写为JWT。

最后，将上面的JSON对象使用`Base64URL` 算法（详见后文）转成字符串。

#### Payload

Payload部分也是一个JSON对象，用来存放实际需要传递的数据。JWT规定了7个官方字段，供选用。

-   `iss` (issuer): 签发人
-   `exp` (expiration time): 过期时间
-   `sub` (subject): 主题
-   `aud` (audience): 受众
-   `nbf` (Not Before): 生效时间
-   `iat` (lssued At): 签发时间
-   `jti`(JWT ID): 编号

除了官方字段，还可以定义私有字段

```
{
"sub": "1234323432",
"name": "YK",
"admin": true
}
复制代码
```

【注意】JWT默认是**不加密**的，不要把秘密信息放在这个部分

这个JSON对象也要使用Base64URL算法转换成字符串

[jwt.io/](https://link.juejin.cn/?target=https%3A%2F%2Fjwt.io%2F "https://jwt.io/") ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-22.webp)

#### Signature

Signature部分是对前两部分的签名，防止数据篡改。

首先，需要指定一个密钥(secret)。这个密钥只有服务器才知道，不能泄露给用户。 然后，使用Header里面指定的签名算法（默认是HMAC SHA256)，按照下面的公式产生签名。

```
HMACSHA256(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),
secret)
复制代码
```

算出签名以后，把 Header、Payload、Signature三个部分拼成一个字符串，每个部分之间用"点”(`.`）分隔，就可以返回给用户。

**在JWT中，消息体是透明的，使用签名可以保证消息不被篡改。但不能实现数据加密功能。**

#### Base64URL

前面提到，Header和 Payload 串型化的算法是`Base64URL`。 这个算法跟`Base64`算法基本类似，但有一些小的不同。

JWT作为一个令牌(token)，有些场合可能会放到URL(比如api.example.com/?token=xxx) 。 Base64有三个字符`+`、`/`和`=`，在URL里面有特殊含义，所以要被替换掉:`=`被省略、`+`替换成`-`，`/`替换成`_`。这就是Base64URL算法。

### JWT使用方式

客户端收到服务器返回的JWT，可以储存在Cookie 里面，也可以储存在localStorage。

此后，客户端每次与服务器通信，都要带上这个JWT。 你可以把它放在Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在HTTP **请求的头信息** `Authorization`字段里面。

```
Authorization: Bearer <token>
复制代码
```

另一种做法是，跨域的时候，JWT就放在POST请求的数据体里

### JWT的几个特点

1.  JWT默认是不加密，但也是可以加密的。生成原始Token 以后，可以用密钥再加密一次。
2.  JWT不加密的情况下，不能将秘密数据写入JWT。
3.  JWT不仅可以用于认证，也可以用于交换信息。有效使用JWT，可以降低服务器查询数据库的次数。
4.  JWT的最大缺点是，由于服务器不保存session状态，因此无法在使用过程中废止某个token，或者更改token的权限。也就是说，一旦JWT签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。
5.  JWT本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。
6.  为了减少盗用，JWT不应该使用HTTP协议明码传输要使用HTTPS协议传输。

### JWT的解决方案

[jwt.io/](https://link.juejin.cn/?target=https%3A%2F%2Fjwt.io%2F "https://jwt.io/") ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-34.webp)

### 在Node.js中使用JWT

[github.com/auth0/node-…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fauth0%2Fnode-jsonwebtoken "https://github.com/auth0/node-jsonwebtoken")

```
npm install jsonwebtoken
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-10.webp) 基本使用 有同步和异步两种方式，加入第三个回调函数，就是异步执行的了

```javascript
const jwt = require("jsonwebtoken");

// 生成jwt
jwt.sign(
  {
    name: "YK",
  },
  "abcdykyk",
  // 异步生成token
  (err, token) => {
    if (err) return console.log("生成 token 失败");
    console.log("生成token成功：", token);
  }
);

// 验证jwt
jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWUsiLCJpYXQiOjE2MjQ5NTgxNTl9.PcFPUDaqL_HHw7bctKcyI-CnCgwNgOGZwe7tYPtAj_Y",
  "abcdykyk",
  (err, res) => {
    if (err) return console.log("token认证失败");
    console.log("token认证成功：", res);
  }
);
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-47.webp)

## 9.3 生成token并发送到客户端

jwt异步不是promise形式的，可以将他转换成promise形式的

util /jwt.js

```javascript
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

// 解析
exports.sign = promisify(jwt.sign);

// 验证
exports.verify = promisify(jwt.verify);

// 不验证直接解析
// exports.decode = jwt.decode();
exports.decode = promisify(jwt.decode)
复制代码
```

用uuid生成一个唯一的字符串 [www.uuidgenerator.net/](https://link.juejin.cn/?target=https%3A%2F%2Fwww.uuidgenerator.net%2F "https://www.uuidgenerator.net/") ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-19.webp)

通过uuid生成一个唯一的密钥

```
ca8b3b61-6344-46fc-83ee-d81c0ca35480
复制代码
```

在默认配置中进行设置 config/config.default.js

```javascript
/**
 * 默认配置
 */
module.exports = {
  dbURI: "mongodb://localhost:27017/realworld",
  jwtSecret: "ca8b3b61-6344-46fc-83ee-d81c0ca35480",
};
复制代码
```

controller/user.js

```javascript
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");

// Authentication 用户登录
exports.login = async (req, res, next) => {
  try {
    // 处理请求
    // 得到用户信息[mongosse数据对象 转换成 json数据对象]
    const user = req.user.toJSON();
    // 生成token
    const token = await jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret
    );
    // 移除密码属性
    delete user.password;
    // 发送成功响应（包含token的用户信息）
    res.status(200).json({
      ...user,
      token,
    });
    res.send("post /users/login");
  } catch (err) {
    next(err);
  }
};
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-35.webp)

## 9.4 设置JWT过期时间

```javascript
// 生成token
const token = await jwt.sign(
  {
    userId: user._id,
  },
  // 设置token过期时间，单位为秒
  jwtSecret,
  {
    expiresIn: 60 * 60 * 24,
  }
);
复制代码
```

接口测试工具自动设置添加token数据 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-51.webp)

## 10\. 身份认证中间件

获取当前用户与更新用户的接口需要验证token ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-37.webp) ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-41.webp)

middleware/auth.js

```javascript
const { verify } = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
const { User } = require("../model");

module.exports = async (req, res, next) => {
  // 从请求头获取token数据
  let token = req.headers.authorization;
  // 验证token是否存在
  token = token ? token.split("Token ")[1] : null;
  // 如果不存在， 发送响应 401 结束响应
  if (!token) {
    return res.status(401).end();
  }
  try {
  // 验证token是否有效
    const decodedToken = await verify(token, jwtSecret);
    // console.log('decodedToken:',decodedToken);
    // 将用户信息挂载到请求对象上
    req.user = await User.findById(decodedToken.userId);
    next();
  } catch (err) {
    return res.status(401).end();
  }
  // 如果有效，将用户信息读取，挂载到req请求对象上，继续往后执行
};
复制代码
```

router/user.js

```javascript
const auth = require("../middleware/auth");

// Get Current User 获取当前登录用户
router.get("/user", auth, userCtrl.getCurrentUser);
复制代码
```

controller/user.js

```javascript
// Get Current User 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.status(200).json({
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};
复制代码
```

认证成功 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-17.webp) 认证失败 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-16.webp) router 可以给所有需要【身份认证】的接口配置上auth中间件

## 11\. 文章相关接口

## 11.1 创建文章

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-45.webp)

### ① 定义数据模型

文章和作者关联起来，用mongoose的populate [mongoosejs.com/docs/popula…](https://link.juejin.cn/?target=https%3A%2F%2Fmongoosejs.com%2Fdocs%2Fpopulate.html "https://mongoosejs.com/docs/populate.html")

model/article.js

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const baseModle = require("./base-model");

const articleSchema = new mongoose.Schema({
  ...baseModle,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tagList: {
    type: [String],
    default: null,
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = articleSchema;
复制代码
```

### ② 数据验证

validator/article.js

```javascript
const { body } = require("express-validator");
const validate = require("../middleware/validate");

exports.createArticle = validate([
  body("article.title").notEmpty().withMessage("文章标题不能为空"),
  body("article.description").notEmpty().withMessage("文章摘要不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);
复制代码
```

### ③ 处理请求

controller/article.js

[mongoosejs.com/docs/popula…](https://link.juejin.cn/?target=https%3A%2F%2Fmongoosejs.com%2Fdocs%2Fpopulate.html "https://mongoosejs.com/docs/populate.html")

```javascript
const { Article } = require("../model");

// Create Article
exports.createArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = new Article(req.body.article);
    
    // 通过身份认证解析到的用户对象，获取id属性
    article.author = req.user._id;
    // 将数据映射到User并执行以下
    article.populate("author").execPopulate();
    
    await article.save();
    res.status(201).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};
复制代码
```

### ④ 路由

router/article.js

```javascript
// Create Article 创建文章
router.post(
  "/",
  auth,
  articleValidator.createArticle,
  articleCtrl.createArticle
);
复制代码
```

### ⑤ 测试

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-48.webp)

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-18.webp)

## 11.2 获取文章

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-27.webp)

### ① 数据验证

validator/article.js

```javascript
const mongoose = require("mongoose");

exports.getArticle = validate([
  param("articleId").custom( async (value) => {
    if (!mongoose.isValidObjectId(value)) {
      return Promise.reject("文章ID类型错误");
    }
  }),
]);
复制代码
```

### ② 处理请求

controller/article.js

```javascript
// Get Article
exports.getArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = await Article.findById(req.params.articleId).populate("author");
    if (!article) {
      return res.status(404).end();
    }
    res.status(200).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};
复制代码
```

### ③ 路由

router/article.js

```javascript
// Get Article
router.get("/:articleId", articleValidator.getArticle, articleCtrl.getArticle);
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-46.webp)

## 11.3 查询文章

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-23.webp)

请求时，可以发送不同的参数，响应不同的数据

### 11.3.1 返回所有文章

```javascript
// List Articles
exports.listArticles = async (req, res, next) => {
  try {
    // 处理请求
    const articles = await Article.find();
    const articlesCont = await Article.countDocuments();
    res.status(200).json({
      articles,
      articlesCont,
    });
    res.send("get /articles/");
  } catch (err) {
    next(err);
  }
};
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-24.webp)

### 11.3.2 数据分页

```javascript
// List Articles
exports.listArticles = async (req, res, next) => {
  try {
    // 处理请求
    
    // 解析数据参数，并设置默认值
    const { limit = 20, offset = 0 } = req.query;
    const articles = await Article.find()
      .skip(+offset) // 跳过多少条
      .limit(+limit); // 取多少条
      
    const articlesCont = await Article.countDocuments();
    res.status(200).json({
      articles,
      articlesCont,
    });
    res.send("get /articles/");
  } catch (err) {
    next(err);
  }
};
复制代码
```

跳过前两条数据，然后取一条数据 ![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-25.webp)

### 11.3.3 筛选标签

```javascript

// List Articles
exports.listArticles = async (req, res, next) => {
  try {
    // 处理请求

    // 解析数据参数，并设置默认值
    const { limit = 20, offset = 0, tag } = req.query;

    // 定义一个过滤对象
    const filter = {};
    if (tag) {
      filter.tagList = tag;
    }

    const articles = await Article.find(filter)
      .skip(+offset) // 跳过多少条
      .limit(+limit); // 取多少条
    const articlesCont = await Article.countDocuments();
    res.status(200).json({
      articles,
      articlesCont,
    });
    res.send("get /articles/");
  } catch (err) {
    next(err);
  }
};
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-26.webp)

### 11.3.4 筛选文章作者

```javascript
// List Articles
exports.listArticles = async (req, res, next) => {
  try {
    // 处理请求

    // 解析数据参数，并设置默认值
    const { limit = 20, offset = 0, tag, author } = req.query;

    // 定义一个过滤对象(查询用的)
    const filter = {};
    if (tag) {
      filter.tagList = tag;
    }
    if (author) {
      const user = await User.findOne({ username: author });
      filter.author = user ? user._id : null;
    }

    const articles = await Article.find(filter)
      .skip(+offset) // 跳过多少条
      .limit(+limit); // 取多少条
    const articlesCont = await Article.countDocuments();
    res.status(200).json({
      articles,
      articlesCont,
    });
    res.send("get /articles/");
  } catch (err) {
    next(err);
  }
};
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-28.webp)

### 11.3.5 数据排序

```javascript
const articles = await Article.find(filter)
  .skip(+offset) // 跳过多少条
  .limit(+limit) // 取多少条
  .sort({        // 排序
    // -1：倒序   1：升序
    createdAt: -1,
  });
复制代码
```

## 11.4 更新文章

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-34.webp)

### ① 封装 验证ID是否有效 中间件

validate.js

```javascript
const { validationResult, buildCheckFunction } = require("express-validator");
const { isValidObjectId } = require("mongoose");

// 判断id是否是有效的ObjectID
exports.isValidObjectId = (location, fields) => {
  return buildCheckFunction(location)(fields).custom(async (value) => {
    if (!isValidObjectId(value)) {
      return Promise.reject("ID 不是一个有效的 ObjectID");
    }
  });
};
复制代码
```

validator/article.js

```javascript
exports.getArticle = validate([
  validate.isValidObjectId(["params"], "articleId"),
  // param("articleId").custom(async (value) => {
  //   if (!mongoose.isValidObjectId(value)) {
  //     return Promise.reject("文章ID类型错误");
  //   }
  // }),
]);

exports.updateArticle = validate([
  validate.isValidObjectId(["params"], "articleId"),
]);
复制代码
```

router/article.js

```javascript
// Update Article
router.put(
  "/:articleId",
  auth,
  articleValidator.updateArticle,
  articleCtrl.updateArticle
);
复制代码
```

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-14.webp)

### ② 404和403验证

还要验证存不存在要找的文章找不到返回 404 找不到

找到的文章是不是当前登录用户创建的，不是返回 403 没有权限

validator/article.js

```javascript
exports.updateArticle = [
  // 校验id是否是ObjectID
  validate([validate.isValidObjectId(["params"], "articleId")]),
  // 校验文章是否存在
  async (req, res, next) => {
    const articleId = req.params.articleId;
    const article = await Article.findById(articleId);
    req.article = article;
    if (!article) {
      return res.status(404).end();
    }
    next();
  },
  // 判断 修改的文章作者是否是当前登录用户
  async (req, res, next) => {
    console.log(typeof(req.user._id), typeof(req.article.author));// object object
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end();
    }
    next();
  },
];
复制代码
```

### ③ 实现更新文章响应

controller/article.js

```javascript
// Update Article
exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article;
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    article.description = bodyArticle.description || article.description;
    article.body = bodyArticle.body || article.body;
    await article.save();
    res.status(200).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};
复制代码
```

## 11.5 删除文章

![在这里插入图片描述](/学习笔记/网络图片下载/在这里插入图片描述-2.webp)

### ① 校验规则

validator/article.js

```javascript
exports.deleteArticle = exports.updateArticle;
复制代码
```

### ② 路由

router/article.js

```javascript
// Delete Article
router.delete(
  "/:articleId",
  auth,
  articleValidator.deleteArticle,
  articleCtrl.deleteArticle
);
复制代码
```

### ③ 处理请求操作

controller/article.js

```javascript
// Delete Article
exports.deleteArticle = async (req, res, next) => {
  try {
    console.log(req.article);
    const article = req.article;
    await article.remove();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
复制代码
```
