'use strict'

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function processcode(p) {
    S = p[0]
    D = p[1]
    G = p[2]
    R = p[3]
    V = p[4]
    getbattle()
}

function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}

function prntbattle() {
    document.getElementById('prnt').style.visibility = 'hidden';
    document.getElementById('calc').style.visibility = 'hidden';
    document.getElementById('cp1').style.visibility = 'hidden';
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

    somethingswrong();
    var spic = ""
    var dpic = ""
    var gpic = ""
    var rpic = ""
    var vpic = ""

    document.getElementById('prnt').style.visibility = 'visible';
    //console.log(document.getElementById('prnt').style.visibility);
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

    var battletime = ""
    var battletime = battletime.concat("code=", S, D, G, R, V);



    document.getElementById("cddiv").innerHTML = "";
    document.getElementById("sdiv").innerHTML = "";
    document.getElementById("ddiv").innerHTML = "";

    var bt = `<a href="https://scottmc.freeshell.org/saga/index.html?${battletime}">https://scottmc.freeshell.org/saga/index.html?${battletime}</a>`
    bt1 = `https://scottmc.freeshell.org/saga/index.html?${battletime}`;


    document.getElementById("cddiv").innerHTML = bt;
    document.getElementById('cp1').style.visibility = 'visible';
    document.getElementById("version").innerHTML = version;
    document.getElementById("sdiv").appendChild(simg);
    document.getElementById("sdiv").appendChild(dimg);
    document.getElementById("sdiv").appendChild(gimg);
    document.getElementById("ddiv").appendChild(rimg);
    document.getElementById("ddiv").appendChild(vimg);




}


function cpbattle(){
    navigator.clipboard.writeText(bt1)     
}

function somethingswrong() {
    if (parm === undefined) {
        S = getRandomInt(6)
        D = getRandomInt(6)
        G = getRandomInt(6)
        R = getRandomInt(6)
        V = getRandomInt(6)

    } else {
        if (!allgood()) {
    document.getElementById('calc').style.visibility = 'hidden';
    document.getElementById("regfailed").innerHTML = `Unable to read parameter,<a href="https://scottmc.freeshell.org/saga/">Click here</a>`
    }}

}

function allgood() {

    var regex =/[1-6][1-6][1-6][1-6][1-6]/
    var result = regex.test(parm);
    console.log(`regex test = ${result}`);
    return result
    }


// Main

var S = getRandomInt(6)
var D = getRandomInt(6)
var G = getRandomInt(6)
var R = getRandomInt(6)
var V = getRandomInt(6)
var version = "20230415.3"
var bt1 = ""


const calcbtn = document.getElementById("calc");
calcbtn.addEventListener("click", getbattle);

const prntbtn = document.getElementById("prnt");
prntbtn.addEventListener("click", prntbattle);
document.getElementById('prnt').style.visibility = 'hidden';

const cpbtn = document.getElementById("cp1");
cpbtn.addEventListener("click", cpbattle);
document.getElementById('cp1').style.visibility = 'hidden';


var parm = GetURLParameter("code");
    if (allgood() ) {
        document.getElementById('calc').style.visibility = 'hidden';
        console.log(`all good ${parm}`);
        processcode(parm);
    } else {
    somethingswrong();
}



