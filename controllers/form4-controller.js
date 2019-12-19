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
                                <label for="fant">Nome:</label>
                                <input type="text" class="form-control" id="nome" placeholder="Digite o nome" name="nome" required>
                            </div>
                            <div class="form-group">
                                <label for="fone">Telefone:</label>
                                <input type="tel" class="form-control" id="fone2" placeholder="Digite o telefone" name="fone" required>
                            </div>
                            <div class="form-group">
                                <label for="cpfcnpj">CPF/CNPJ da Empresa:</label>
                                <input type="text" class="form-control" id="cpfcnpj" placeholder="Digite o cpf/cnpj" name="cpfcnpj" required>
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="text" class="form-control" id="email" placeholder="Digite o E-mail" name="email" required>
                            </div>                            

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm3()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="nextForm5()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                    </div>`;

    // Disable form submissions if there are invalid fields

    // Handling variables
    document.getElementById("blockForm4").innerHTML = blockForm4;
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

function phoneMask() {
    $(document).ready(function(){
        $("#fone2").mask("(99) 9 9999-9999");
    });
}

// Excecute functions
generateProgress4();
generateForm4();
phoneMask();