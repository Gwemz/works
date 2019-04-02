<template>
  <div class="wrapper">
    <ul class="content">
      <li>program1</li>
      <li>program2</li>
      <li>program3</li>
      <li>program4</li>
      <li>program5</li>
      <li>program6</li>
      <li>program7</li>
      <li>program8</li>
      <li>program9</li>
      <li>program10</li>
      <li>program11</li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>  
</template>

<style>
body {
}
/**default css style**/
html,
address,
blockquote,
body,
dd,
div,
dl,
dt,
fieldset,
form,
frame,
frameset,
h1,
h2,
h3,
h4,
h5,
h6,
noframes,
ol,
p,
ul,
center,
dir,
hr,
menu,
pre {
  display: block;
}
li {
  display: list-item;
}
head {
  display: none;
}
table {
  display: table;
}
tr {
  display: table-row;
}
thead {
  display: table-header-group;
}
tbody {
  display: table-row-group;
}
tfoot {
  display: table-footer-group;
}
col {
  display: table-column;
}
colgroup {
  display: table-column-group;
}
td,
th {
  display: table-cell;
}
caption {
  display: table-caption;
}
th {
  font-weight: bolder;
  text-align: center;
}
caption {
  text-align: center;
}
body {
  margin: 8px;
  line-height: 1.12;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
h2 {
  font-size: 1.5em;
  margin: 0.75em 0;
}
h3 {
  font-size: 1.17em;
  margin: 0.83em 0;
}
h4,
p,
blockquote,
ul,
fieldset,
form,
ol,
dl,
dir,
menu {
  margin: 1.12em 0;
}
h5 {
  font-size: 0.83em;
  margin: 1.5em 0;
}
h6 {
  font-size: 0.75em;
  margin: 1.67em 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
b,
strong {
  font-weight: bolder;
}
blockquote {
  margin-left: 40px;
  margin-right: 40px;
}
i,
cite,
em,
var,
address {
  font-style: italic;
}
pre,
tt,
code,
kbd,
samp {
  font-family: monospace;
}
pre {
  white-space: pre;
}
button,
textarea,
input,
object,
select {
  display: inline-block;
}
big {
  font-size: 1.17em;
}
small,
sub,
sup {
  font-size: 0.83em;
}
sub {
  vertical-align: sub;
}
sup {
  vertical-align: super;
}
table {
  border-spacing: 2px;
}
thead,
tbody,
tfoot {
  vertical-align: middle;
}
td,
th {
  vertical-align: inherit;
}
s,
strike,
del {
  text-decoration: line-through;
}
hr {
  border: 1px inset;
}
ol,
ul,
dir,
menu,
dd {
  margin-left: 40px;
}
ol {
  list-style-type: decimal;
}
ol ul,
ul ol,
ul ul,
ol ol {
  margin-top: 0;
  margin-bottom: 0;
}
u,
ins {
  text-decoration: underline;
}
br:before {
  content: "A";
}
:before,
:after {
  white-space: pre-line;
}
center {
  text-align: center;
}
abbr,
acronym {
  font-variant: small-caps;
  letter-spacing: 0.1em;
}
:link,
:visited {
  text-decoration: underline;
}
.wrapper {
  height: 5000px;
}
/* cursor的属性：

pointer：手型
crosshair：十字型
text：平时鼠标移动到文本上的样式
wait：等待的效果
default：默认的那种效果
help：带问号的鼠标样式
e-resize：向右的箭头
ne-resize：向右上方的箭头
n-resize：向上的箭头
nw-resize：向左上方的箭头
w-resize：向左的箭关
sw-resize：向左下的箭头
s-resize：向下的箭头
se-resize：向右下方的箭头
auto：系统自动的效果 */
*{
  /* cursor: url('../assets/favicon.ico'),auto; */
  list-style: none;
}
.content li {
  line-height: 75px;
  color: rgb(207, 70, 70);
  font-size: 20px;
  border-bottom: 1px solid #e1e1e1;
  cursor: auto;
}
</style>

<script>
import BScroll from "better-scroll";
const wrapper = document.querySelector(".wrapper");
console.log(wrapper);
</script>



