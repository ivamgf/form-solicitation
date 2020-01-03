// App Script
// Web Service Cep
// Author: Ivam Galvão Filho
// Date: 02/01/2020.

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
            cid = address.localidade;
            block = address.bairro;        
            document.getElementById("log").value = log;
            document.getElementById("cid").value = cid;
            document.getElementById("bai").value = block;
        });
    } else {
        document.getElementById("error").style.display = "block";
        alertError();        
    }
}

