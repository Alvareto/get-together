        $(document).ready(function () {
            $("#addNewLocation").click(function () {
                $("form").css("display", "block");
                $("#addNewLocation").hide();
                var visinaForme = $("form").height();
                $(".tbWrap").animate({
                    marginTop: "+=" + visinaForme
                }, 500, function () {

                });
            });
            $("#showBackground").click(function () {
                $("body").toggleClass("background");
                $("#showBackground").toggleClass("glyphicon-eye-close").toggleClass("glyphicon-eye-open");
            });
        });
        function cancelAddingNewLocation() {
            var visinaForme = $("form").height();
            $("form").css("display", "none");
            $("#addNewLocation").show();
            $(".tbWrap").animate({
                marginTop: "-=" + visinaForme
            }, 500, function () {

            });
        }
