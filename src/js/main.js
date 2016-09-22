$(function() {

    /* 导航菜单切换*/
    $('.nav-btn').click(function() {
        $('.nav-menu').toggle();
    });

    /* 返回顶部图标开始*/
    // 定义鼠标滚动距离和屏幕高度
    var t, screen_height;

    //定义返回顶部方法
    toTop = function() {
        t = $(document).scrollTop();
        window.scrollBy(0, -50);
        if (t > 0) {
            setTimeout('toTop()', 3);
        }
    };

    //给window添加鼠标滚动事件。
    $(window).on("scroll", function() {
        t = $(document).scrollTop();
        screen_height = window.screen.availHeight;

        //当鼠标的向下滚动距离大于屏幕的高度时，图标出现，负责图标消失。
        if (t > screen_height) {
            $('#toTop-box').show();
        } else {
            $('#toTop-box').hide();
        }
    })

    //鼠标移到图标上，关闭按钮显示；移出则关闭按钮消失。
    $('#toTop-box').hover(function() {
        $('#toTop-close').show();
    }, function() {
        $('#toTop-close').hide();
    })

    // 点击关闭按钮，图标消失；同时去掉window的鼠标滚动事件，使其不再出现。
    $('#toTop-close').on('click', function() {
        $('#toTop-box').hide();
        $(window).off("scroll");
    })

    // 点击图标，返回顶部
    $('#toTop-item').on('click', function() {
        toTop();
    })

    /*返回顶部图标结束*/


    /* 轮播图*/
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true
    });

})