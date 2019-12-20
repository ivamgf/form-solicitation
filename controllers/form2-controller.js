// App Script
// Form2
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress2() {
    // Variables
    var progressBar2 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-todo">MEI</li>
                            <li class="progtrckr-todo">Empresa</li>
                            <li class="progtrckr-todo">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress2").innerHTML = progressBar2;
}

function generateForm1() {
    var blockForm2 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Classificação MEI</h4></div>
                            <div class="card-body">
                                <div class="form-check">
                                    <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value="mei">
                                    A empresa é classificada como Micro Empreendor Individual (MEI)
                                    </label>
                                    <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal">
                                        ?
                                    </span>
                                </div><br>

                                <div class="form-check">
                                <label class="form-check-label">
                                    <input id="meiYes" type="radio" class="form-check-input" value="sim" name="optMei">Sim
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input id="meiNo" type="radio" class="form-check-input" value="nao" name="optMei">Não
                                </label>
                                </div><br>

                                <div class="form-group">
                                    <label for="qtd">Quantos funcionários há na empresa incluindo o proprietário?:</label>
                                    <input type="text" class="form-control" id="qtd">
                                </div>

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm1()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="nextForm3()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <!-- The Modal -->
                        <div class="modal" id="myModal">
                        <div class="modal-dialog">
                            <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header style-header-modal">
                                <h4 class="modal-title style-title-model">Saiba Mais</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-model">
                                <b>Microempreendedor Individual (MEI):</b> 
                                <p>
                                    Conforme IN 001(Para acessar a norma 
                                    <a href="http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in" target="_blank">clique aqui</a>)
                                </p>
                                <p class="style-par">
                                    é a pessoa que trabalha por conta própria 
                                    e que se legaliza como pequeno empresário, fatura no máximo até R$ 60.000,00 por ano, 
                                    não ter participação em outra empresa como sócio ou titular e ter um empregado 
                                    contratado que receba o salário mínimo ou o piso da categoria.
                                </p>
                                <p class="style-par">
                                    <b>Exemplos de ocupação/atividade considerada como reunião de público:</b>
                                    (Boates, Clubes noturnos em geral, Saões de Baile, Restaurantes dançantes, 
                                    Bares dançantes, Clubes sociais e assemelhados, Circos, 
                                    Auditórios ou salas de reunião com mais de 100m², Teatros, 
                                    Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, 
                                    Piscinas cobertas com arquibancadas e arenas em geral.) 
                                </p>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer style-footer-model">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>

                            </div>
                        </div>
                        </div>`;

    // Handling variables
    document.getElementById("blockForm2").innerHTML = blockForm2;
}

// Variables

var qtdFunc = null;

function previousForm1() {
    document.getElementById("blockForm1").style.display = "block";
    document.getElementById("blockForm1").style.position = "relative";
    document.getElementById("blockForm2").style.display = "none";
    document.getElementById("blockForm2").style.position = "relative";
    document.getElementById("blockProgress1").style.display = "block";
    document.getElementById("blockProgress2").style.display = "none";
}

function nextForm3() {
    document.getElementById("blockForm2").style.display = "none";
    document.getElementById("blockForm2").style.position = "relative";
    document.getElementById("blockForm3").style.display = "block";
    document.getElementById("blockProgress2").style.display = "none";
    document.getElementById("blockProgress3").style.display = "block";
    bindBack2();    
}

function bindBack2() {
    qtdFunc = document.getElementById("qtd").value;
    console.log("qtdFunc:", qtdFunc);
}

// Excecute functions
generateProgress2();
generateForm1();