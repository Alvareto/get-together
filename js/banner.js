$(function () {
            $("#banner").data("size", "big");
        });

        $(window).scroll(function () {
            if ($(document).scrollTop() > 0) {
                if ($("#banner").data("size") == "big") {
                    $("#banner").data("size", "small");

                    $("#banner").animate({
                        height: "60px"
                    }, 100);
                    $("#banner_title").animate({
                        "line-height": "60px"
                    }, 100);
                    $("#banner_logo").animate({
                        width: "60px",
                        height: "60px",
                        left: "51%"
                    }, 100);
                    $("#settings > span").animate({
                        "line-height": "60px"
                    }, 100);
                }
            }
            else {
                if ($("#banner").data("size") == "small") {
                    $("#banner").data("size", "big");


                    $("#banner").animate({
                        height: "100px"
                    }, 100);
                    $("#banner_title").animate({
                        "line-height": "100px"
                    }, 400);
                    $("#banner_logo").animate({
                        width: "100px",
                        height: "100px",
                        left: "50%"
                    }, 500);
                    $("#settings > span").animate({
                        "line-height": "100px"
                    }, 400);
                }
            }
        });