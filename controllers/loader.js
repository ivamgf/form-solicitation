// App Script
// Loader
// Author: Ivam Galvão Filho
// Date: 02/01/2020.

// Descriptions

// Functions

// Variables
var textLoader = `<div class="textLoader" id="textLoader">Carregando...</div>`;

var load = `<div class="loader" id="loader"></div>`;

document.getElementById("loader").innerHTML = load;

document.getElementById("text").innerHTML = textLoader;

function nextForm() {
    document.getElementById("textLoader").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("blockForm1").style.display = "block";
    document.getElementById("blockForm1").style.position = "relative";
    document.getElementById("blockProgress1").style.display = "block";
}

setTimeout(function(){ 
    nextForm(); 
}, 3000);