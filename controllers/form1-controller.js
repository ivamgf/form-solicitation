// App Script
// Form1
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions
console.log("Form 1");

// Functions
function generateProgress1() {
    // Variables
    var progressBar1 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-todo">Regin</li>
                            <li class="progtrckr-todo">MEI</li>
                            <li class="progtrckr-todo">Empresa</li>
                            <li class="progtrckr-todo">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Captcha</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress1").innerHTML = progressBar1;
}

function generateForm1() {
    var blockForm1 =   `<div class="card">
                            <div class="card-body">
                                <div class="form-check">
                                    <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="">
                                    Existe protocolo de Alvará expedido pelo REGIN/JUCESC
                                    </label>
                                </div><br>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="prot" placeholder="Digite o Número do Protocolo!">
                                </div><br>
                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="nextForm2()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;

    // Handling variables
    document.getElementById("blockForm1").innerHTML = blockForm1;
}

function nextForm2() {
    document.getElementById("blockForm1").style.display = "none";
    document.getElementById("blockForm1").style.position = "relative";
    document.getElementById("blockForm2").style.display = "block";
    document.getElementById("blockForm2").style.position = "relative";
    document.getElementById("blockProgress1").style.display = "none";
    document.getElementById("blockProgress2").style.display = "block";    
}

// Excecute functions
generateProgress1();
generateForm1();