## 一、安装electron
npm -g install electron
cnpm -g install electron

## 二、创建electron项目的方法
1. 克隆一个仓库、快速启动一个项目
  - git clone https://github.com/electron/electron-quick-start
  - npm install 安装依赖
  - npm start或electron .来运行项目
2. electron-forge脚手架创建项目
  - npx create-electron-app my-new-app
  - cd my-new-app
  - npm start、npm build
  或
  - npm install -g @electron-forge/cli
  - electron-forge init my-new-app
  - cd my-new-app
  - npm start
3. 手动搭建一个项目
  - 创建index.html
  - 创建main.js
    ready、window-all-closed两个事件，创建窗口，调出index.html
    ```javascript
    const {app,BrowserWindow}=require('electron')
    const path=require('path')
    const createWindow=()=>{
        const mainWindoww=new BrowserWindow({
            width:800,
            height:600
        })
        mainWindow.loadFile(path.join(__dirname,'index.html'))
    }
    app.on('ready',createWindow)

    app.on('window-all-closed',()=>{
        if(process.platform!=='darwin'){
            app.quit()
        }
    })
    ```
    - npm init -y 初始化项目
    - electron .运行项目

## 三、electron 主进程和渲染进程
主进程
  - package.json中定义的入口文件被称为**主进程**(main.js)。在主进程中实例化BrowserWindow创建的Web页面被称为**渲染进程**。electiron只有一个主进程，可以有多个渲染进程，每个electron中的web页面运行在这自己的渲染进程中。
  - 可以定义多个窗口，设置parent为mainWindow
    ```javascript
    const secondWindow=new BrowserWindow({
    width:800,
    height:600,
    parent:mainWindow
    })
    secondWindow.loadFile(path.join(__dirname,'second.html'))
    ```
## 四、使用nodejs第三方模块
1. 主进程使用第三方模块，可以直接使用。
2. 渲染进程使用nodejs模块
   - 在渲染进程中要设置进行webPrefences设置
   ```javascript
   mainWindow=new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
        //使用两个配置时，不需要preload
        //preload:path.join(__dirname,'renderer/preload.js')
        nodeIntegration:true,
        contextIsolation:fasle
    }
   })
   ```
   - 在webPreferences中设置preload
   ```javascript 
   mainWindow=new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
        preload:path.join(__dirname,'renderer/preload.js')//要执行nodejs的第一种方法,这里的preload.js中有nodejs命令,可以在index.html中引入无法运行,需要进行上面的配置才能运行
    }

    mainWindow.webContents.openDevTools()
    mainWindow.loadFile(path.join(__dirname,'index.html'))
    //打开调试模式
   })
总的示例：
```javascript
const {app,BrowserWindow} = require('electron')
const path=require('path')
const fs=require('fs')
const createWindow=()=>{
    const mainWindow=new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            preload:path.join(__dirname,'render.js'),//运行nodejs支持的api(运行render.js文件)
            nodeIntegration:true,//在页面里使用nodejs，button等事件中使用,(html中的脚本运行nodejs的api)
            contextIsolation:false
        }
    })
    mainWindow.webContents.openDevTools()
    mainWindow.loadFile(path.join(__dirname,'index.html'))
    fs.readFile(path.join(__dirname,'package.json'),'utf8',(err,data)=>{
        if (err){
            console.log(err)
            return
        }
        console.log(data)
    })

}

app.on('ready',createWindow)
app.on('window-all-closed',()=>{
    if (process.platform!=='darwin'){
        app.quit()
    }
})
```

## 五、h5拖放文件的使用(调用h5的api)
```javascript
//下面这句取消默认操作必须的
disp.ondragenter=disp.ondragover=disp.ondragleave=()=>{return false}
disp.addEventListener('drop',(e)=>{
    console.log(e.dataTransfer.files[0].path)
    fs.readFile(e.dataTransfer.files[0].path,'utf8',(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        disp.innerText=data
    })
})
```

## 六、remote模块
remote模块提供了一个在渲染进程（页面）和主进程之间进行进程间通讯（IPC）的简便途径。
electron中，与GUI相关的模块（如dialog,menu等）只存在于主进程，而不在渲染进程中。使用remote模块，可以调用主进程对象的方法，而无需显式地改善进程间消息。
1. 安装@electron/remote
  - npm install --save @electron/remote
2. 主进程中配置启用remote模块
  ```javascript
  const remote=require('@electron/remote/main')
  remote.initialize()
  remote.enable(mainWindow.webContents)
  ```
3. 渲染进程引入remote模块使用
   const {BrowserWindow} =require('@electron/remote')

完整代码
```javascript
//主进程
const remote=require('@electron/remote/main')
remote.initialize()
const mainWindow=...//这里是创建窗口，创建后才可以使用remote.enable
remote.enable(mainWindow.webContents)

//渲染进程
const {BrowserWindow}=require('@electron/remote')
const btnW=document.querySelector('#createWindow')
btnW.addEventListener('click',()=>{
    const btnWindow=new BrowserWindow({
        width:800,
        height:600
    })
    btnWindow.loadFile(path.join(__dirname,'second.html'))
```

## 七、配置Content-Security-Policy
在index.html中配置，default-src代表默认规则，self表示限制所有的外部资源，只允许当前域名加载资源。
禁用所有外部新资源：`<meta http-equiv="Content-Security-Policy" content="default-src 'self'">`
不允许加载外部脚本(css、图片可以加载)：`<meta http-equiv="Content-Security-Policy" content="script-src 'self'">`
引入google-analytics分析流量时的设置:`<meta http-equiv="Content-Security-Policy" content="default-src 'self' https://www.goole-analytics.com">`

## 八、顶部菜单menu模块
```javascript
const {Menu} = require('electron')

let menuTemplate=[
    {
        lable:"文件",
        submenu:[
            {
                label:"新建文件",
                accelerator:'ctrl+n',
                click:function(){
                    console.log('ctrl+n','新建文件')
                }
            },
            {
               type:'separator'//分隔符
            },
            {
                label:"新建窗口",
                accelerator:'ctrl+sheft+n',
                click:function(){
                    console.log('ctrl+shift+n','新建窗口')
                }
            }
        ]
    },
    {
        label:"编辑",
        subment:[
            {
                label:"拷贝",
                role:'copy'//拷贝
            }
        ]
    },
    ...
]
let mentBuilder=Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menuBuilder)
```

## 九、右键操作
1. 使用@electron/remote模块实现
   ```javascript
    const remote=require('@electron/remote')//引入remot e模块
    const Menu=remote.Menu//实例化Menu
    let menuTemplate=[
        {
            label:"hello"
        },
        {
            label:"copy"
        },
        {
            label:"paste",
            click:()=>{
                console.log('其它功能')
            }
        }
    ]
    let menuBuild=Menu.buildFromTemplate(menuTemplate)

    window.addEventListener('contextmenu',(e)=>{
        console.log('mouse right click')
        e.preventDefault()
        menuBuild.popup({window:remote.getCurrentWindow})//弹出菜单
    },false)
2. 使用主进程和渲染进程通信实现


## 十、主进程与渲染进程之间的通讯

electron主进程和渲染进程的通信主要用到两个模块：ipcMain和ipcRenderer
1. ipcMain:当主进程使用时，它处理从渲染进程（网页）发送出来的异步和同步信息，或从主进程向渲染进程发送信息。
    ```javascript
    //渲染进程
    const {ipcMain}=require('electron')
    ipcMain.on('msg',(event,arg)=>{
        console.log(event,arg)
        event.sener.send('reply','pong')//通知渲染进程消息已收到,'pone'是传的参数,ipcRenderer.on('reply',(data)=>{...})来响应回复
    })
    ```
2. ipcRenderer从渲染进程（网页）发送同步或异步消息到主进程，或接收主进程回复的消息。
    ```javascript
    //渲染进程
    const {ipcRenderer}=require('electron')
    ipcRenderer.send('msg',{name:'张三'})//异步
    ipcRenderer.on('reply',(e,data)=>{
        console.log(data)
        console.log(e)
    })
    ```

3. 发送同步消息，把send改为sendSync
    ```javascript
    //渲染进程
    const {ipcRenderer}=require('electron')
    const msg=ipcRenderer.sendSync('msg-a')
    console.log(msg)
    //主进程
    ipcMain.on('msg-a',(event)=>{
        event.returnValue='hello'
    })