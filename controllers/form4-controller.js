// App Script
// Form4
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress4() {
    // Variables
    var progressBar4 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-done">Empresa</li>
                            <li class="progtrckr-todo">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress4").innerHTML = progressBar4;
}

function generateForm4() {
    var blockForm4 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Proprietário ou Responsável pela Empresa</h4></div>
                            <div class="card-body">                                
                            
                            <div class="form-group">
                                <label for="name">Nome:</label>
                                <input type="text" class="form-control" id="nome" placeholder="Digite o nome" name="nome" onblur="bindName()" required>
                            </div>
                            <div class="form-group">
                                <label for="fone">Telefone:</label>
                                <input type="tel" class="form-control" id="fone2" placeholder="Digite o telefone" name="fone" onblur="bindPhoneAdm()" required>
                            </div>
                            <div class="form-group">
                                <label for="natId">CPF/CNPJ do Proprietário:</label>
                                <input type="text" class="form-control" id="natId" placeholder="Digite o cpf/cnpj" name="natId" onblur="bindNatId()" required>
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="text" class="form-control" id="emailAdm" placeholder="Digite o E-mail" name="email" onblur="bindEmailAdm()" required>
                            </div>                            

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="clearForm1()">Limpar</a>
                                    </li>    
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm3()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" id="next4" href="#" onclick="validationForm4()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                    </div>`;

    // Disable form submissions if there are invalid fields

    // Handling variables
    document.getElementById("blockForm4").innerHTML = blockForm4;
}

// Variables

var name = "";
var phoneAdm = "";
var natId = "";
var emailAdm = "";

function validationForm4() {
    if(name !== "") {
        if(phoneAdm !== "") {
            if(natId !== "") {
                if(emailAdm !== "") {
                    nextForm5(); 
                } else {
                    alert("Favor digitar um E-mail!");
                }                    
            } else {
                alert("Favor digitar um CPF ou CNPJ!"); 
            }
        } else {
            alert("Favor digitar um Telefone!");
        }
    } else {
        alert("Favor digitar um nome!");
    }
}

function previousForm3() {
    document.getElementById("blockForm3").style.display = "block";
    document.getElementById("blockForm3").style.position = "relative";
    document.getElementById("blockForm4").style.display = "none";
    document.getElementById("blockForm4").style.position = "relative";
    document.getElementById("blockProgress3").style.display = "block";
    document.getElementById("blockProgress4").style.display = "none";
}

function nextForm5() {
    document.getElementById("blockForm4").style.display = "none";
    document.getElementById("blockForm4").style.position = "relative";
    document.getElementById("blockForm5").style.display = "block";
    document.getElementById("blockProgress4").style.display = "none";
    document.getElementById("blockProgress5").style.display = "block";    
}

function phoneMask4() {
    var typePhone2 = phoneAdm.length;
    if(typePhone2 < 10 || typePhone2 > 11) {
        alert("Favor digitar um número de telefone válido!");
    } else {
        if(typePhone2 == 10) {
            $(document).ready(function(){
                $("#fone2").mask("(99) 9999-9999");
            });
        } else {
            $(document).ready(function(){
                $("#fone2").mask("(99) 9 9999-9999");
            });
        }
    }
}

function bindName() {
    name = document.getElementById("nome").value;
    console.log("name:", name);
}
function bindPhoneAdm() {
    phoneAdm = document.getElementById("fone2").value;
    console.log("phoneAdm:", phoneAdm);
    phoneMask4();
}
function bindNatId() {
    natId = document.getElementById("natId").value;
    console.log("natId:", natId);   
}
function bindEmailAdm() {
    emailAdm = document.getElementById("emailAdm").value;
    console.log("emailAdm:", emailAdm);
}
function clearForm1() {
    document.getElementById("nome").value = "";
    document.getElementById("fone2").value = "";
    document.getElementById("natId").value = "";
    document.getElementById("emailAdm").value = "";
}

$(document).keypress(function(e) {
    if(e.which == 13) $('#next4').click();
});

// Excecute functions
generateProgress4();
generateForm4();

