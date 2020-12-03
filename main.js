import { Personnage } from './Class/Personnage.js';
import { Monster } from './Class/Monster.js';


let datastring;

$("#start").click(function(){
    $("#start").toggleClass("cacher");
    $("#formSave").toggleClass("cacher");
    console.log("yes");
    $.ajax({
        type: 'get',
        url: 'getPlayer.php',
        data: datastring,
        success: function(data) {
            if(data != false){
                choose(data)
            }
            else{
                createPlayer()
            }
        }
    })
});

function choose(data){
    data = data.replace(/["']/g, "");
    var array = data.split(",");
    $("#savedName").text(array[1]);
    $("#savedType").text(array[0]);
}

$("#newGame").click(function(e){
    e.preventDefault();
    $("#formSave").toggleClass("cacher");
    $("#formDiv").toggleClass("cacher");
    $('#sendPlayer').click(function (e) {
    e.preventDefault();
    let playerInfo = $('#playerForm').serializeArray();
    let player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value']);
    $.ajax({
        url: 'savePlayer.php',
        method: 'POST',
        data: player
    })
});
})