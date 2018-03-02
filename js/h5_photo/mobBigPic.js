(function($) {
    $.showBigpic = function(tsobj, options) {
        var defaults = {
                listChild: '',
                shadowId: 'picShadow', //阴影背景id
                piclistId: 'bigpicList', //大图id
                swiperContainer: 'swiper-container',
                ifCustompic: false, //大图图片直接获取还是自定义，默认false直接获取
                customPic: '',
                pinchBack:null,
                isClose: true //是否点击大图退出
            },
            $obj = $(tsobj),
            $tsclick,
            opt, tsLength, str = '';

        var init = function(options) {
            opt = $.extend({}, defaults, options);
            $tsclick = $(tsobj).find(opt.listChild);
            tsLength = $tsclick.length;
            if ($('#' + opt.shadowId).length === 0) {
                str += '<div id="' + opt.shadowId + '" style="width:100%;height:100%;position:fixed;top:0;left:0;background-color:#000;opacity:1;display:none;z-index:998;"></div>';
            }
            str += '<div id="' + opt.piclistId + '" style="display:none;position:fixed;top:0;left:0;z-index:999;width:100%;height:100%;"><div class="' + opt.swiperContainer + '" style="height:100%;"><div class="swiper-wrapper"></div></div></div>';
            $('body').append(str);
            $tsclick.off().on('click', function() {
                PhotoBoxShow.call($obj, this, opt);
            });
        };

        var PhotoBoxShow = function(ts, ops) {
        	var $imgs = $(this).find('.swiper-slide').not(".swiper-slide-duplicate").find("img");//去除loop加的多余图片
                $imgs = $imgs.length>0? $imgs : $(this).find("img");
            var imgLen = $imgs.length,
                strImg = '';
            if (imgLen !== 0) {
                for (var i = 0; i < imgLen; i++) {
                    var tsImg = $imgs.eq(i).attr("src");
                    strImg += '<div class="swiper-slide"><div style="position:absolute;top:50%;transform:translate(0,-50%);-webkit-transform:translate(0,-50%);width:100%;"><img src="' + tsImg + '" style="width:100%;"></div></div>';
                }
            } else {
                strImg = '<div class="swiper-slide"><div style="position:absolute;top:50%;transform:translate(0,-50%);-webkit-transform:translate(0,-50%)width:100%;"><img src="' + ops.customPic + '" style="width:100%;"></div></div>';
            }

            $('#' + ops.piclistId).find('.swiper-wrapper').html('').append(strImg).show();
            photoSwiper.call(ts, opt);

        };

        var photoSwiper = function(ops) {
            var tsindex = $(this).index();

            $('#' + ops.piclistId).show();
            $('#' + ops.shadowId).show();

            allPrevent.call($(document));

            var swiper = new Swiper('.' + ops.swiperContainer, {
                paginationClickable: true,
                spaceBetween: 10,
                loop:true,
                centeredSlides: true,//分页符居中
                //autoplay: 3500,                         //自动播放，不设置时不生效
                autoplayDisableOnInteraction: false,//操作之后（swipes,arrow以及pagination 点击）autoplay不会被禁掉，用户操作之后每次都会重新启动autoplay
                onTransitionEnd: function(swiper) {
                	var i = swiper.activeIndex,snap=Number($(".allpage").eq(0).text());
                	if(i<=0)
                	i=snap;
                	if(i>snap)
                	i = i-snap;
           		 $(".activepages").html(i);
                }
            });
            swiper.slideTo(tsindex);

            pinchZoom.call($('#' + ops.piclistId + ' img'));
            closeBox.call($('#' + ops.piclistId), opt);
            ops.pinchBack();
        };
        var pinchZoom = function() {
            $(this).each(function() {
                new RTP.PinchZoom($(this), {});
            });
        };

        var allPrevent = function() {
            $(this).on('touchmove', function(e) {
                e.preventDefault();
            });
        };

        var allRelieve = function() {
            $(this).off('touchmove').on('touchmove', function() {});
        };

        var closeBox = function(ops) {
        	if(ops.isClose){
        	$(this).off().on('click', function() {
                $('#' + ops.piclistId).hide();
                $('#' + ops.shadowId).hide();
                allRelieve.call($(document));
            });
        	}

        };
        init(options);

    };
    $.fn.showBigpic = function(options) {
        return this.each(function() {
            new $.showBigpic(this, options);
        });
    };
})(jQuery);
