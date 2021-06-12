$(function() {
    var $area_5 = $(".area_5");
    var $area_7 = $(".area_7");
    var $back_r = $("#back_r");
    var $lip = $("#lip");
    var $blur = $("#blur");
    var $plus = $(".plus");
    var $top_l = $("#top_l");
    var $top_c = $("#top_c");
    var $top_r = $("#top_r");
    var $bottom_l = $("#bottom_l");
    var $bottom_c = $("#bottom_c");
    var $bottom_r = $("#bottom_r");
    var $slide_ul = $("#slide > ul.web");
    var $slide_ul_m = $("#slide > ul.mobile");
    var $slide_btn = $("#slide_btn > ul > li");
    var $menu = $("#menu");
    var $menu2 = $("#menu2");
    var $menu_btn = $("button.mobile");
    var $close = $("#close");
    var $menu_m_li = $("#menu_m > li");
    var $area_2 = $(".area_2");
    var $prd_ul = $("#prd");
    var slide_count = 0;
    var index_p = 0;
    var index_c = 0;
    var count_2 = 1;
    var flag = true;
    var pos = 0;


    $menu.on("mouseenter", function() {
        $menu2.stop().slideDown();
    });
    $menu.on("mouseleave", function() {
        $menu2.stop().slideUp();
    });

    $menu_btn.on("click", function() {
        $area_2.animate({
            "left": "50%"
        });
    });


    $close.on("click", function() {
        $area_2.animate({
            "left": "100%"
        });
    });
    $menu_m_li.on("click", function() {
        $(".active_m").children("ul").slideUp();
        if (!($(this).is(".active_m"))) {
            $(this).children("ul").slideDown();
        }
        $(this).addClass("active_m");
    });

    $prd_ul.on("wheel", function(e) {
        if ($(window).width() <= 768) {
            e.preventDefault();
            var scrollX = parseInt(e.originalEvent.deltaY);
            if (scrollX > 0) {
                pos -= 100;
                if (pos >= parseInt($(window).width()) - 1100) {
                    // console.log(pos);
                    $(this).stop().animate({
                        "margin-left": pos + "px"
                    }, 10);
                } else {
                    pos = parseInt($(window).width()) - 1100;
                }
            } else {
                if (pos <= 0) {
                    $(this).stop().animate({
                        "margin-left": pos + "px"
                    }, 10);
                    pos += 100;
                } else {
                    pos = 0;
                }
            }
        }
    });



    $(window).on("resize", function() {
        if ($(window).width() > 768) {
            $area_2.removeAttr("style");
            $prd_ul.css({
                "margin-left": "0"
            });
        } //if
        else {
            $back_r.removeAttr("style");
        }
    }); // resize



    window.setInterval(slidingWeb, 2000);
    window.setInterval(slidingApp, 2000);

    function slidingWeb() {
        $slide_ul.animate({
            "margin-left": "-100%"
        }, function() {
            $(this).removeAttr("style").children(":first").appendTo($slide_ul);
        });
    }

    function slidingApp() {
        $slide_ul_m.animate({
            "margin-left": "-100%"
        }, function() {
            $(this).removeAttr("style").children(":first").appendTo($slide_ul_m);
        });
    }



    $(window).on("scroll", function() {
        var scrollTop = $(window).scrollTop();
        var area5Top = $area_5.offset().top;
        var area5Height = $area_5.height();
        var area7Top = $area_7.offset().top;
        var area7Height = $area_7.height();

        if (scrollTop > area5Top - area5Height * 0.3) {
            if ($(window).width() > 768) {
                $back_r.animate({
                    "right": "50%"
                });
            } else {
                $back_r.animate({
                    "right": "10%"
                });
            }
            $blur.animate({
                "opacity": "0"
            }, 2500);
            $lip.animate({
                "opacity": "1"
            }, 2500);
        } //if(scrollTop > area5Top - area5Height * 0.3)

        if (flag & scrollTop > area7Top - area7Height * 0.15) {
            flag = false;
            $top_c.animate({
                "width": "475px"
            });
            $bottom_c.animate({
                "width": "475px"
            });

            $top_c.animate({
                "margin-top": "-191px"
            });
            $bottom_c.animate({
                "margin-top": "191px"
            });
            //
            $top_l.animate({
                "margin-top": "-160px"
            });
            $top_l.animate({
                "margin-left": "-230px"
            });
            //
            $top_r.animate({
                "margin-top": "-160px"
            });
            $top_r.animate({
                "margin-left": "230px"
            });
            //
            $bottom_l.animate({
                "margin-top": "160px"
            });
            $bottom_l.animate({
                "margin-left": "230px"
            });
            //
            $bottom_r.animate({
                "margin-top": "160px"
            });
            $bottom_r.animate({
                "margin-left": "-230px"
            }, function() {
                $("#contents_7").animate({
                    "opacity": "1"
                });
            });
        }
        if ($(window).width() < 769) {

            if ($(window).height() == $(document).height()) {
                $("#contents_7").animate({
                    "opacity": "1"
                });
            }
            $top_c.css({
                "opacity": "0"
            });
            $bottom_c.css({
                "opacity": "0"
            });
            $top_l.css({
                "opacity": "0"
            });
            $top_r.css({
                "opacity": "0"
            });
            $bottom_l.css({
                "opacity": "0"
            });
            $bottom_r.css({
                "opacity": "0"
            });
        } else {
            $top_c.css({
                "opacity": "1"
            });
            $bottom_c.css({
                "opacity": "1"
            });
            $top_l.css({
                "opacity": "1"
            });
            $top_r.css({
                "opacity": "1"
            });
            $bottom_l.css({
                "opacity": "1"
            });
            $bottom_r.css({
                "opacity": "1"
            });
        }
    }); //window.scroll()


}); // ready
