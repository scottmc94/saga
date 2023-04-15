'use strict'

const calcbtn = document.getElementById("calc");

calcbtn.addEventListener("click", getbattle);

const prntcbtn = document.getElementById("prnt");

prntbtn.addEventListener("click", prntbattle);



function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

function prntbattle() {
    document.getElementById('prnt').style.visibility = 'hidden';
    document.getElementById('calc').style.visibility = 'hidden';
    window.print()
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
    var spic = ""
    var dpic = ""
    var gpic = ""
    var rpic = ""
    var vpic = ""



    const scenery = [" ", "Frontier Region", "Marshy Country", "Bleak Moor", "Rough Ground", "Unknown Lands", "Uplands"];
    const deploy = [" ", "Refused Flank", "Meeting Encounter", "March Column", "Vanguard", "Pincer Attack ", "Confusion"];
    const gamelength = [" ", "Until Dusk", "Under Pressure", "Regicide", "Unknown Length", "Pitched Battle ", "Cautious"];
    const specrule = [" ", "Forced March", "Night Fight", "A Good Day to Die", "A Dash of Nostalgia", "Hostile Land", "Fog"];
    const victory = [" ", "Subjugation", "Show of Force", "Target", "Overrun", "Carnage", "Sacrifice"];


    var spic = spic.concat("images/s", S, ".jpg")
    var imgUrl = spic
    var simg = document.createElement('img');
    simg.src = imgUrl;


    var dpic = dpic.concat("images/d", D, ".jpg")
    var imgUrl = dpic
    var dimg = document.createElement('img');
    dimg.src = imgUrl;

    var gpic = gpic.concat("images/g", G, ".jpg")
    var imgUrl = gpic
    var gimg = document.createElement('img');
    gimg.src = imgUrl;

    var rpic = rpic.concat("images/r", R, ".jpg")
    var imgUrl = rpic
    var rimg = document.createElement('img');
    rimg.src = imgUrl;

    var vpic = vpic.concat("images/v", V, ".jpg")
    var imgUrl = vpic
    var vimg = document.createElement('img');
    vimg.src = imgUrl;





    //   var battletime = ""
    //   var battletime = battletime.concat(S,"=",scenery[S]," ",D,"=",deploy[D]," ",G,"=",gamelength[G]," ",R,"=",specrule[R]," ",V,"=",victory[V])



    //const sdiv = document.querySelector("sdiv");
    //sdiv.appendChild(img);
    document.getElementById("sdiv").innerHTML = "";
    document.getElementById("ddiv").innerHTML = "";
    document.getElementById("sdiv").appendChild(simg);
    document.getElementById("sdiv").appendChild(dimg);
    document.getElementById("sdiv").appendChild(gimg);
    document.getElementById("ddiv").appendChild(rimg);
    document.getElementById("ddiv").appendChild(vimg);






    const div = document.querySelector("div");
    div.innerHTML = "";
    div.appendChild(document.createTextNode(battletime));
}