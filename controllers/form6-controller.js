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

                                <div class="alert alert-success style-success" id="valid">
                                    <strong>Captcha Válido!</strong> Você não é um robô!
                                </div>

                                <div class="alert alert-warning style-warning" id="warn">
                                    <strong>Não foi Possível Validar!</strong> Pergunta não respondida, responda para prosseguir.
                                </div>

                                <div class="alert alert-danger style-danger" id="nvalid">
                                    <strong>Captcha Não Validado!</strong> Há suspeitas de que você seja um robô!
                                </div>

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="clearForm7()">Limpar</a>
                                    </li>    
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="cancel()">Cancelar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousFormc()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a id="next" class="page-link" href="#">Avançar</a>
                                    </li>
                                    <li class="page-item">
                                        <a id="next6" class="page-link" href="#" onclick="nextForm7()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                        </div>`;

    // Disable form submissions if there are invalid fields

    // Handling variables
    document.getElementById("blockForm6").innerHTML = blockForm6;

    // disable link next
    document.getElementById('next').style.color = "grey";
    document.getElementById("next6").style.display = "none";
}

function previousFormc() {
    document.getElementById("blockForm5b").style.display = "block";
    document.getElementById("blockForm5b").style.position = "relative";
    document.getElementById("blockForm6").style.display = "none";
    document.getElementById("blockForm6").style.position = "relative";
    document.getElementById("blockProgress5b").style.display = "block";
    document.getElementById("blockProgress6").style.display = "none";
}

function cancel() {
    location.reload();
}

function nextForm7() {
    document.getElementById("blockForm6").style.display = "none";
    document.getElementById("blockForm6").style.position = "relative";
    document.getElementById("blockForm7").style.display = "block";
    document.getElementById("blockProgress6").style.display = "none";
    document.getElementById("blockProgress7").style.display = "block";
    ConfirmSolic();
}

function validaCaptcha() {
    var cap = document.getElementById("cap").value;
    var lowCap = cap.toLowerCase();
    document.getElementById("cap").value = "";
    if(lowCap !== "") {
        if(lowCap === "cbmsc") {
            document.getElementById("valid").style.display = "block";
            document.getElementById("nvalid").style.display = "none";
            document.getElementById("warn").style.display = "none";
            document.getElementById("next").style.display = "none";
            document.getElementById("next6").style.display = "block";
        } else {
            document.getElementById("nvalid").style.display = "block";
            document.getElementById("valid").style.display = "none";
            document.getElementById("warn").style.display = "none";
        }
    } else {
        document.getElementById("warn").style.display = "block";
        document.getElementById("valid").style.display = "none";
        document.getElementById("nvalid").style.display = "none";
    }
    
}

function clearForm7() {
    document.getElementById("cap").value = "";
}

// Excecute functions
generateProgress6();
generateForm6();