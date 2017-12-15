## Gulp
#### 全局安装gulp
`$ cnpm install --global gulp`
####  作为项目的开发依赖（devDependencies）安装
`$ cnpm install --save-dev gulp`
#### 在项目根目录下创建一个名为 gulpfile.js 的文件
```
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```
#### 运行 gulp
`$ gulp`
