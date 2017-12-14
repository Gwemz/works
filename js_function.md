## 常用函数整理
### Array
```
/**

 * 

 * @desc 判断两个数组是否相等

 * @param {Array} arr1 

 * @param {Array} arr2 

 * @return {Boolean}

 */

function arrayEqual(arr1, arr2) {

    if (arr1 === arr2) return true;

    if (arr1.length != arr2.length) return false;

    for (var i = 0; i < arr1.length; ++i) {

        if (arr1[i] !== arr2[i]) return false;

    }

    return true;

}

```
### Class
#### addClass
```
/**

 * 

 * @desc   为元素添加class

 * @param  {HTMLElement} ele 

 * @param  {String} cls 

 */


var hasClass = require('./hasClass');


function addClass(ele, cls) {

    if (!hasClass(ele, cls)) {

        ele.className += ' ' + cls;

    }

}
```
#### hasClass
```
/**

 * 

 * @desc 判断元素是否有某个class

 * @param {HTMLElement} ele 

 * @param {String} cls 

 * @return {Boolean}

 */

function hasClass(ele, cls) {

    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);

}
```
#### removeClass
```
/**

 * 

 * @desc 为元素移除class

 * @param {HTMLElement} ele 

 * @param {String} cls 

 */


var hasClass = require('./hasClass');


function removeClass(ele, cls) {

    if (hasClass(ele, cls)) {

        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');

        ele.className = ele.className.replace(reg, ' ');

    }

}
```
### Cookie
#### getCookie
```
/**

 * 

 * @desc 根据name读取cookie

 * @param  {String} name 

 * @return {String}

 */

function getCookie(name) {

    var arr = document.cookie.replace(/\s/g, "").split(';');

    for (var i = 0; i < arr.length; i++) {

        var tempArr = arr[i].split('=');

        if (tempArr[0] == name) {

            return decodeURIComponent(tempArr[1]);

        }

    }

    return '';

}
```
#### removeCookie
```
var setCookie = require('./setCookie');

/**

 * 

 * @desc 根据name删除cookie

 * @param  {String} name 

 */

function removeCookie(name) {

    // 设置已过期，系统会立刻删除cookie

    setCookie(name, '1', -1);

}
```
#### setCookie
```
/**

 * 

 * @desc  设置Cookie

 * @param {String} name 

 * @param {String} value 

 * @param {Number} days 

 */

function setCookie(name, value, days) {

    var date = new Date();

    date.setDate(date.getDate() + days);

    document.cookie = name + '=' + value + ';expires=' + date;

}
```
### Device
#### getExplore
```
/**

 * 

 * @desc 获取浏览器类型和版本

 * @return {String} 

 */

function getExplore() {

    var sys = {},

        ua = navigator.userAgent.toLowerCase(),

        s;

    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:

        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :

        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :

        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :

        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :

        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :

        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

    // 根据关系进行判断

    if (sys.ie) return ('IE: ' + sys.ie)

    if (sys.edge) return ('EDGE: ' + sys.edge)

    if (sys.firefox) return ('Firefox: ' + sys.firefox)

    if (sys.chrome) return ('Chrome: ' + sys.chrome)

    if (sys.opera) return ('Opera: ' + sys.opera)

    if (sys.safari) return ('Safari: ' + sys.safari)

    return 'Unkonwn'

}
```
#### getOS
```
/**

 * 

 * @desc 获取操作系统类型

 * @return {String} 

 */

function getOS() {

    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';

    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';

    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';


    if (/mac/i.test(appVersion)) return 'MacOSX'

    if (/win/i.test(appVersion)) return 'windows'

    if (/linux/i.test(appVersion)) return 'linux'

    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'

    if (/android/i.test(userAgent)) return 'android'

    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'

}
```
### Dom
#### getScrollTop
```
/**

 * 

 * @desc 获取滚动条距顶部的距离

 */

function getScrollTop() {

    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

}
```
#### offset
```
/**

 * 

 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()

 * @param {HTMLElement} ele 

 * @returns { {left: number, top: number} }

 */

function offset(ele) {

    var pos = {

        left: 0,

        top: 0

    };

    while (ele) {

        pos.left += ele.offsetLeft;

        pos.top += ele.offsetTop;

        ele = ele.offsetParent;

    };

    return pos;

}
```
#### scrollTo
```
var getScrollTop = require('./getScrollTop');

var setScrollTop = require('./setScrollTop');

var requestAnimFrame = (function () {

    return window.requestAnimationFrame ||

        window.webkitRequestAnimationFrame ||

        window.mozRequestAnimationFrame ||

        function (callback) {

            window.setTimeout(callback, 1000 / 60);

        };

})();

/**

 * 

 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置

 * @param {Number} to 

 * @param {Number} duration 

 */

function scrollTo(to, duration) {

    if (duration < 0) {

        setScrollTop(to);

        return

    }

    var diff = to - getScrollTop();

    if (diff === 0) return

    var step = diff / duration * 10;

    requestAnimationFrame(

        function () {

            if (Math.abs(step) > Math.abs(diff)) {

                setScrollTop(getScrollTop() + diff);

                return;

            }

            setScrollTop(getScrollTop() + step);

            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {

                return;

            }

            scrollTo(to, duration - 16);

        });

}
```
#### setScrollTop
```
/**

 * 

 * @desc 设置滚动条距顶部的距离

 */

function setScrollTop(value) {

    window.scrollTo(0, value);

    return value;

}
```
