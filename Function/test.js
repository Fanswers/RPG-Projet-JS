
export function start() {
    $("#start").toggleClass("cacher");
    $("#formSave").toggleClass("cacher");
    $.ajax({
        type: 'get',
        url: 'getPlayer.php',
        data: datastring,
        success: function (data) {
            if (data != false) {
                choose(data)
            }
            else {
                $("#loadSave").toggleClass("cacher");
                $("#loadGameDisplay").toggleClass("cacher");
            }
        }
    })
}

