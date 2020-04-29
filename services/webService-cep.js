// App Script
// Web Service Cep
// Author: Ivam Galvão Filho
// Date: 02/01/2020.

// Variables
var typeLogr;
var typLogList;
var optionsTyp = [];
var typeArray = [];
var typeItem = "";

// Descriptions

// Imports

var imported = document.createElement('script');
imported.src = '/controllers/form5-controller.js';
document.head.appendChild(imported);

// Functions

function apiCep() {

    cep = cep.replace("-", "")

    if(cep.length == 8) {
        var settings = {
            "url": "https://viacep.com.br/ws/"+cep+"/json/",
            "method": "GET",
            "timeout": 0,
        };
        
        $.ajax(settings).done(function (response) {
            var address = response;
            log = address.logradouro;
            // cid = address.localidade;
            block = address.bairro;        
            document.getElementById("log").value = log;
            // document.getElementById("cid").value = cid;
            document.getElementById("bai").value = block;
        });
    } else {
        document.getElementById("error").style.display = "block";
        alertError();        
    }
}

function apiTypeLog() {
    
    var settings = {
        "url": "http://enderecos.metheora.com/api/logradouros/tipos",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        typeLogr = response;        
      });      
      // completType();
}

// apiTypeLog();

/*
function completType() {
    if(typeof typeLogr !== 'undefined') {
        typLogList = `<option>Selecione uma opção</option>`;
        optionsTyp.push(typLogList); 
        for (i = 1; i < typeLogr.length; i++) {
            typeArray = typeLogr;
            typeItem = `<option value="` + typeLogr[i] + `">`+ typeLogr[i] +`</option>`;
            optionsTyp.push(typeItem);            
        };
        document.getElementById("typLog").innerHTML = optionsTyp;        
    }     
}
*/
