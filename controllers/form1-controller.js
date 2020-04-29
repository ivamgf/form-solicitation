// App Script
// Form1
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions

function generateProgress1() {
    // Variables
    var progressBar1 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-todo">Regin</li>
                            <li class="progtrckr-todo">MEI</li>
                            <li class="progtrckr-todo">Empresa</li>
                            <li class="progtrckr-todo">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress1").innerHTML = progressBar1;
}

function generateForm1() {
    var blockForm1 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>REGIN</h4></div>
                            <div class="card-body">
                                <div class="form-check">
                                    <label class="form-check-label">
                                    <input id="regin" type="checkbox" class="form-check-input" value="" onclick="checkEnab()">
                                    Existe protocolo de Alvará expedido pelo REGIN/JUCESC
                                    </label>
                                </div><br>
                                <div class="form-group">
                                    <input type="text" class="form-control col-6" id="prot" placeholder="Digite o Número do Protocolo!" disabled="true">
                                </div><br>
                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" id="next1" href="#" onclick="nextForm2()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;

    // Handling variables
    document.getElementById("blockForm1").innerHTML = blockForm1;
}

// Variables

var protRegin = "";
var checkRegin = false;
// Functions

function regin() {    
    if(checkRegin === false) {
        checkRegin = "Não";
    }
    if(checkRegin === true) {
        checkRegin = "Sim";
    }
}

function nextForm2() {
    document.getElementById("blockForm1").style.display = "none";
    document.getElementById("blockForm1").style.position = "relative";
    document.getElementById("blockForm2").style.display = "block";
    document.getElementById("blockForm2").style.position = "relative";
    document.getElementById("blockProgress1").style.display = "none";
    document.getElementById("blockProgress2").style.display = "block";
    bindBack1();
    transferVar1();   
}

function checkEnab() {
    checkRegin = document.getElementById("regin").checked;
    if(checkRegin === true) {
        checkRegin = "sim";       
    }
    console.log("Regin:", checkRegin);
    if(checkRegin === "sim") {
        checkRegin = "sim";
        document.getElementById("prot").disabled = false;       
    }
}

function bindBack1() {
    protRegin = document.getElementById("prot").value;
    console.log("protRegin:", protRegin);        
}
var response = [];
function transferVar1() {
    if(checkRegin === true) {
        checkRegin = "sim";       
    }
    response.push(checkRegin);
    response.push(protRegin);    
    showresponse();
}

/*
$(document).keypress(function(e) {
    if(e.which == 13) $('#next1').click();
});
*/
// Excecute functions
generateProgress1();
generateForm1();
regin();