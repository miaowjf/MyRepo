# Ant-desgin组件

## 一、基本使用
```shell
npm install antd
```

```javascript
import React from 'react'
import {Button} from 'antd'
//引入node_moduls/antd/dist/antd.css
import 'antd/dist/antd.css'
//引入图标
import {WechatOutlined} from '@ant-design/icons'

class App extends React.Component{
    render(){
        return(
            <div>
            App...<button>点我</button>
            <Button type='primary'>Primary Button</Button>
            <WechatOutlined/>
            </div>
        )
    }
```

## 二、按需引入样式
1. npm eject
   - config文件夹
   - script文件夹

2. npm install react-app-rewired customize-cra
   react-app-rewired用于启动脚手架
   customize-cra用于执行修改命令

3. 创建config-overrides.js
   配置具体的修改规则，文件内容见antd官网

4. 安装babel-plugin-import 
5. 修改config-overrides.js
   修改内容见官网
    
6. 文件中引入组件后会自动引入样式 

## 三、自定义主题颜色

1. npm install less less-loader
2. 修改config-overrides.js
3. modifyVars:{'@primary-color':'#1DA57A'}//改为绿色
   新版使用嵌套
   lessOptions:{
       javascriptEnabled:true,
       modifyVars:{'@primary-color':'#1DA57A'}
   }

