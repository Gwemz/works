## Gulp
#### 全局安装gulp
`$ cnpm install --global gulp`
####  本地安装
`$ cnpm install --save-dev gulp`
> 注： 1. -g：代表全局安装； 2. --save：将保存配置信息至package.json（此文件在 node_modules\gulp 目录下） 3. -dev：将它作为你的项目依赖添加到中devDependencies内（--save和-dev是2个东西，记得分清前面的"-"号） 4. 由于Gulp会自带package.json文件（用于存储项目的元数据），所以这里只做简单介绍（如果你想自己创建，也可通过命令 npm init，然后根据引导填写相关信息）：
```
{
     "name": "gulp", // 模块名称：只能包含小写字母数字和中划线，如果为空则使用项目文件夹名称代替（必填）
     "version": "3.8.11", // 版本号（必填）
     "description": "The streaming build system", // 描述：会在npm搜索列表中显示（必填）
     "homepage": "http://gulpjs.com", // 项目主页
     "repository": { // 资源库
           "type": "git",
           "url": "git://github.com/gulpjs/gulp"
     },
          "author": { // 作者信息
                "name": "Ryan",
                "email": "contact@bluesdream.com",
                "url": "http://www.bluesdream.com/"
     },
          "licenses": [{ // 开源协议
               "type": "MIT",
               "url": "https://raw.githubusercontent.com/gulpjs/gulp/master/LICENSE"
          }],
          "devDependencies": { // 这里面的参数，指定了项目依赖的Gulp和Gulp插件版本。
                "gulp": "^3.8.11"
     }
}
```
#### Gulp插件安装
##### 静态服务器（ gulp-webserver ） 网页自动刷新（ gulp-livereload ）
`cnpm install gulp-livereload gulp-webserver --save-dev`    

#### 在项目根目录下创建一个名为 gulpfile.js 的文件
```
// 引入gulp
var gulp = require('gulp');				// 基础库

// 引入gulp插件
var livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
	webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', function() {
	gulp.src( './' ) // 服务器目录（./代表根目录）
	.pipe(webserver({ // 运行gulp-webserver
		livereload: true, // 启用LiveReload
		open: true // 服务器启动时自动打开网页
	}));
});

// 监听任务
gulp.task('watch',function(){
	gulp.watch( '*.html', ['html']) // 监听根目录下所有.html文件
});

// 默认任务
gulp.task('default',['webserver','watch']);
```
#### 运行 gulp
`$ gulp`

#### 执行成功
> [16:53:55] Using gulpfile D:\documents\myWorks\works\gulpfile.js
  [16:53:55] Starting 'webserver'...
  [16:53:55] Webserver started at http://localhost:8000
  [16:53:55] Finished 'webserver' after 15 ms
  [16:53:55] Starting 'watch'...
  [16:53:55] Finished 'watch' after 7.51 ms
  [16:53:55] Starting 'default'...
  [16:53:55] Finished 'default' after 19 μs

>  注：1. Gulp插件可以通过Gulp官网 、 npm官网 或 Browsenpm 上找到你所要的插件。 2. 不要在node_modules文件夹内手动删除插件，请使用命令卸载。因为手动删除的只是下载插件包，但package.jason中的配置信息并没有清除。 3. 不要直接移动Gulp插件，否则由于系统层级限制，出现错误提示“文件名对目标文件夹可能过长。您可以缩短文件名并重试，或者尝试路径较短的位置。”。此时把文件夹打包成RAR后再操作便可。 4. npm常用命令： 安装插件：npm [-g] [--save-dev] 更新插件：npm update [-g] [--save-dev] 卸载插件：npm uninstall [-g] [--save-dev] 指定版本：npm install @VERSION [--save-dev] （其中VERSION就是你所需要的版本号）

#### 参考文档
* [Gulp构建前端自动化工作流之：入门介绍及LiveReload的使用](http://www.bluesdream.com/blog/gulp-frontend-automation-introduction-and-livereload.html)
* [ Gulp API docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
* [https://github.com/zhonglimh/Gulp/tree/master/Example1](https://github.com/zhonglimh/Gulp/tree/master/Example1)
* [https://github.com/zhonglimh/Gulp/tree/master/Example2](https://github.com/zhonglimh/Gulp/tree/master/Example2)
