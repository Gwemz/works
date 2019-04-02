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
### Keycode
#### getKeyName
```
var keyCodeMap = {

    8: 'Backspace',

    9: 'Tab',

    13: 'Enter',

    16: 'Shift',

    17: 'Ctrl',

    18: 'Alt',

    19: 'Pause',

    20: 'Caps Lock',

    27: 'Escape',

    32: 'Space',

    33: 'Page Up',

    34: 'Page Down',

    35: 'End',

    36: 'Home',

    37: 'Left',

    38: 'Up',

    39: 'Right',

    40: 'Down',

    42: 'Print Screen',

    45: 'Insert',

    46: 'Delete',


    48: '0',

    49: '1',

    50: '2',

    51: '3',

    52: '4',

    53: '5',

    54: '6',

    55: '7',

    56: '8',

    57: '9',


    65: 'A',

    66: 'B',

    67: 'C',

    68: 'D',

    69: 'E',

    70: 'F',

    71: 'G',

    72: 'H',

    73: 'I',

    74: 'J',

    75: 'K',

    76: 'L',

    77: 'M',

    78: 'N',

    79: 'O',

    80: 'P',

    81: 'Q',

    82: 'R',

    83: 'S',

    84: 'T',

    85: 'U',

    86: 'V',

    87: 'W',

    88: 'X',

    89: 'Y',

    90: 'Z',


    91: 'Windows',

    93: 'Right Click',


    96: 'Numpad 0',

    97: 'Numpad 1',

    98: 'Numpad 2',

    99: 'Numpad 3',

    100: 'Numpad 4',

    101: 'Numpad 5',

    102: 'Numpad 6',

    103: 'Numpad 7',

    104: 'Numpad 8',

    105: 'Numpad 9',

    106: 'Numpad *',

    107: 'Numpad +',

    109: 'Numpad -',

    110: 'Numpad .',

    111: 'Numpad /',


    112: 'F1',

    113: 'F2',

    114: 'F3',

    115: 'F4',

    116: 'F5',

    117: 'F6',

    118: 'F7',

    119: 'F8',

    120: 'F9',

    121: 'F10',

    122: 'F11',

    123: 'F12',


    144: 'Num Lock',

    145: 'Scroll Lock',

    182: 'My Computer',

    183: 'My Calculator',

    186: ';',

    187: '=',

    188: ',',

    189: '-',

    190: '.',

    191: '/',

    192: '`',

    219: '[',

    220: '\\',

    221: ']',

    222: '\''

};

/**

 * @desc 根据keycode获得键名

 * @param  {Number} keycode 

 * @return {String}

 */

function getKeyName(keycode) {

    if (keyCodeMap[keycode]) {

        return keyCodeMap[keycode];

    } else {

        console.log('Unknow Key(Key Code:' + keycode + ')');

        return '';

    }

};
```
### Object
#### deepClone
```
/**

 * @desc 深拷贝，支持常见类型

 * @param {Any} values

 */

function deepClone(values) {

    var copy;


    // Handle the 3 simple types, and null or undefined

    if (null == values || "object" != typeof values) return values;


    // Handle Date

    if (values instanceof Date) {

        copy = new Date();

        copy.setTime(values.getTime());

        return copy;

    }


    // Handle Array

    if (values instanceof Array) {

        copy = [];

        for (var i = 0, len = values.length; i < len; i++) {

            copy[i] = deepClone(values[i]);

        }

        return copy;

    }


    // Handle Object

    if (values instanceof Object) {

        copy = {};

        for (var attr in values) {

            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);

        }

        return copy;

    }


    throw new Error("Unable to copy values! Its type isn't supported.");

}
```
#### isEmptyObject
```
/**

 * 

 * @desc   判断`obj`是否为空

 * @param  {Object} obj

 * @return {Boolean}

 */

function isEmptyObject(obj) {

    if (!obj || typeof obj !== 'object' || Array.isArray(obj))

        return false

    return !Object.keys(obj).length

}
```
### Random
#### randomColor
```
/**

 * 

 * @desc 随机生成颜色

 * @return {String} 

 */

function randomColor() {

    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);

}
```
####  randomNum
```
/**

 * 

 * @desc 生成指定范围随机数

 * @param  {Number} min 

 * @param  {Number} max 

 * @return {Number} 

 */

function randomNum(min, max) {

    return Math.floor(min + Math.random() * (max - min));

}
```
### Regexp
#### isEmail
```
/**

 * 

 * @desc   判断是否为邮箱地址

 * @param  {String}  str

 * @return {Boolean} 

 */

function isEmail(str) {

    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);

}
```
#### isIdCard
```
/**

 * 

 * @desc  判断是否为身份证号

 * @param  {String|Number} str 

 * @return {Boolean}

 */

function isIdCard(str) {

    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)

}
```
#### isPhoneNum
```
/**

 * 

 * @desc   判断是否为手机号

 * @param  {String|Number} str 

 * @return {Boolean} 

 */

function isPhoneNum(str) {

    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)

}
```
#### isUrl
```
/**

 * 

 * @desc   判断是否为URL地址

 * @param  {String} str 

 * @return {Boolean}

 */

function isUrl(str) {

    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);

}
```
### String
#### digitUppercase
```
/**

 * 

 * @desc   现金额转大写

 * @param  {Number} n 

 * @return {String}

 */

function digitUppercase(n) {

    var fraction = ['角', '分'];

    var digit = [

        '零', '壹', '贰', '叁', '肆',

        '伍', '陆', '柒', '捌', '玖'

    ];

    var unit = [

        ['元', '万', '亿'],

        ['', '拾', '佰', '仟']

    ];

    var head = n < 0 ? '欠' : '';

    n = Math.abs(n);

    var s = '';

    for (var i = 0; i < fraction.length; i++) {

        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');

    }

    s = s || '整';

    n = Math.floor(n);

    for (var i = 0; i < unit[0].length && n > 0; i++) {

        var p = '';

        for (var j = 0; j < unit[1].length && n > 0; j++) {

            p = digit[n % 10] + unit[1][j] + p;

            n = Math.floor(n / 10);

        }

        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;

    }

    return head + s.replace(/(零.)*零元/, '元')

        .replace(/(零.)+/g, '零')

        .replace(/^整$/, '零元整');

};
```
### Support
#### isSupportWebP
```
/**

 * 

 * @desc 判断浏览器是否支持webP格式图片

 * @return {Boolean} 

 */

function isSupportWebP() {

    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

}
```
### Time
#### formatPassTime
```
/**

 * @desc   格式化${startTime}距现在的已过时间

 * @param  {Date} startTime 

 * @return {String}

 */

function formatPassTime(startTime) {

    var currentTime = Date.parse(new Date()),

        time = currentTime - startTime,

        day = parseInt(time / (1000 * 60 * 60 * 24)),

        hour = parseInt(time / (1000 * 60 * 60)),

        min = parseInt(time / (1000 * 60)),

        month = parseInt(day / 30),

        year = parseInt(month / 12);

    if (year) return year + "年前"

    if (month) return month + "个月前"

    if (day) return day + "天前"

    if (hour) return hour + "小时前"

    if (min) return min + "分钟前"

    else return '刚刚'

}
```
#### formatRemainTime
```
/**

 * 

 * @desc   格式化现在距${endTime}的剩余时间

 * @param  {Date} endTime  

 * @return {String}

 */

function formatRemainTime(endTime) {

    var startDate = new Date(); //开始时间

    var endDate = new Date(endTime); //结束时间

    var t = endDate.getTime() - startDate.getTime(); //时间差

    var d = 0,

        h = 0,

        m = 0,

        s = 0;

    if (t >= 0) {

        d = Math.floor(t / 1000 / 3600 / 24);

        h = Math.floor(t / 1000 / 60 / 60 % 24);

        m = Math.floor(t / 1000 / 60 % 60);

        s = Math.floor(t / 1000 % 60);

    }

    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";

}
```
### Url
#### parseQueryString
```
/**

 * 

 * @desc   url参数转对象

 * @param  {String} url  default: window.location.href

 * @return {Object} 

 */

function parseQueryString(url) {

    url = url == null ? window.location.href : url

    var search = url.substring(url.lastIndexOf('?') + 1)

    if (!search) {

        return {}

    }

    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

}
```
#### stringfyQueryString
```
/**

 * 

 * @desc   对象序列化

 * @param  {Object} obj 

 * @return {String}

 */

function stringfyQueryString(obj) {

    if (!obj) return '';

    var pairs = [];


    for (var key in obj) {

        var value = obj[key];


        if (value instanceof Array) {

            for (var i = 0; i < value.length; ++i) {

                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));

            }

            continue;

        }


        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));

    }


    return pairs.join('&');

}
```
### Function
#### throttle
```
/**

 * @desc   函数节流。

 * 适用于限制`resize`和`scroll`等函数的调用频率

 *

 * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。

 * @param  {Boolean}   noTrailing     可选，默认为false。

 *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。

 *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.

 *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）

 * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，

 *                                    执行去节流功能时，调用`callback`。

 * @param  {Boolean}   debounceMode   如果`debounceMode`为true，`clear`在`delay`ms后执行。

 *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。

 *

 * @return {Function}  新的节流函数

 */

function throttle(delay, noTrailing, callback, debounceMode) {


    // After wrapper has stopped being called, this timeout ensures that

    // `callback` is executed at the proper times in `throttle` and `end`

    // debounce modes.

    var timeoutID;


    // Keep track of the last time `callback` was executed.

    var lastExec = 0;


    // `noTrailing` defaults to falsy.

    if (typeof noTrailing !== 'boolean') {

        debounceMode = callback;

        callback = noTrailing;

        noTrailing = undefined;

    }


    // The `wrapper` function encapsulates all of the throttling / debouncing

    // functionality and when executed will limit the rate at which `callback`

    // is executed.

    function wrapper() {


        var self = this;

        var elapsed = Number(new Date()) - lastExec;

        var args = arguments;


        // Execute `callback` and update the `lastExec` timestamp.

        function exec() {

            lastExec = Number(new Date());

            callback.apply(self, args);

        }


        // If `debounceMode` is true (at begin) this is used to clear the flag

        // to allow future `callback` executions.

        function clear() {

            timeoutID = undefined;

        }


        if (debounceMode && !timeoutID) {

            // Since `wrapper` is being called for the first time and

            // `debounceMode` is true (at begin), execute `callback`.

            exec();

        }


        // Clear any existing timeout.

        if (timeoutID) {

            clearTimeout(timeoutID);

        }


        if (debounceMode === undefined && elapsed > delay) {

            // In throttle mode, if `delay` time has been exceeded, execute

            // `callback`.

            exec();


        } else if (noTrailing !== true) {

            // In trailing throttle mode, since `delay` time has not been

            // exceeded, schedule `callback` to execute `delay` ms after most

            // recent execution.

            //

            // If `debounceMode` is true (at begin), schedule `clear` to execute

            // after `delay` ms.

            //

            // If `debounceMode` is false (at end), schedule `callback` to

            // execute after `delay` ms.

            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);

        }


    }


    // Return the wrapper function.

    return wrapper;


};
```
#### debounce
```
/**

 * @desc 函数防抖 

 * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，

 * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。

 * @example 适用场景：如在线编辑的自动存储防抖。

 * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。

 * @param  {Boolean}  atBegin       可选，默认为false。

 *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。

                                    如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行

 * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，

 *                                  执行去抖动功能时，，调用`callback`。

 *

 * @return {Function} 新的防抖函数。

 */

var throttle = require('./throttle');

function debounce(delay, atBegin, callback) {

    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);

};
```
#### 获取浏览器信息
```
window.navigator.userAgent

//用于区分qq浏览器
function isMqqBrowser(){
	var ua = window.navigator.userAgent.toLowerCase();
    var index = ua.indexOf("mqqbrowser");
    if (index != -1) {
    	return true;
    } else {
    	return false;
    }
}
function isUcBrowser(){
	var ua = window.navigator.userAgent.toLowerCase();
    var index = ua.indexOf("ucbrowser");
    if (index != -1) {
    	return true;
    } else {
    	return false;
    }
}
function isAdroid(){
	var ua = window.navigator.userAgent.toLowerCase();
    var index = ua.indexOf("iphone os");
    var indexIpad = ua.indexOf("ipad")
    if (index == -1 && indexIpad == -1) {
    	return true;
    } else {
    	return false;
    }
}
function isWeiXin(){
	var ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){
		return true;
	}else{
		return false;
	}
}
//判断是否为qq内置浏览器
function isQQ(){
	var ua = window.navigator.userAgent.toLowerCase();  
	if(ua.match(/QQ/i) == 'qq'){
		return true;
	}else{
		return false;
	}
}
function isSafari(){
	var ua = window.navigator.userAgent.toLowerCase();  
	if(ua.indexOf("safari")>0){
		return true;
	}else{
		return false;
	}
}
```
#### 移动端阻止背景滑动

```
//阻止背景滑动
function docprevent() {
    $('body').css({
        'height': $(window).height(),
        'overflow': 'hidden'
    });
    $(document).off('touchmove').on('touchmove', function (e) {
        e.preventDefault();
    });
}

//添加滑动
function docrecover() {
    $('body').css({
        'height': 'auto',
        'overflow': 'auto'
    });
    $(document).off('touchmove').on('touchmove', function () {
    });
}
```

#### DIV颜色块高亮
```
[].forEach.call($$("*"),function(a){
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})
```

```
!function(e, t) {
    var r = e.documentElement
        , o = "orientationchange"in window ? "orientationchange" : "resize"
        , i = function() {
        var e = r.clientWidth;
        var t = r.clientHeight;
        if (!e)
            return;
        if (e >= 750) {
            r.style.fontSize = "100px"
        } else {
            r.style.fontSize = 100 * (e / 750) + "px"
        }
    };
    i();
    if (!e.addEventListener)
        return;
    t.addEventListener(o, i, false);
    e.addEventListener("DOMContentLoaded", i, false)
}(document, window);

var cw = document.documentElement.clientWidth;
if(cw > 1242) {
    cw = 1242;
}
document.getElementsByTagName("html")[0].style.fontSize = 20 * (cw / 621) + 'px';
```

## code.js

// 得到QueryString值
```
function getQueryString(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) {
        return "";
    }
    else {
        var text = decodeURIComponent(results[1]);
        return text;
    }
}
```
// 判断是否为null或为空字串
```
function isNull(text) {
    var t = typeof (text);
    if (t == "undefined" || text == null)
        return true;

    if (t == "string" && $.trim(text) == "")
        return true;

    return false;
}
```
// 随机生成制定长度字符串
```
function randomChar(l) {
    var x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
    var tmp = "";

    for (var i = 0; i < l; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return tmp;
}
```
// 格式化日期，形如2016-03-05
```
function formatDate(date) {
    if (typeof (date) == "undefined" || date == null || date == "")
        return "-";

    date = date.replace(/-/g, "/");
    var dateObj = new Date(date);
    var text = dateObj.getFullYear() + "-";
    var m = dateObj.getMonth();
    m++;
    if (m < 10) text += "0";
    text += (m + "-");

    var d = dateObj.getDate();
    if (d < 10) text += "0";
    text += d;
    return text;
}
```
// 格式化日期时间(含秒，形如2016-03-05 09:03:01)
```
function formatDateTime(date) {
    if (typeof (date) == "undefined" || date == null || date == "")
        return "-";

    date = date.replace(/-/g, "/");
    var dateObj = new Date(date);
    var text = dateObj.getFullYear() + "-";
    var m = dateObj.getMonth();
    m++;
    if (m < 10) text += "0";
    text += (m + "-");

    var d = dateObj.getDate();
    if (d < 10) text += "0";
    text += (d + " ");

    var h = dateObj.getHours();
    if (h < 10) text += "0";
    text += (h + ":");

    var mi = dateObj.getMinutes();
    if (mi < 10) text += "0";
    text += (mi + ":");

    var s = dateObj.getSeconds();
    if (s < 10) text += "0";
    text += s;

    return text;
}
```
// 格式化日期时间(不含秒，形如2016-03-05 09:03)
```
function formatDateTime1(date) {
    if (typeof (date) == "undefined" || date == null || date == "")
        return "-";

    date = date.replace(/-/g, "/");
    var dateObj = new Date(date);
    var text = dateObj.getFullYear() + "-";
    var m = dateObj.getMonth();
    m++;
    if (m < 10) text += "0";
    text += (m + "-");

    var d = dateObj.getDate();
    if (d < 10) text += "0";
    text += (d + " ");

    var h = dateObj.getHours();
    if (h < 10) text += "0";
    text += (h + ":");

    var mi = dateObj.getMinutes();
    if (mi < 10) text += "0";
    text += (mi + ":");

    text = text.substring(0, text.length - 1)
    return text;
}
```
// 格式化时间(只有小时和分，形如09:05)
```
function formatTime(date) {
    if (typeof (date) == "undefined" || date == null || date == "")
        return "-";

    date = date.replace(/-/g, "/");
    var dateObj = new Date(date);
    var text = "";

    var h = dateObj.getHours();
    if (h < 10) text += "0";
    text += (h + ":");

    var mi = dateObj.getMinutes();
    if (mi < 10) text += "0";
    text += (mi + ":");
    text = text.substring(0, text.length - 1)

    return text;
}
```
// 格式化两个日期间隔，形如10-01/10-03
```
function formatSpanDate(date1, date2) {
    if (date1 == date2)
        return formatDate(date1);

    var d1 = "", d2 = "";
    if (typeof (date1) == "undefined" || date1 == null || date1 == "") {
        date1 = "-";

    } else {
        date1 = date1.replace(/-/g, "/");
        var dateObj1 = new Date(date1);
        date1 = "";
        d1 = dateObj1.getFullYear() + "-";

        var m = dateObj1.getMonth();
        m++;
        if (m < 10) date1 += "0";
        date1 += (m + "-");
        d1 += (m + "-");

        var d = dateObj1.getDate();
        if (d < 10) date1 += "0";
        date1 += d;
        d1 += d;
    }

    if (typeof (date2) == "undefined" || date2 == null || date2 == "") {
        date2 = "-";

    } else {
        date2 = date2.replace(/-/g, "/");
        var dateObj2 = new Date(date2);
        date2 = "";
        d2 = dateObj2.getFullYear() + "-";

        var m = dateObj2.getMonth();
        m++;
        if (m < 10) date2 += "0";
        date2 += (m + "-");
        d2 += (m + "-");

        var d = dateObj2.getDate();
        if (d < 10) date2 += "0";
        date2 += d;
        d2 += d;
    }

    if (date1 != "-" || date2 != "-") {
        return "<span title='" + d1 + "至" + d2 + "'>" + date1 + "/" + date2 + "</span>";
    }
    else {
        return "-";
    }
}
```
// 格式化日期成中文显示，3天之内的将会显示几秒钟前、几分钟前、几小时前、几天前
```
function formatDateCN(date) {
    var dayLimit = 3;
    if (date == null || date == "")
        return "—";

    var text = "—";

    date = date.replace(/-/g, "/");
    var dt1 = new Date(date);

    var dt2 = new Date();
    var secondsSpan = (dt2.getTime() - dt1.getTime()) / 1000;

    // 一分钟秒数
    var secondsMinute = 60;
    // 一小时秒数
    var secondsHour = 3600;
    // 一天秒数
    var secondsDay = 86400;
    // 限制天数对应的秒数
    var secondsLimitDay = 86400 * dayLimit;

    if (secondsSpan < secondsMinute) {
        text = Math.floor(secondsSpan) + "秒钟前";
    }
    else if (secondsSpan < secondsHour) {
        text = Math.floor(secondsSpan / secondsMinute) + "分钟前";
    }
    else if (secondsSpan < secondsDay) {
        text = Math.floor(secondsSpan / secondsHour) + "小时前";
    }
    else if (secondsSpan < secondsLimitDay) {
        var days = Math.floor(secondsSpan / (24 * 60 * 60));
        if (days == 1) {
            text = "昨天";
        }
        else if (days == 2) {
            text = "前天";
        }
        else {
            text = days + "天前";
        }
    }
    else if (secondsSpan >= secondsLimitDay) {
        text = date.split(" ")[0];
    }

    return text;
}
```
// 格式化手机号码，将中间4位用*代替，形如 158****6996
```
function formatMobile(mobile) {
    var phone = mobile.substr(0, 3) + '****' + mobile.substr(7);
    return phone;
}
```
// 截取字符串
```
function leftString(str, length) {
    if (str.length > length) {
        if (length > 3) length -= 3;
        return str.substr(0, length) + "...";
    }
    else {
        return str;
    }
}
```
// 跳转页面
```
function redirect(url) {
    var id = "uid" + randomChar(12);
    if (url.indexOf("?") > 0) {
        url += ("&uniqueid=" + id);
    }
    else {
        url += ("?uniqueid=" + id);
    }
    var dialogId = getQueryString("did");
    if (!isNull(dialogId)) {
        url += ("&did=" + dialogId);
    }
    window.location.href = url;
}
```
// 验证URL地址
```
function isUrl(url) {
    if (isNull(url))
        return false;

    url = url.toLowerCase();
    if (url.indexOf("http://") == 0)
        return true;

    return false;
}
```
// 验证手机号码
```
function isMobile(mobile) {
    if (isNull(mobile))
        return false;

    var myreg = /^1[3|4|5|6|7|8|9]\d{9}$/;
    return myreg.test(mobile);
}
```
// 验证email
```
function isMail(mail) {
    return (new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(mail));
}
```
// 验证是否整数
```
function isInt(str) {
    var reg = /^(-|\+)?\d+$/;
    return reg.test(str);
}
```
// 验证是否小数
```
function isFloat(str) {
    if (isInt(str))
        return true;
    var reg = /^(-|\+)?\d+\.\d*$/;
    return reg.test(str);
}
```
// 判断字符全部由a-Z或者是A-Z的字字母组成
```
function isLetter(str) {
    if (!isObj(str))
        return 'undefined';
    str = strTrim(str);
    var reg = /^[a-zA-Z]+$/g;
    return reg.test(str)
}
```
// 判断字符由字母和数字组成。
```
function isLetterOrNum(str) {
    if (!isObj(str))
        return 'undefined';
    str = strTrim(str);
    var reg = /^[0-9a-zA-Z]+$/g;
    return reg.test(str)
}
```
// 判断字符由字母和数字，下划线,点号组成.且开头的只能是下划线和字母
```
function isLegalityName(str) {
    if (!isObj(str))
        return 'undefined';
    str = strTrim(str);
    var reg = /^([a-zA-z_]{1})([A-Za-z0-9_\.]*)$/g;
    return reg.test(str)
}
```
// 验证IP地址
```
function isIp(s) {
    var check = function (v) { try { return (v <= 255 && v >= 0) } catch (x) { return false } };
    var re = s.split(".")
    return (re.length == 4) ? (check(re[0]) && check(re[1]) && check(re[2]) && check(re[3])) : false
}
```
// 判断是否是图片文件
```
function isImage(url) {
    if (url == "")
        return false;

    url = url.toLowerCase();
    var reg = /\.(gif|jpg|jpeg|png)$/;
    return reg.test(url);
}
```
// 判断是否是安卓系统
```
function isAndroid() {
    var useragent = navigator.userAgent.toLowerCase();
    var text = useragent.match(/android/i);
    if (text != null && text == "android") return true;

    return false;
}
```
// 解析日期字符串并返回日期对象
```
function parseDate(text) {
    if (isNull(text))
        return null;
    text = text.replace(/-/g, "/");
    return new Date(text);
}
```
// 得到cookie值
```
function getCookie(name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(name + "=")
        if (c_start != -1) {
            c_start = c_start + name.length + 1
            var c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
```
//========弹出信息框-开始========
// 显示成功消息
```
function showSuccessMsg(msg) {
    alert(msg);
}
```
// 显示错误消息
```
function showErrorMsg(msg) {
    alert(msg);
}
```
// 显示警告消息
```
function showWarningMsg(msg) {
    alert(msg);
}
```
// 弹出消息
```
function alertMsg(msg) {
    alert(msg);
}
```
// 显示加载等待框
```
function showLoading() {
    var $Loading = $("#divLoading");
    if ($Loading.length > 0) {
        if ($Loading.is(":hidden")) {
            $Loading.show();
        }
        return;
    }

    var html = "<div id='divLoading'><div class='loadingbg'></div><div class='loadingbody'><div class='image'>&nbsp;</div></div></div>";
    $("body").prepend(html);
}
```
// 关闭异步调用时加载框
```
function closeLoading() {
    setTimeout(function () {
        var $Loading = $("#divLoading");
        if ($Loading.length > 0) {
            $Loading.hide();
        }
    }, 200);
}
```
//========弹出信息框-结束========

//========AJAX请求-开始========
// Ajax请求
// type请求方式（POST或GET），url请求地址，params请求参数（不包含?），callback成功返回后的调用方法，lock是否锁屏，async是否异步请求，closeLock是否关闭锁屏
```
function ajaxRequest(type, url, params, callback, lock, async, closeLock) {
    var id = "req" + randomChar(12);
    if (url.indexOf("?") > 0) {
        url += ("&rid=" + id);
    }
    else {
        url += ("?rid=" + id);
    }

    var isAsync = false;
    if (!isNull(async)) {
        isAsync = async;
    }

    var isLock = true;
    if (callback) {
        if (!isNull(lock)) {
            isLock = lock;
        }
    }
    else { // 返回后无调用则直接不需要锁屏
        isLock = false;
    }
    $.ajax({
        type: type,
        async: isAsync,
        url: url,
        data: params,
        dataType: "json",
        beforeSend: function () {
            if (isLock) {
                showLoading();
            }
            return true;
        },
        success: function (result) {
            if (callback) {
                if (typeof (result) == "string") {
                    result = eval("(" + result + ")");
                }

                if (typeof (result) == "undefined" || result == null) {
                    if (isLock) {
                        closeLoading();
                    }
                    alert("返回的数据错误！");
                }
                else {
                    if (result.Code < 1) {
                        if (isLock) {
                            closeLoading();
                        }

                        alert(result.Message);
                    }
                    else {
                        callback(result);
                        if (closeLock) {
                            closeLoading();
                        }
                    }
                }
            }
        },
        error: function (data, status, e) {
            if (isLock) closeLoading();
            //alert("数据请求出错！");
        }
    });
}
```
// Ajax请求（GET请求方式），url请求地址，params请求参数（不包含?），call back成功返回后的调用方法，lock是否锁屏，async是否异步请求
```
function ajaxGet(url, params, callback, lock, async) {
    ajaxRequest("GET", url, params, callback, lock, async);
}
```
// Ajax请求（POST方式），url请求地址，params请求参数（json数据），callback成功返回后的调用方法，lock是否锁屏，async是否异步请求
```
function ajaxPost(url, params, callback, lock, async) {
    ajaxRequest("POST", url, params, callback, lock, async);
}
```
// Ajax提交数据（POST方式），url请求地址，params请求参数（json数据），callback成功返回后的调用方法，lock是否锁屏，async是否异步请求
```
function ajaxSubmit(url, params, callback, lock, async) {
    ajaxRequest("POST", url, params, callback, lock, async, true);
}
```
//========AJAX请求-结束========