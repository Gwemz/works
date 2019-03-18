## css命名规范

1. 长名称或词组可以使用中横线来为选择器命名。

2. 不建议使用“_”下划线来命名CSS选择器，为什么呢?输入的时候少按一个shift键;浏览器兼容问题 (比如使用_tips的选择器命名，在IE6是无效的)能良好区分JavaScript变量命名(JS变量命名是用“_”)

3. 不要随意使用Id

4. 为选择器添加状态前缀（like: .is-withdrawal）

### 常用的css命名规则

头：header

内容：content /container

尾：footer

导航：nav

侧栏：sidebar

栏目：column

页面外围控制整体布局宽度： wrapper

左右中：left right center

登录条：loginbar

标志：logo

广告：banner

页面主题：main

热点：hot

新闻：news

下载：download

子导航：subnav

菜单：menu

子菜单：submenu

搜索：search

友情链接：friendlink

页脚：footer

版权：copyright

滚动：scroll

内容：content

标签：tags

文章列表：list

提示信息：msg

小技巧：tips

栏目标题：title

加入：joinus

指南：guide

服务：service

注册：regsiter

状态：status

投票：vote

合作伙伴：partner

### 注释的写法

/* Header */
内容区
/* End Header */

### ID的命名

* 页面结构

容器：container

页头：header

内容：content/container

页面主题：main

页尾：footer

导航：nav

侧栏：sidebar

栏目：column

页面外围控制整体布局宽度：wrapper

左右中：left right center

* 导航

导航：nav

主导航：mainnav

子导航：subnav

顶导航：topnav

边导航：sidebar

左导航：leftsidebar

右导航：rightsidebar

菜单：menu

子菜单：submenu

标题：title

摘要：summary

* 功能

标志：logo

广告：banner

登录：login

登录条：loginbar

注册：register

搜索：search

功能区：shop

标题：title

加入：joinus

状态：status

按钮：btn

滚动：scroll

标签页：tab

文章列表：list

提示信息：msg

当前的：current

小技巧：tips

图标：icon

注释：note

指南：guild

服务：service

热点：hot

新闻：news

下载：download

投票：vote

合作伙伴：partner

友情链接：link

版权：copyright

### 注意事项

1. 一律小写

2. 尽量用英文

3. 不加中杠和下划线

4. 尽量不缩写，除非一看就明白的单词

### css样式表文件命名

主要的 master.css

模块 module.css

基本共用：base.css

布局版面：layout.css

主题：themes.css

专栏：columns.css

文字：font.css

表单：forms.css

补丁：mend.css

打印：print.css