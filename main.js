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
    e.preventDefault();
    let playerInfo = $("#playerForm").serializeArray();
    game(playerInfo)
})

function game(playerInfo){
    //Creation du joueur
    let player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value']) 
}