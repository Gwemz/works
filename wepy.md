## wepy初始化安装

### 安装更新

`cnpm install wepy-cli -g`

### 查看wepy版本号

`wepy -v`

### 生成开发实例

`wepy init standard myproject`

```
? Project name 'myproject'
? Project description  'A Wepy project'
? Author winter '****qq.com'
? Use EsLint to lint your code? 'Yes'
? Use Redux in your project? 'Yes'
? Use web transform feature in your project? 'Yes'

wepy-cli Generated 'myproject'
```

### 安装依赖

```
cd myproject
cnpm install
```

### 实时编译

`wepy build --watch`

## 目录结构对比

### 原生小程序目录结构

```
project
├── pages
|   ├── index
|   |   ├── index.js    index 页面逻辑
|   |   ├── index.json  index 页面配置
|   |   ├── index.wxml  index 页面结构
|   |   └── index.wxss  index 页面样式
|   └── log
|       ├── log.js      log 页面逻辑
|       ├── log.json    log 页面配置
|       ├── log.wxml    log 页面结构
|       └── log.wxss    log 页面样式
├── app.js              小程序逻辑
├── app.json            小程序公共配置
└── app.wxss            小程序公共样式
```

### wepy目录结构

```
project
└── src
    ├── pages
    |   ├── index.wpy    index 页面逻辑、配置、结构、样式
    |   └── log.wpy      log 页面逻辑、配置、结构、样式
    └──app.wpy           小程序逻辑、公共配置、公共样式
```
