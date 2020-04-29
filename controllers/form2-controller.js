// App Script
// Form2
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Imports
var imported = document.createElement('script');
imported.src = '/controllers/form1-controller.js';
document.head.appendChild(imported);

function showresponse() {
    console.log(response);
}


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
                            <label class="form-check-label">
                                A empresa é classificada como Micro Empreendor Individual (MEI)
                            </label>
                            <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal">
                                ?
                            </span><br>

                                <div class="form-check">
                                <label class="form-check-label">
                                    <input id="meiYes" type="radio" class="form-check-input radioMei" value="Sim" name="optMei" onclick="radioEnabYes()">Sim
                                </label>
                                </div>
                                <div class="form-check">
                                <label class="form-check-label">
                                    <input id="meiNo" type="radio" class="form-check-input radioMei" value="Não" name="optMei" onclick="radioEnabNo()">Não
                                </label>
                                </div><br>

                                <div class="form-group">
                                    <label for="qtd">Quantos funcionários há na empresa incluindo o proprietário?</label>
                                    <input type="number" class="form-control col-6" id="qtd">
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label style-questions">
                                        <input id="noEdif" type="checkbox" class="form-check-input" onclick="bindNoEdif()">
                                        Sua atividade é exercida em área não edificada e transitória, como ambulantes,
                                        carrinhos de lanches em geral, foodtrucks, barracas itinerantes, trios elétricos, carros alegóricos e
                                        similares.
                                    </label>
                                </div><br>

                                <div class="form-check">
                                    <label class="form-check-label style-questions">
                                        <input id="noEdif2" type="checkbox" class="form-check-input" onclick="bindNoEdif2()">
                                        Sua atividade é exercida em área não edificada (ambulante), mas possua ponto
                                        fixo durante determinado período do dia ou da noite e que faça uso de estruturas de tendas ou toldos
                                        como área de apoio com até 50 metros quadrados.
                                    </label>
                                </div><br>

                                <div class="form-check">
                                    <label class="form-check-label style-questions">
                                        <input id="tower" type="checkbox" class="form-check-input" onclick="bindtower()">
                                        Trata-se de uma: torres de transmissão, estações de antena ou de serviço que não
                                        sejam locais de trabalho fixo, que não possuam características de local habitável e que não estejam
                                        posicionadas sobre edificações passíveis de fiscalização pelo CBMSC.
                                    </label>
                                </div><br>

                                <div class="form-check">
                                    <label class="form-check-label style-questions">
                                        <input id="ativCom" type="checkbox" class="form-check-input" onclick="bindAtivCom()">
                                        Trata-se de atividades comerciais ou industriais desenvolvidas em edificação
                                        residencial privativa unifamiliar de até 200 m2 de área total construída e com no máximo 1 (um)
                                        empregado, ressalvadas aquelas que se enquadrem em atividades de alto risco.
                                    </label>
                                </div><br>

                                <div class="form-check">
                                    <label class="form-check-label style-questions">
                                        <input id="agrop" type="checkbox" class="form-check-input" onclick="bindAgrop()">
                                        Trata-se de uma edificação: agropastoris, utilizadas na agricultura familiar, assim
                                        classificados conforme diretrizes para a formulação da Política Nacional da Agricultura Familiar e
                                        Empreendimentos Familiares Rurais, independente de sua área tais como aviários, silos, armazéns,
                                        cocheiras, estábulos, chiqueiros, estrebarias, maternidades animais, garagens de máquinas, estufas,
                                        depósitos, inclusive áreas de preparo e transformação de produtos ou embalagens.
                                    </label>
                                    <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal2b">
                                        ?
                                    </span>
                                </div><br>                                

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="clearForm4()">Limpar</a>
                                    </li>    
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm1()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" id="next2" href="#" onclick="nextForm3()">Avançar</a>
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
                        </div>
                        
                        <!-- The Modal 2b -->
                        <div class="modal" id="myModal2b">
                        <div class="modal-dialog">
                            <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header style-header-modal">
                                <h4 class="modal-title style-title-model">Saiba Mais</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-model">
                                <b>Edificações agropastoris:</b><br> 
                                <p class="style-questions">
                                    Edificações agropastoris, utilizadas na agricultura familiar, assim
                                    classificados conforme diretrizes para a formulação da Política Nacional da Agricultura Familiar e
                                    Empreendimentos Familiares Rurais, independente de sua área tais como aviários, silos, armazéns,
                                    cocheiras, estábulos, chiqueiros, estrebarias, maternidades animais, garagens de máquinas, estufas,
                                    depósitos, inclusive áreas de preparo e transformação de produtos ou embalagens.
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

var noEdif = "Não";
var checkedNoEdif = "";
var noEdif2 = "Não";
var checkedNoEdif2 = "";
var tower = "Não";
var checkedTower = "";
var ativCom = "Não";
var checkedAtivCom = "";
var agrop = "Não";
var checkedAgrop = "";
var qtdFunc = null;
var radioMei = "";

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
    transferVar2();    
}

function check() {
    document.getElementById("meiNo").checked = true;
    radioMei = document.getElementById("meiNo").value;
    console.log("radioMei:", radioMei);
}

function bindNoEdif() {
    checkedNoEdif = document.getElementById("noEdif").checked;
    if(checkedNoEdif == true) {
        noEdif = "Sim";
    } else {
        noEdif = "Não";
    }
    console.log("Atividade em área não edificada:", noEdif);
}

function bindNoEdif2() {
    checkedNoEdif2 = document.getElementById("noEdif2").checked;
    if(checkedNoEdif2 == true) {
        noEdif2 = "Sim";
    } else {
        noEdif2 = "Não";
    }
    console.log("Atividade em área não edificada (ambulante):", noEdif2);
}

function bindtower() {
    checkedTower = document.getElementById("tower").checked;
    if(checkedTower == true) {
        tower = "Sim";
    } else {
        tower = "Não";
    }
    console.log("Torres de transmissão:", tower);
}

function bindAtivCom() {
    checkedAtivCom = document.getElementById("ativCom").checked;
    if(checkedAtivCom == true) {
        ativCom = "Sim";
    } else {
        ativCom = "Não"; 
    }
    console.log("Atividades comerciais:", ativCom);
}

function bindAgrop() {
    checkedAgrop = document.getElementById("agrop").checked;
    if(checkedAgrop == true) {
        agrop = "Sim"; 
    } else {
        agrop = "Não";
    }
    console.log("Edificação: agropastoris:", agrop);
}

function bindBack2() {
    qtdFunc = document.getElementById("qtd").value;
    console.log("qtdFunc:", qtdFunc);
}

function radioEnabYes() {
    radioMei = document.getElementById("meiYes").value;
    console.log("radioMei:", radioMei);    
}

function radioEnabNo() {
    radioMei = document.getElementById("meiNo").value;
    console.log("radioMei:", radioMei);    
}

function clearForm4() {
    document.getElementById("qtd").value = "";
}
function transferVar2() {
    response.push(radioMei);
    response.push(qtdFunc);
    response.push(noEdif);
    response.push(noEdif2);
    response.push(tower);
    response.push(ativCom);
    response.push(agrop);
    showresponse();
}

/*
$(document).keypress(function(e) {
    if(e.which == 13) $('#next2').click();
});
*/
// Excecute functions
generateProgress2();
generateForm1();
check();