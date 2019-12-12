// App Script
// Form6
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress6() {
    // Variables
    var progressBar6 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-done">Empresa</li>
                            <li class="progtrckr-done">Proprietário</li>
                            <li class="progtrckr-done">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress6").innerHTML = progressBar6;
}

function generateForm6() {
    var blockForm6 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Pergunta de segurança - Captcha</h4></div>
                            <div class="card-body">                                
                            
                                <label for="cap">Quais SIGLAS do "Corpo de Bombeiros Santa Catarina" (CBMSC):</label>
                                <div class="input-group mb-3">                                      
                                    <input type="text" class="form-control" id="cap">
                                    <div class="input-group-prepend btn-group">
                                        <button class="btn btn-outline-primary" type="button" onclick="validaCaptcha()">Validar</button>
                                    </div>                                      
                                </div>

                                <div class="alert alert-success">
                                    <strong>Captcha Válido!</strong> Você não é um robô!
                                </div>

                                <div class="alert alert-warning">
                                    <strong>Não foi Possível Validar!</strong> Pergunta não respondida, responda para prosseguir.
                                </div>

                                <div class="alert alert-danger">
                                    <strong>Captcha Não Validado!</strong> Há suspeitas de que você seja um robô!
                                </div>

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm5()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="nextForm7()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                        </div>`;

    // Disable form submissions if there are invalid fields

    // Handling variables
    document.getElementById("blockForm6").innerHTML = blockForm6;
}

function previousForm5() {
    document.getElementById("blockForm5").style.display = "block";
    document.getElementById("blockForm5").style.position = "relative";
    document.getElementById("blockForm6").style.display = "none";
    document.getElementById("blockForm6").style.position = "relative";
    document.getElementById("blockProgress5").style.display = "block";
    document.getElementById("blockProgress6").style.display = "none";
}

function nextForm7() {
    document.getElementById("blockForm6").style.display = "none";
    document.getElementById("blockForm6").style.position = "relative";
}

function validaCaptcha() {
    var cap = document.getElementById("cap").value;
    var lowCap = cap.toLowerCase();
    console.log(lowCap);
    document.getElementById("cap").value = "";
    if(lowCap === "cbmsc") {
        alert("Validado!");
    } else {
        alert("Não Validado!");
    }
}

// Excecute functions
generateProgress6();
generateForm6();