$(document).ready(function () {
    $(".bxslider").bxSlider({
        pager: false,
    });

    function setEqualHeight(selector) {
        let maxHeight = 0;
        $(selector).each(function () {
            if($(this).height() > maxHeight) {
                maxHeight = $(this).height()
            }
        });
        console.log(maxHeight);
        $(selector).height(maxHeight);
    }

    $(".bxslider__team").bxSlider({
        controls: false,
        onSliderLoad: function () {
            setEqualHeight("ul.bxslider__team > li > div.teamslider")
        },
        onSliderAfter: function () {
            setEqualHeight("ul.bxslider__team > li > div.teamslider")
        },
    });

    $(".flexslider").flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 400,
        itemMargin: 25,
        touch: true,
    });

    $(".accordion").accordion({
        defaultOpen: '',
        collapsible: true,
    });

    let mixer = mixitup(".workportfolio", {
        selectors: {
            target: ".work",
        }
    });
    if($(window).scrollTop() > 0){
        $(".header").addClass("is-fixed")
    }
});


$(".menu").on("click", function () {
    if( $(".menu").hasClass("opened") ) {
        $(".menu").removeClass("opened").addClass("closed");
        $(".navigation").removeClass("menu-opened");
        $("body").css({
            overflowY: "auto",
        });
    }
    else {
         $(".menu").removeClass("closed").addClass("opened");
         $(".navigation").addClass("menu-opened");
         $("body").css({
            overflowY: "hidden",
        });
    }
});

let heightoOfheader = $(".header").height();

$(window).on("scroll", function() {
    console.log($(window).scrollTop());
    if($(window).scrollTop() >= heightoOfheader / 2 ){
        $(".header").addClass("is-fixed");
    }
    else{
        $(".header").removeClass("is-fixed");
    }
});
