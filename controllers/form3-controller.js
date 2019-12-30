// App Script
// Form3
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress3() {
    // Variables
    var progressBar3 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-todo">Empresa</li>
                            <li class="progtrckr-todo">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress3").innerHTML = progressBar3;
}

function generateForm3() {
    var blockForm3 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Informações Sobre a Empresa</h4></div>
                            <div class="card-body">                                

                            <div class="form-group">
                                <label for="cpfcnpj">CPF/CNPJ da Empresa:</label>
                                <input type="text" class="form-control" id="cpfcnpj" placeholder="Digite o cpf/cnpj" name="cpfcnpj" onblur="bindCpfCnpj()" required>
                            </div>
                            <div class="form-group">
                                <label for="fantasia">Nome Fantasia Empresa:</label>
                                <input type="text" class="form-control" id="fant" placeholder="Digite o nome fantasia" name="fant" onblur="bindNameFant()" required>
                            </div>
                            <div class="form-group">
                                <label for="fone">Telefone:</label>
                                <input type="tel" class="form-control" id="fone" placeholder="Digite o telefone" name="fone" onblur="bindPhone()" required>
                            </div>
                            <div class="form-group">
                                <label for="razao">Razão Social:</label>
                                <input type="text" class="form-control" id="razao" placeholder="Digite a razão social" name="razao" onblur="bindCorporate()" required>
                            </div>
                            <div class="form-group">
                                <label for="contato">Nome Contato:</label>
                                <input type="text" class="form-control" id="contato" placeholder="Digite o nome de contato" name="contato" onblur="bindNameCont()" required>
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="text" class="form-control" id="email" placeholder="Digite o E-mail" name="email" required>
                            </div>                            

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="clearForm3()">Limpar</a>
                                    </li>    
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm2()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="nextForm4()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                    </div>`;

    // Disable form submissions if there are invalid fields

    // Handling variables
    document.getElementById("blockForm3").innerHTML = blockForm3;
}

// Variables

var cpfCnpj = "";
var nameFant = "";
var phone = "";
var corporateName = "";
var nameCont = "";
var email = "";

function previousForm2() {
    document.getElementById("blockForm2").style.display = "block";
    document.getElementById("blockForm2").style.position = "relative";
    document.getElementById("blockForm3").style.display = "none";
    document.getElementById("blockForm3").style.position = "relative";
    document.getElementById("blockProgress2").style.display = "block";
    document.getElementById("blockProgress3").style.display = "none";
}

function nextForm4() {
    document.getElementById("blockForm3").style.display = "none";
    document.getElementById("blockForm3").style.position = "relative";
    document.getElementById("blockForm4").style.display = "block";
    document.getElementById("blockProgress3").style.display = "none";
    document.getElementById("blockProgress4").style.display = "block";
    bindEmail();
}

function phoneMask() {
    $(document).ready(function(){
        $("#fone").mask("(99) 9999-9999");
    });
}

function bindCpfCnpj() {
    cpfCnpj = document.getElementById("cpfcnpj").value;
    console.log("cpfCnpj:", cpfCnpj);   
}
function bindNameFant() {
    nameFant = document.getElementById("fant").value;
    console.log("nameFant:", nameFant);
}
function bindPhone() {
    phone = document.getElementById("fone").value;
    console.log("phone:", phone);
}
function bindCorporate() {
    corporateName = document.getElementById("razao").value;
    console.log("corporateName:", corporateName);
}
function bindNameCont() {
    nameCont = document.getElementById("contato").value;
    console.log("nameCont:", nameCont);
}
function bindEmail() {
    email = document.getElementById("email").value;
    console.log("email:", email);
}

function clearForm3() {
    document.getElementById("cpfcnpj").value = "";
    document.getElementById("fant").value = "";
    document.getElementById("fone").value = "";
    document.getElementById("razao").value = "";
    document.getElementById("contato").value = "";
    document.getElementById("email").value = "";
}

// Excecute functions
generateProgress3();
generateForm3();
phoneMask();