$(function () {
    var tg = 0;
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoHeight: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
//         onInit: function (swiper) {
//             if (swiper.slides.length === 1) {
//                 $('.swiper-container').showBigpic({
//                     listChild: '.swiper-slide',
//                     shadowId: 'picShadow',
//                     swiperContainer: 'swiper-container1',
//                     piclistId: 'bigPicbox',
//                     pinchBack: cBack
//                 });
//             }
//         },
//         onTransitionEnd: function (swiper) {
// //          $('.activepage').html(swiper.activeIndex);

//             if (swiper.activeIndex > 0 && tg === 0) {
//                 tg = 1;
//                 $('.swiper-container').showBigpic({
//                     listChild: '.swiper-slide',
//                     shadowId: 'picShadow',
//                     swiperContainer: 'swiper-container1',
//                     piclistId: 'bigPicbox',
//                     pinchBack: cBack
//                 });
//             }
//         }
    })
    $('#myPic').showBigpic({
        listChild: '.swiper-slide',
        shadowId: 'picShadow',
        swiperContainer: 'swiper-container1',
        piclistId: 'bigPicbox',
        pinchBack: cBack
    });

    function cBack(){
        var $img = $("#bigPicbox img");
        $img.click(function () {
            //阻止点击图片退出
            return false;
        });
    }
})