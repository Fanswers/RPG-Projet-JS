import { Personnage } from './Class/Personnage.js'
import { Monster } from './Class/Monster.js'

//Recupération des données du formulaire
$("#sendPlayer").click(function(e){
    e.preventDefault();
    let playerInfo = $("#playerForm").serializeArray();
    game(playerInfo)
})

function game(playerInfo){
    //Creation du joueur
    let player = new Personnage(playerInfo[1]['value'], playerInfo[0]['value']) 
}