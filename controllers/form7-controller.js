// App Script
// Form7
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress7() {
    // Variables
    var progressBar7 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-done">Empresa</li>
                            <li class="progtrckr-done">Proprietário</li>
                            <li class="progtrckr-done">Edificação</li>
                            <li class="progtrckr-done">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress7").innerHTML = progressBar7;
}

function generateForm7() {
    var blockForm7 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Proprietário ou Responsável pela Empresa</h4></div>
                            <div class="card-body">                                
                                                      

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
    document.getElementById("blockForm7").innerHTML = blockForm7;
}

function previousForm6() {
    document.getElementById("blockForm6").style.display = "block";
    document.getElementById("blockForm6").style.position = "relative";
    document.getElementById("blockForm7").style.display = "none";
    document.getElementById("blockForm7").style.position = "relative";
    document.getElementById("blockProgress6").style.display = "block";
    document.getElementById("blockProgress7").style.display = "none";
}

function nextForm7() {
    // window.open('https://www.cbm.sc.gov.br/');
}

// Excecute functions
generateProgress7();
generateForm7();