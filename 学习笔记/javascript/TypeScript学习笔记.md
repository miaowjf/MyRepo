视频链接：[https://www.bilibili.com/video/BV14Z4y1u7pi?p=1](https://www.bilibili.com/video/BV14Z4y1u7pi?p=1)

## 1\. [TypeScript](https://so.csdn.net/so/search?q=TypeScript&spm=1001.2101.3001.7020) 介绍

## 1.1 TypeScript 是什么

![在这里插入图片描述](https://img-blog.csdnimg.cn/db5bf4fe828145a68a121fa9dc5ef186.png)

## 1.2 TypeScript 为什么要为 JS 添加类型支持？

![在这里插入图片描述](https://img-blog.csdnimg.cn/1a575f14985e4cf2af5eca97a9075ee2.png)

## 1.3 TypeScript 相比 JS 的优势

![在这里插入图片描述](https://img-blog.csdnimg.cn/bff2d61dc16c400c81551e2fce5c0dad.png)

## 2\. TypeScript 初体验

## 2.1 安装编译 TS 的工具包

![在这里插入图片描述](https://img-blog.csdnimg.cn/81cc22e507704a6db8edf6ed11bebffa.png)

## 2.2 编译并运行 TS 代码

![在这里插入图片描述](https://img-blog.csdnimg.cn/b6397eec9e004cddae6a70f74546b839.png)

## 2.3 简化运行 TS 的步骤

![在这里插入图片描述](https://img-blog.csdnimg.cn/6b3b1c67314f439e8d777b0799edf70f.png)

-   注意：若`ts-node hello.ts`执行报错，需要先执行命令`tsc --init`创建一个 tsconfig.json 文件，该文件是 TypeScript 项目的配置文件
-   tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。

## 3\. TypeScript 常用类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/bc1fef00c19b41329ef40b8482157252.png)

## 3.1 类型注解

![在这里插入图片描述](https://img-blog.csdnimg.cn/e3a9d30b6aaa40d6b2b5d9038dee145f.png)

## 3.2 常用基础类型概述

![在这里插入图片描述](https://img-blog.csdnimg.cn/c27db96084184895814bc3cdf513a8e3.png)

## 3.3 原始类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/9e1e86611365434ca36b43c98a40a2cc.png)

## 3.4 数组类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/99eaf632ecd7475191ee0d350a96d6d0.png)

## 3.5 类型别名

![在这里插入图片描述](https://img-blog.csdnimg.cn/3e70de7e3a6f48109ea490ae5b8835dd.png)

## 3.6 函数类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/27ca9f838d2f43789cf033d4473470d8.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/4651b5610ef94511bef78ecdf4a35dfb.png)

-   如果函数没有返回值，那么，函数返回值类型为：void。

![在这里插入图片描述](https://img-blog.csdnimg.cn/af3861054e6c4f25aeb8ef6267ad8776.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/25874bec15f2468eb1f22a419fd94bd4.png)

## 3.7 对象类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/3773afac1d3648f18c59ee996db237cd.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/e26596c416c74f27bc1230d60a8d2f32.png)

## 3.8 接口

![在这里插入图片描述](https://img-blog.csdnimg.cn/a448ba412976404097269bc749938adb.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/3ed53c99f1e842509aa268a61e1f1b9c.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/c70fe1eaf03940a5b1cffaef318da038.png)

## 3.9 元组

![在这里插入图片描述](https://img-blog.csdnimg.cn/1698cdce37a04e70a2a8a5018406ef36.png)

## 3.10 类型推论

![在这里插入图片描述](https://img-blog.csdnimg.cn/cf10a384369d418cad4e39a017b650b1.png)

## 3.11 类型断言

![在这里插入图片描述](https://img-blog.csdnimg.cn/671c126ed7f14758947178831a4f2151.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/da9062e6ab09452ea5d9a6fc1356170d.png)

## 3.12 字面量类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/7883288a6ba54068a54bc18534987fb4.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/61b427d1dc184517a8695ec0906088d9.png)

## 3.13 枚举

![在这里插入图片描述](https://img-blog.csdnimg.cn/268fd81220664bc2853c4233e1fb20fe.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/15cdc9ae2a484759846e08c051de7162.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc9ec27e24c4449f865fd4f31bb4335d.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/26a19d988be547d2aef4d858f559fbf8.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/77a7651c8f9a4981add17890cda34dfd.png)

## 3.14 any 类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/cacc4db66e584a2f88e47019c7d30347.png)

## 3.15 typeof

![在这里插入图片描述](https://img-blog.csdnimg.cn/adc80af478734cf1bd6ceba86445ecaa.png)

## 4\. TypeScript 高级类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/011cea57411d40dea2667560a6388fe3.png)

## 4.1 class 类

![在这里插入图片描述](https://img-blog.csdnimg.cn/3411c8d7ac6f4ee4be0fbc284fccae0f.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/1f55294f5e044cba8210b006a59f2b02.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/95a31cfd6c8242499125c98a2964e81f.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/edc476369ce44478b5453c0b513f84eb.png)

> -   类继承的两种方式：1 extends（继承父类） 2 implements（实现接口）。

![在这里插入图片描述](https://img-blog.csdnimg.cn/f22c07e837f94bcb858538997dc21ff6.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/ae0ec349b353445298a649d2a1c57c4b.png)

> -   类成员可见性：可以使用 TS 来控制 class 的方法或属性对于 class 外的代码是否可见。

-   public  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/0b92fe48f4fb448cb708200138446691.png)
-   protected  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/8cade359922b4b6fba9a7f4a46263cbb.png)
-   private  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/ff66550079e4408c9a7eeab06f8273c9.png)
-   readonly  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/67b4f0832731446395f1924c0283fefd.png)

## 4.2 类型兼容性

![在这里插入图片描述](https://img-blog.csdnimg.cn/e3d585194f9e474c90f56fd13140b508.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/221e2c71af3c47fd8583e987e402332f.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/cdaaff0bc4764fd3a823f8280404aacc.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/062d4610c61544f7aa6cfd1710b47546.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/66ab6585779a4b71a83d8b75ff7f6a0c.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/eda91d4f269448a29556a9dc0c605f2e.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/477ab6379e5f4789b93d52fe876c8c07.png)

## 4.3 交叉类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/18483fa6b97e413792e13b5902066aa8.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/133ed0889ccc44ee86ca97ae563dcdd5.png)

## 4.4 泛型

![在这里插入图片描述](https://img-blog.csdnimg.cn/c30a4b54b92e49ed96505268d47a7070.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/62a05d0ed3de4d1bb1e373fc253b0c3b.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/281aee6d88de491a9d03e092997c41c8.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/3db13359e55a4b669048607ee41311dc.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/c31d34c2ab4543fb9a3416dc504e1a91.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/d6d57570c3a74f52a6459bb8e8edb027.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/3e00499475834e92afa50b937b2be1d2.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/d38cec4fc09b4d9cae504f84c09bbd4a.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/ae3828fa3736423c9a6439285ed8c52d.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/ace9fe619d2f4a8087c3336d67cc3144.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/ef44a9cfd167490b89c2478e25b63ad3.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/67fc05a7ca534118b05a05d0c26d2fad.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/5b7e5f57115f43f286d645a58e468c64.png)

-   `Partial<Type>`  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/a030232d58af4ecbaf84c2c666006f16.png)
-   `Readonly<Type>`![在这里插入图片描述](https://img-blog.csdnimg.cn/bcc03e04e7ea4b8c90ce4026ed4e72fc.png)
-   `Pick<Type, Keys>`  
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/6285c7a9a44645998f0b09d8790e8c49.png)
-   `Record<Keys, Type>`

![在这里插入图片描述](https://img-blog.csdnimg.cn/dcfc92250f1e4eaaaa9db7e8ccb17785.png)

## 4.5 索引签名类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/71ef1946787643a2b7d6acc3a7c572e0.png)

## 4.6 映射类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/bfeebc2494d545388033ca34e065ad97.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/45bb845fa3894f138c2aa031beb1fe2f.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/206ba64e89bf47e8bfade7d7b0c82b6d.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/6e7115ef3cc84d1ea93e2f350d3e75e1.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a7294e3afaf4e6b971cee8a8f995ba0.png)

## 5\. TypeScript 类型声明文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/55aded235e2d487cb089d47caaf2fa90.png)

## 5.1 TS 中的两种文件类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/e1acb720b8494ef09a99c07f9cbf0d66.png)

## 5.2 类型声明文件的使用说明

![在这里插入图片描述](https://img-blog.csdnimg.cn/14f3f421ce184884a5636730f4c4f972.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/0cc93f099f3447b0aa6c3357a9c5a42e.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/fe74c5bf79ec412f9e4d03c059912a22.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/eec23becfec1479bb622823d93c7ad5b.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/f556568fb0914e28b0cd9c0099ccc3e6.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/58f9307ddd7541f9a7191c098fe05010.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/f47df38bb842412b90754b10c4649f3f.png)

## 6\. 在 React 中使用 TypeScript

![在这里插入图片描述](https://img-blog.csdnimg.cn/81249fb5755b4360991aca8799b45867.png)

## 6.1 使用 CRA 创建支持 TS 的项目

![在这里插入图片描述](https://img-blog.csdnimg.cn/61d1c278bf064bfc8fd7ad61021c5ff6.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/08d54cf5b6ff454db327dc741a246ec4.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/23f924754f944ffa94bd1254ae7bfed5.png)

## 6.2 TS 配置文件 tsconfig.json

![在这里插入图片描述](https://img-blog.csdnimg.cn/f5276bc38d104acda67a1ce8e1086cdf.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/1393709f6d5d4bb9b3209187aad6e668.png)

## 6.3 React 中的常用类型

![在这里插入图片描述](https://img-blog.csdnimg.cn/a30bd2378e98433ca9dfa8aec47b5d6b.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/d3dac983f1204b24844c92f53282dc13.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/516d4ea8d7b74d128a138cb6ef6f3bfa.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/65254d6805ed4685a28e72f6d7c2c13f.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/ec508e25bd5d4c7b8d77cd25c6187ee9.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/aafee3453d9b40df9f1307e88b944bd4.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/1f75c4f1cfd24547967a889abd0d966a.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/403b519e46b64fb0ae21f05e742d6a5f.png)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2e8481c2cb9949d382e894a2a2aec8af.png)