'use strict'

const calcbtn = document.getElementById("calc");

calcbtn.addEventListener("click", getbattle);

function getRandomInt(max) {
    return Math.floor((Math.random() * max)+1);
  }

function getbattle() {

    /*
    S# = Scenery
    D# = Deployment
    G# = Game Length
    R# = Special Rule
    V# = Victory Conditions
    ie: S1.jpg, R5.jpg
    */

    var S = getRandomInt(6)
    var D = getRandomInt(6)
    var G = getRandomInt(6)
    var R = getRandomInt(6)
    var V = getRandomInt(6)
    
 
const scenery = [" ","Frontier Region","Marshy Country","Bleak Moor","Rough Ground","Unknown Lands","Uplands"];
const deploy = [" ","Refused Flank","Meeting Encounter","March Column","Vanguard","Pincer Attack ","Confusion"];
const gamelength = [" ","Until Dusk","Under Pressure","Regicide","Unknown Length","Pitched Battle ","Cautious"];
const specrule = [" ","Forced March","Night Fight","A Good Day to Die","A Dash of Nostalgia","Hostile Land","Fog"];
const victory = [" ","Subjugation","Show of Force","Target","Overrun","Carnage","Sacrifice"];


    
    
    
    

    
    var battletime = ""
    var battletime = battletime.concat(S,"=",scenery[S]," ",D,"=",deploy[D]," ",G,"=",gamelength[G]," ",R,"=",specrule[R]," ",V,"=",victory[V])
    
    //document.getElementById("mydiv").innerHTML = battletime;
    const div = document.querySelector("div");
div.innerHTML = "";
div.appendChild(document.createTextNode(battletime));
}