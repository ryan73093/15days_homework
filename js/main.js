$(document).ready(function() {

    // nav
    $('.login_btn,.signUp_btn').mouseover(function() {
        $(this).css({ "color": "black", "background": "white" });
    });
    $('.login_btn,.signUp_btn').mouseout(function() {
        $(this).css({ "color": "white", "background": "#00aff0" });
    });
    $(document).scroll(function(e) {
        // console.log($(this).scrollTop())
        if ($(this).scrollTop() > 100) {
            $('.nav a').css({ "color": "black" });
            $('.login li').css({ "color": "black", "background": "white", "transition": "all 0.2s" });
            $('.menu_btnBar').css({ "background": "#00aff0" })
            $('.nav').addClass("nav2");
            $('#header').css({ "background": "white", "transition": "all 0.2s" })
            $('.logo_img').attr("src", "css/img/logo.png");
            $('.login_btn,.signUp_btn').mouseover(function() {
                $(this).css({ "color": "white", "background": "#00aff0" });
            });
            $('.login_btn,.signUp_btn').mouseout(function() {
                $(this).css({ "color": "black", "background": "white" });
            });
        } else {
            $('.nav a').css({ "color": "white" });
            $('.login li').css({ "color": "white", "background": "#00aff0" });
            $('.menu_btnBar').css({ "background": "white" })
            $('.nav').removeClass("nav2");
            $('#header').css({ "background": "#00aff0", "transition": "all 0.2s" })
            $('.logo_img').attr("src", "css/img/logo2.png");
            $('.login_btn,.signUp_btn').mouseover(function() {
                $(this).css({ "color": "black", "background": "white" });
            });
            $('.login_btn,.signUp_btn').mouseout(function() {
                $(this).css({ "color": "white", "background": "#00aff0" });
            });
        }
    });


    // price_switch
    $('.switch_btn1').click(function() {
        var color = $(this).css("color");
        console.log(color);
        if (color == "rgb(33, 37, 41)") {
            console.log("haha")
            $(this).css({ "color": "white" })
            $('.switch_btn2').css({ "color": "rgb(33, 37, 41)" });
            $(".switch").addClass('switchLeft');
            $(".switch").removeClass('switchRight');

        } else {}
    });
    $('.switch_btn2').click(function() {
        var color = $(this).css("color");
        console.log(color);
        if (color == "rgb(33, 37, 41)") {
            console.log("haha")
            $(this).css({ "color": "white" })
            $('.switch_btn1').css({ "color": "rgb(33, 37, 41)" })
            $(".switch").addClass('switchRight');
            $(".switch").removeClass('switchLeft');
        } else {}
    });

    var winHeight = window.innerHeight;
    var gridTop = winHeight * 0.2;
    var gridBottom = winHeight * 0.8;
    $(window).on('scroll', function() {
        $('.call_action_img').each(function() {
            var thisTop = $(this).offset().top - $(window).scrollTop();
            if (thisTop + ($(this).height()) >= gridTop && thisTop <= gridBottom) {
                $(this).addClass('moveRight');
            } else {
                $(this).removeClass('moveRight');
            }
            // console.log(thisTop + ($(this).height()) + "=>" + gridTop + "," + gridBottom + "=>" + thisTop);

        })
    });
});