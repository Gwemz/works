/* 
    from：http://www.pailixiang.com
    date: 2018-07-25
    author: www.pailixiang.com/
*/
// 得到QueryString值
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
// 判断是否为null或为空字串
function isNull(text) {
    var t = typeof (text);
    if (t == "undefined" || text == null)
        return true;

    if (t == "string" && $.trim(text) == "")
        return true;

    return false;
}
// 随机生成制定长度字符串
function randomChar(l) {
    var x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
    var tmp = "";

    for (var i = 0; i < l; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return tmp;
}
// 格式化日期，形如2016-03-05
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
// 格式化日期时间(含秒，形如2016-03-05 09:03:01)
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
// 格式化日期时间(不含秒，形如2016-03-05 09:03)
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
// 格式化时间(只有小时和分，形如09:05)
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
// 格式化两个日期间隔，形如10-01/10-03
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
// 格式化日期成中文显示，3天之内的将会显示几秒钟前、几分钟前、几小时前、几天前
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
// 格式化手机号码，将中间4位用*代替，形如 158****6996
function formatMobile(mobile) {
    var phone = mobile.substr(0, 3) + '****' + mobile.substr(7);
    return phone;
}
// 截取字符串
function leftString(str, length) {
    if (str.length > length) {
        if (length > 3) length -= 3;
        return str.substr(0, length) + "...";
    }
    else {
        return str;
    }
}
// 跳转页面
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
// 验证URL地址
function isUrl(url) {
    if (isNull(url))
        return false;

    url = url.toLowerCase();
    if (url.indexOf("http://") == 0)
        return true;

    return false;
}
// 验证手机号码
function isMobile(mobile) {
    if (isNull(mobile))
        return false;

    var myreg = /^1[3|4|5|6|7|8|9]\d{9}$/;
    return myreg.test(mobile);
}
// 验证email
function isMail(mail) {
    return (new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(mail));
}
// 验证是否整数
function isInt(str) {
    var reg = /^(-|\+)?\d+$/;
    return reg.test(str);
}
// 验证是否小数
function isFloat(str) {
    if (isInt(str))
        return true;
    var reg = /^(-|\+)?\d+\.\d*$/;
    return reg.test(str);
}
// 判断字符全部由a-Z或者是A-Z的字字母组成
function isLetter(str) {
    if (!isObj(str))
        return 'undefined';
    str = strTrim(str);
    var reg = /^[a-zA-Z]+$/g;
    return reg.test(str)
}
// 判断字符由字母和数字组成。
function isLetterOrNum(str) {
    if (!isObj(str))
        return 'undefined';
    str = strTrim(str);
    var reg = /^[0-9a-zA-Z]+$/g;
    return reg.test(str)
}
// 判断字符由字母和数字，下划线,点号组成.且开头的只能是下划线和字母
function isLegalityName(str) {
    if (!isObj(str))
        return 'undefined';
    str = strTrim(str);
    var reg = /^([a-zA-z_]{1})([A-Za-z0-9_\.]*)$/g;
    return reg.test(str)
}
// 验证IP地址
function isIp(s) {
    var check = function (v) { try { return (v <= 255 && v >= 0) } catch (x) { return false } };
    var re = s.split(".")
    return (re.length == 4) ? (check(re[0]) && check(re[1]) && check(re[2]) && check(re[3])) : false
}
// 判断是否是图片文件
function isImage(url) {
    if (url == "")
        return false;

    url = url.toLowerCase();
    var reg = /\.(gif|jpg|jpeg|png)$/;
    return reg.test(url);
}
// 判断是否是安卓系统
function isAndroid() {
    var useragent = navigator.userAgent.toLowerCase();
    var text = useragent.match(/android/i);
    if (text != null && text == "android") return true;

    return false;
}
// 解析日期字符串并返回日期对象
function parseDate(text) {
    if (isNull(text))
        return null;
    text = text.replace(/-/g, "/");
    return new Date(text);
}
// 得到cookie值
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

//========弹出信息框-开始========
// 显示成功消息
function showSuccessMsg(msg) {
    alert(msg);
}
// 显示错误消息
function showErrorMsg(msg) {
    alert(msg);
}
// 显示警告消息
function showWarningMsg(msg) {
    alert(msg);
}
// 弹出消息
function alertMsg(msg) {
    alert(msg);
}
// 显示加载等待框
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
// 关闭异步调用时加载框
function closeLoading() {
    setTimeout(function () {
        var $Loading = $("#divLoading");
        if ($Loading.length > 0) {
            $Loading.hide();
        }
    }, 200);
}
//========弹出信息框-结束========

//========AJAX请求-开始========
// Ajax请求
// type请求方式（POST或GET），url请求地址，params请求参数（不包含?），callback成功返回后的调用方法，lock是否锁屏，async是否异步请求，closeLock是否关闭锁屏
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
// Ajax请求（GET请求方式），url请求地址，params请求参数（不包含?），callback成功返回后的调用方法，lock是否锁屏，async是否异步请求
function ajaxGet(url, params, callback, lock, async) {
    ajaxRequest("GET", url, params, callback, lock, async);
}
// Ajax请求（POST方式），url请求地址，params请求参数（json数据），callback成功返回后的调用方法，lock是否锁屏，async是否异步请求
function ajaxPost(url, params, callback, lock, async) {
    ajaxRequest("POST", url, params, callback, lock, async);
}
// Ajax提交数据（POST方式），url请求地址，params请求参数（json数据），callback成功返回后的调用方法，lock是否锁屏，async是否异步请求
function ajaxSubmit(url, params, callback, lock, async) {
    ajaxRequest("POST", url, params, callback, lock, async, true);
}
//========AJAX请求-结束========
