# React基础

## 一、create-react-app

```shell
npm install -g create-react-app #全局安装create-react-app
create-react-app app名

npx create-react-app app名 #建立app，后删除create-react-app 程序，避免安装相应的全局模块

```

```shell
#卸载node和npm
#1.apt-get卸载
sudo apt-get remove --purge npm
sudo apt-get remove --purge nodejs
sudo apt-get remove --purge nodejs-legacy
sudo apt-get autoremove
#2.手动删除npm及相关目录
rm -r /usr/local/bin/npm #npx
rm -r /usr/local/lib/node-moudels
find / -name npm
rm -r /tem/npm*
```

```shell
#安装node和npm
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

#安装最新版本
sudo npm install n -g
sudo n stable  # 安装最新版本
```

**src/index.js** #webpack下配置的入口文件，名字不能更改