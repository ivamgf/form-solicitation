// App Script
// Form5
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress5b() {
    // Variables
    var progressBar5b =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-done">Empresa</li>
                            <li class="progtrckr-done">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress5b").innerHTML = progressBar5b;
}

function alertErrorQuestion() {
  
  var blockErrorQuestion = `<div class="alert alert-danger">
                              <strong>Erro!</strong> Alguma questão deve estar em branco, verifique novamente!
                            </div>`;
  
  document.getElementById("blockAlertQuestions").innerHTML = blockErrorQuestion;
}

function generateForm5b() {
    var blockForm5b =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Edificação</h4></div>
                                <div class="card-body">                           
                                    <div id="accordion">                                                                        
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                                    <i class="fas fa-building"></i> Características da Edificação:
                                                </a>
                                            </div>
                                            <div id="collapseThree" class="collapse show" data-parent="#accordion">
                                                <div class="card-body">
                                                <div id="quest"></div>
                                                </div>
                                            </div>
                                        </div>                          
                                    </div>                      
                                        <ul class="pagination justify-content-end" style="margin:20px 0">
                                            <li class="page-item">
                                                <a class="page-link" href="#" onclick="clearForm6()">Limpar</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" onclick="previousFormb()">Voltar</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" id="next5b" href="#" onclick="validationForm5b()">Avançar</a>
                                            </li>
                                        </ul>
                                </div>
                            </div>      
                        </div>`;

    // BlockQuest
    var blockQuest = `<div class="form-group">
                        <label for="ocup">*Ocupação:
                          <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal2">
                              ?
                          </span>
                        </label>
                        <select class="form-control" id="ocup" onclick="bindOccupation()">
                          
                        </select>
                      </div>

                    <div class="row">
                      <div class="form-group col-6">
                        <label for="sit">*Situação:
                          <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal3">
                              ?
                          </span>
                        </label>
                        <select class="form-control" id="sit" onclick="bindSituation()">
                          <option> Selecione uma opção </option>
                          <option> Existente </option>
                          <option> Nova </option>
                          <option> Recente </option>
                        </select>
                      </div>
                      
                      <div class="form-group col-6">
                        <label for="floors">*Nº Pavimentos:</label>
                        <select class="form-control" id="floors" name="comboFloors" onclick="bindFloors()">
                          
                        </select>
                      </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-6">
                            <label for="tipo">*Tipo de Escada:
                            <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal4">
                                ?
                            </span>
                            </label>
                            <select class="form-control" id="tipo" onclick="bindStairs()">
                            <option> Selecione uma opção </option>
                            <option> Sem escada </option>
                            <option> Comum </option>
                            <option> Protegida </option>
                            <option> Enclausurada </option>
                            <option> Enclausurada a prova de fumaça </option>
                            <option> Pressurizada </option>
                            <option> Acesso restrito </option>
                            </select>
                        </div>

                        <div class="form-group col-6">
                            <label for="lot">Qual é a lotação máxima de público:
                            <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal2">
                                ?
                            </span>
                            </label>
                            <div class="form-group">
                                <input type="number" class="form-control" id="lot" name="lot" onblur="bindCapacity()" required>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-6">
                            <label for="tip">*Tipo:
                            </label>
                            <select class="form-control" id="tip" onclick="bindType()">
                            <option> Selecione uma opção </option>
                            <option> Alvenaria </option>
                            <option> madeira </option>
                            <option> mista </option>
                            <option> metálica </option>
                            </select>
                        </div>

                        <div class="form-group col-6">
                            <label for="block">*Nº Blocos:</label>
                            <select class="form-control" id="comboBlock" name="comboBlock" onclick="bindComboBlock()">
                            
                            </select>
                        </div>
                    </div><br>

                    <div>
                        <label class="form-check-label">
                            A Empresa fará uso de gás liquefeito petróleo (GLP) ou gás natural (GN)
                        </label>
                        <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal5">
                            ?
                        </span>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="glpYes" type="radio" class="form-check-input" value="sim" name="optGlp" onclick="bindGlp()">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="glpNo" type="radio" class="form-check-input" value="nao" name="optGlp" onclick="bindGlp()">Não
                            </label>
                        </div>                      
                      
                        <div class="form-group">
                            <label for="qtd">Se a opção for sim, qual a quantidade? (kg)</label>
                            <input type="text" class="form-control col-6" id="qtdGlp" name="qtdGlp" onblur="bindQtdGlp()" disabled="true">
                        </div>
                    </div>

                    <div>
                        <label class="form-check-label">
                            A Empresa terá comércio ou depósito de líquido inflamável/combustível?
                        </label>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="depYes" type="radio" class="form-check-input" value="sim" name="optDep" onclick="bindDep()">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="depNo" type="radio" class="form-check-input" value="nao" name="optDep" onclick="bindDep()">Não
                            </label>
                        </div>                      
                      
                        <div class="form-group">
                            <label for="qtd">Se a opção for sim, Qual a quantidade? (L)</label>
                            <input type="text" class="form-control col-6" id="depGlp" name="depGlp" onblur="bindDepGlp()" disabled="true">
                        </div>
                    </div>

                    <div>
                        <label class="form-check-label">
                            A empresa irá comercializar, fabricar ou depositar pólvora, explosivos, fogos de artifício, munições, detonantes ou materiais radioativos?
                        </label>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="expYes" type="radio" class="form-check-input" value="sim" name="optCom" onblur="bindExp()">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="expNo" type="radio" class="form-check-input" value="nao" name="optCom" onblur="bindExp()">Não
                            </label>
                        </div> 
                    </div><br>

                    <div>
                        <label class="form-check-label">
                            Se a empresa possuir ocupação/atividade como sendo REUNIÃO DE PÚBLICO,
                        </label>
                        <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal6">
                            ?
                        </span>
                        <label class="form-check-label">
                            a lotação de público será superior a 100 pessoas?
                        </label>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="atiYes" type="radio" class="form-check-input" value="sim" name="optAti" onblur="bindReunion()">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="atiNo" type="radio" class="form-check-input" value="nao" name="optAti" onblur="bindReunion()">Não
                            </label>
                        </div> 
                    </div><br>

                    <div>
                        <label class="form-check-label">
                            Sua empresa esta localizada dentro de uma outra edificação (ex.: shopping center, centro comercial, empresarial, galeria, prédio comercial, etc.)?
                        </label>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="locYes" type="radio" class="form-check-input" value="sim" name="optLoc" onclick="bindEdif()">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="locNo" type="radio" class="form-check-input" value="nao" name="optLoc" onclick="bindEdif()">Não
                            </label>
                        </div>                      
                        
                        <div class="form-group">
                            <label for="loc">Se a opção for sim, Informe a área total da sua empresa (m²).</label>
                            <input type="text" class="form-control col-6" id="qtdLoc" name="qtdLoc" onblur="bindEdifArea()" disabled="true">
                        </div>
                    </div><br>

                    <div>
                        <label class="form-check-label">
                            *Preencha a pergunta abaixo com base na pergunta anterior:<br>
                            Caso tenha respondido "SIM" informe a área total da edificação onde sua empresa está localizada.<br>
                            Caso tenha respondido "NÃO" informe a área construída da sua empresa;<br>                      
                        </label>                                           
                        
                        <div class="form-group row">                          
                            <input type="text" class="form-control col-6" id="qtdLoc2" name="qtdLoc2" onblur="bindArea()"> 
                            <label class="loc2" for="loc2"> (m²).</label>
                        </div>
                    </div>

                    <!-- Modal -->                    
                      <!-- The Modal 2 -->
                      <div class="modal" id="myModal2">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header style-header-modal">
                              <h4 class="modal-title style-title-model">Saiba Mais</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-model">
                              <b><div id="title1"></div></b><br>
                              <div id="text1" class="style-text-modal"></div><br>
                              <div id="textLink1" class="style-text-modal"></div>
                              <a href="http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in" target="_blank">
                                (Para acessar a norma clique aqui)
                              </a><br>
                              <div id="title2" class="style-title-modal"></div><br>
                              <div id="text2" class="style-text-modal"></div><br>
                              <div id="title3" class="style-title-modal"></div><br>
                              <div id="text3" class="style-text-modal"></div><br>
                              <div id="title4" class="style-title-modal"></div><br>
                              <div id="text4" class="style-text-modal"></div><br>
                              <div id="title5" class="style-title-modal"></div><br>
                              <div id="text5" class="style-text-modal"></div><br>
                              <div id="title6" class="style-title-modal"></div><br>
                              <div id="text6" class="style-text-modal"></div><br>
                              <div id="title7" class="style-title-modal"></div><br>
                              <div id="text7" class="style-text-modal"></div><br>
                              <div id="title8" class="style-title-modal"></div><br>
                              <div id="text8" class="style-text-modal"></div><br>
                              <div id="title9" class="style-title-modal"></div><br>
                              <div id="text9" class="style-text-modal"></div><br>
                              <div id="title10" class="style-title-modal"></div><br>
                              <div id="text10" class="style-text-modal"></div><br>
                              <div id="title11" class="style-title-modal"></div><br>
                              <div id="text11" class="style-text-modal"></div><br>
                              <div id="title12" class="style-title-modal"></div><br>
                              <div id="text12" class="style-text-modal"></div><br>
                              <div id="title13" class="style-title-modal"></div><br>
                              <div id="text13" class="style-text-modal"></div><br>
                              <div id="title14" class="style-title-modal"></div><br>
                              <div id="text14" class="style-text-modal"></div><br>
                              <div id="title15" class="style-title-modal"></div><br>
                              <div id="text15" class="style-text-modal"></div><br>
                              <div id="title16" class="style-title-modal"></div><br>
                              <div id="text16" class="style-text-modal"></div><br>
                              <div id="title17" class="style-title-modal"></div><br>
                              <div id="text17" class="style-text-modal"></div><br>
                              <div id="title18" class="style-title-modal"></div><br>
                              <div id="text18" class="style-text-modal"></div><br>
                              <div id="title19" class="style-title-modal"></div><br>
                              <div id="text19" class="style-text-modal"></div><br>
                              <div id="title20" class="style-title-modal"></div><br>
                              <div id="text20" class="style-text-modal"></div><br>
                              <div id="title21" class="style-title-modal"></div><br>
                              <div id="text21" class="style-text-modal"></div><br>
                              <div id="title22" class="style-title-modal"></div><br>
                              <div id="text22" class="style-text-modal"></div><br>
                              <div id="title23" class="style-title-modal"></div><br>
                              <div id="text23" class="style-text-modal"></div><br>
                              <div id="title24" class="style-title-modal"></div><br>
                              <div id="text24" class="style-text-modal"></div><br>
                              <div id="title25" class="style-title-modal"></div><br>
                              <div id="text25" class="style-text-modal"></div><br>
                              <div id="text252" class="style-text-modal"></div><br>
                              <div id="text253" class="style-text-modal"></div><br>
                              <div id="text254" class="style-text-modal"></div><br>
                              <div id="text255" class="style-text-modal"></div><br>
                              <div id="text256" class="style-text-modal"></div><br>
                              <div id="text257" class="style-text-modal"></div><br>
                              <div id="text26" class="style-text-modal"></div><br>
                              <div id="text261" class="style-text-modal"></div><br>
                              <div id="text262" class="style-text-modal"></div><br>
                              <div id="text263" class="style-text-modal"></div><br>
                              <div id="text264" class="style-text-modal"></div><br>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer style-footer-model">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>

                          </div>
                        </div>
                      </div>

                      <!-- The Modal 3 -->
                      <div class="modal" id="myModal3">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header style-header-modal">
                              <h4 class="modal-title style-title-model">Saiba Mais</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-model">
                              <b><div id="modal2Title1" class="style-title-modal"></div></b><br>
                              <div id="modal2Text1" class="style-text-modal"></div><br>
                              <div id="modal2TextLink1" class="style-text-modal"></div>
                              <a href="http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in" target="_blank">
                                (Para acessar a norma clique aqui)
                              </a><br>
                              <div id="modal2Title2" class="style-title-modal"></div><br>
                              <div id="modal2Text2" class="style-text-modal"></div><br>
                              <div id="modal2Title3" class="style-title-modal"></div><br>
                              <div id="modal2Text3" class="style-text-modal"></div><br>
                              <div id="modal2Title4" class="style-title-modal"></div><br>
                              <div id="modal2Text4" class="style-text-modal"></div><br>
                              <div id="sit1" class="style-text-modal"></div><br>
                              <div id="sit2" class="style-text-modal"></div><br>
                              <div id="sit3" class="style-text-modal"></div><br>
                              <div id="sit4" class="style-text-modal"></div><br>                              
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer style-footer-model">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>

                          </div>
                        </div>
                      </div>
                      
                      <!-- The Modal 4 -->
                      <div class="modal" id="myModal4">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header style-header-modal">
                              <h4 class="modal-title style-title-model">Saiba Mais</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-model">
                              <b><div id="modal3Title1"></div></b><br>
                              <div id="modal3Text1" class="style-text-modal"></div><br>
                              <div id="modal3Link1" class="style-text-modal"></div>
                              <a href="http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in" target="_blank">
                                (Para acessar a norma clique aqui)
                              </a><br>                     
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer style-footer-model">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>

                          </div>
                        </div>
                      </div>

                      <!-- The Modal 5 -->
                      <div class="modal" id="myModal5">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header style-header-modal">
                              <h4 class="modal-title style-title-model">Saiba Mais</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-model">
                              <b><div id="modal5Title1"></div></b><br>
                              <div id="modal5Text1" class="style-text-modal"></div><br>
                              <div id="modal5Link1" class="style-text-modal"></div>
                              <a href="http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in" target="_blank">
                                (Para acessar a norma clique aqui)
                              </a><br>
                              <div id="modal5Text2" class="style-text-modal"></div><br>
                              <img src="../assets//images/glp.png" class="rounded mx-auto d-block" alt="Gás GLP">                        
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer style-footer-model">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>

                          </div>
                        </div>
                      </div>

                      <!-- The Modal 6 -->
                      <div class="modal" id="myModal6">
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header style-header-modal">
                              <h4 class="modal-title style-title-model">Saiba Mais</h4>
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-model">
                              <b><div id="modal6Title1"></div></b><br>
                              <div id="modal6Text1" class="style-text-modal"></div><br>
                              <div id="modal6Link1" class="style-text-modal"></div>
                              <a href="http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in" target="_blank">
                                (Para acessar a norma clique aqui)
                              </a><br>                        
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer style-footer-model">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>

                          </div>
                        </div>
                      </div>                      
                      <br>
                      <p>*Campos Obrigatórios!</p>
                      `;

    // Handling variables
    document.getElementById("blockForm5b").innerHTML = blockForm5b;
    document.getElementById("quest").innerHTML = blockQuest;
}

// Variables

var occupation = "";
var situation = "";
var floors = "";
var stairs = "";
var capacity = "";
var type = "";
var comboBlock = "";
var optionGlpYes = "";
var optionGlpNo = "";
var quantGlp = "";
var glp = "";
var optionDepYes = "";
var optionDepNo = "";
var dep = "";
var depLiq = "";
var optionExpYes = "";
var optionExpNo = "";
var exp = "";
var optionReuYes = "";
var optionReuNo = "";
var comboReunion = "";
var optionEdiYes = "";
var optionEdiNo = "";
var edification = "";
var edifArea = "";
var area = "";

function previousFormb() {
    document.getElementById("blockForm5").style.display = "block";
    document.getElementById("blockForm5").style.position = "relative";
    document.getElementById("blockForm5b").style.display = "none";
    document.getElementById("blockForm5b").style.position = "relative";
    document.getElementById("blockProgress5b").style.display = "none";
    document.getElementById("blockProgress5").style.display = "block";    
}

function nextForm6() {
    document.getElementById("blockForm5b").style.display = "none";
    document.getElementById("blockForm5b").style.position = "relative";
    document.getElementById("blockForm6").style.display = "block";
    document.getElementById("blockProgress5b").style.display = "none";
    document.getElementById("blockProgress6").style.display = "block";
    bindArea();
    transferVar5b();
}

function buscaCep() {
  window.open('http://www.buscacep.correios.com.br/sistemas/buscacep/', '_blank');
}

function check() {
  document.getElementById("glpNo").checked = true;
  document.getElementById("depNo").checked = true;
  document.getElementById("expNo").checked = true;
  document.getElementById("atiNo").checked = true;
  document.getElementById("locNo").checked = true;
}
function decimalMask() {
    $(document).ready(function(){
        $("#qtdLoc2").mask("9.999.999,99", { reverse : true});
    });
}
function bindOccupation() {
  occupation = document.getElementById("ocup").value;
  console.log("Ocupação:", occupation);
  document.getElementById("blockAlertQuestions").style.display = "none";
}
function bindSituation() {
  situation = document.getElementById("sit").value;
  console.log("Situação:", situation);
  document.getElementById("blockAlertQuestions").style.display = "none";
}
function bindFloors() {
  floors = document.getElementById("floors").value;
  console.log("Núm. de Pavimentos:", floors);
  document.getElementById("blockAlertQuestions").style.display = "none";
}
function bindStairs() {
  stairs = document.getElementById("tipo").value;
  console.log("Tipo de Escada:", stairs);
  document.getElementById("blockAlertQuestions").style.display = "none";
}
function bindCapacity() {
  capacity = document.getElementById("lot").value;
  console.log("Lotação:", capacity);
  document.getElementById("blockAlertQuestions").style.display = "none";
}
function bindType() {
  type = document.getElementById("tip").value;
  console.log("Tipo:", type);
  document.getElementById("blockAlertQuestions").style.display = "none";
}
function bindComboBlock() {
  comboBlock = document.getElementById("comboBlock").value;
  console.log("Núm. de Blocos:", comboBlock);
  document.getElementById("blockAlertQuestions").style.display = "none";
}
function bindGlp() {
  optionGlpYes = document.getElementById("glpYes").checked;
  optionGlpNo = document.getElementById("glpNo").checked;
  if(optionGlpYes == true) {
    glp = "Sim";
    console.log("Gás Natural?", glp);
    document.getElementById("qtdGlp").disabled = false;      
  }
  if(optionGlpNo == true) {
    glp = "Não";
    console.log("Gás Natural?", glp);
    document.getElementById("qtdGlp").disabled = true;
  }
  document.getElementById("blockAlertQuestions").style.display = "none";  
}
function bindQtdGlp() {
  quantGlp =  document.getElementById("qtdGlp").value;
  console.log("Quant. Gás:", quantGlp);
}
function bindDep() {
  optionDepYes = document.getElementById("depYes").checked;
  optionDepNo = document.getElementById("depNo").checked;
  if(optionDepYes == true) {
    dep = "Sim";
    console.log("Tem depósito?", dep);
    document.getElementById("depGlp").disabled = false;           
  }
  if(optionDepNo == true) {
    dep = "Não";
    console.log("Tem depósito?", dep);
    document.getElementById("depGlp").disabled = true;
  }  
  document.getElementById("blockAlertQuestions").style.display = "none";  
}
function bindDepGlp() {
  depLiq = document.getElementById("depGlp").value;
  console.log("Quant. em Litros?", depLiq);
}
function bindExp() {
  optionExpYes = document.getElementById("expYes").checked;
  optionExpNo = document.getElementById("expNo").checked;
  if(optionExpYes == true) {
    exp = "Sim";
    console.log("Fabrica Explosivos, pólvora, ...?", exp);   
  }
  if(optionExpNo == true) {
    exp = "Não";
    console.log("Fabrica Explosivos, pólvora, ...?", exp);
  }
  document.getElementById("blockAlertQuestions").style.display = "none";  
}
function bindReunion() {
  optionReuYes = document.getElementById("atiYes").checked;
  optionReuNo = document.getElementById("atiNo").checked;
  if(optionReuYes == true) {
    comboReunion = "Sim";
    console.log("Reunião de público?", comboReunion);   
  }
  if(optionReuNo == true) {
    comboReunion = "Não";
    console.log("Reunião de público?", comboReunion);
  }
  document.getElementById("blockAlertQuestions").style.display = "none";  
}
function bindEdif() {
  optionEdiYes = document.getElementById("locYes").checked;
  optionEdiNo = document.getElementById("locNo").checked;
  if(optionEdiYes == true) {
    edification = "Sim";
    console.log("Edificação?", edification);
    document.getElementById("qtdLoc").disabled = false;        
  }
  if(optionEdiNo == true) {
    edification = "Não";
    console.log("Edificação?", edification);
    document.getElementById("qtdLoc").disabled = true;
  }
  document.getElementById("blockAlertQuestions").style.display = "none";  
}
function bindEdifArea() {
  edifArea = document.getElementById("qtdLoc").value;
  console.log("Área da Edificação?", edifArea);
}
function bindArea() {
  area = document.getElementById("qtdLoc2").value;
  console.log("Área:", area);
  document.getElementById("blockAlertQuestions").style.display = "none";
}

function validationForm5b() {
  console.log(occupation);
  console.log(situation);
  console.log(floors);
  console.log(stairs);
  console.log(capacity);
  console.log(type);
  console.log(comboBlock);
  console.log(area);
  if(occupation !== "") {
    if(situation !== "") {
      if(floors !== "") {
        if(stairs !== "") {
          if(capacity !== "") {
            if(type !== "") {
              if(comboBlock !== "") {
                if(area !== "") {
                  nextForm6();
                } else {
                  document.getElementById("blockAlertQuestions").style.display = "block";
                }
              } else {
                document.getElementById("blockAlertQuestions").style.display = "block";
              }
            } else {
              document.getElementById("blockAlertQuestions").style.display = "block";
            }
          } else {
            document.getElementById("blockAlertQuestions").style.display = "block";
          }
        } else {
          document.getElementById("blockAlertQuestions").style.display = "block";
        }
      } else {
        document.getElementById("blockAlertQuestions").style.display = "block";
      }
    } else {
      document.getElementById("blockAlertQuestions").style.display = "block";
    }    
  } else {
    document.getElementById("blockAlertQuestions").style.display = "block";
  }
}

function clearForm6() {
  document.getElementById("ocup").value = "";
  document.getElementById("sit").value = "";
  document.getElementById("floors").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("lot").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("block").value = "";
  document.getElementById("qtdGlp").value = "";
  document.getElementById("depGlp").value = "";
  document.getElementById("qtdLoc").value = "";
  document.getElementById("qtdLoc2").value = "";
  document.getElementById("qtdGlp").disabled = true;
  document.getElementById("depGlp").disabled = true;
  document.getElementById("qtdLoc").disabled = true;
  check();
}
function transferVar5b() {  
  response.push(occupation);
  response.push(situation);
  response.push(floors); 
  response.push(stairs);
  response.push(capacity); 
  response.push(type);
  response.push(comboBlock); 
  response.push(glp);
  response.push(quantGlp); 
  response.push(dep);
  response.push(depLiq);
  response.push(exp);
  response.push(comboReunion);
  response.push(edification);
  response.push(edifArea);
  response.push(area);
  showresponse();
}

$(document).ready(function(){
  $('#qtdGlp').mask('0#');
});

$(document).ready(function(){
  $('#depGlp').mask('0#');
});

$(document).ready(function(){
  $('#qtdLoc').mask('0#');
});

function textGas() {
  // Text gas

  var text1 = `(Boates, Clubes noturnos em geral, Salões de Baile, Restaurantes dançantes, Bares dançantes, Clubes sociais e assemelhados, Circos, Auditórios ou salas de reunião com mais de 100m², Teatros, Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, Piscinas cobertas com arquibancadas e arenas em geral.)`;
  var text2 = `O número após o "P" indica quantos kg de GLP cada botijão possui. Basta somar quantos botijões de cada você possui.`;
  var gas = {
      title1: "Exemplos de ocupação/atividade considerada como reunião de público:",
      text1: text1,
      textLink1: "Conforme IN 008",
      link1: "http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in",
      text2: text2
  };

  document.getElementById("modal5Title1").innerHTML = gas.title1;
  document.getElementById("modal5Text1").innerHTML = gas.text1;
  document.getElementById("modal5Link1").innerHTML = gas.textLink1;
  document.getElementById("modal5Text2").innerHTML = gas.text2;

  document.getElementById("modal6Title1").innerHTML = gas.title1;
  document.getElementById("modal6Text1").innerHTML = gas.text1;
  document.getElementById("modal6Link1").innerHTML = gas.textLink1;
}

function textOccupation() {
  // Ocupation

  // Variables

  var ocup;
  var ocupArray = [];
  var cmbInit;
  var cmbOcupation = [];
  var itemCombo = "";

  // Text ocupation

  var text1 = `(Boates, Clubes noturnos em geral, Salões de Baile, Restaurantes dançantes, Bares dançantes, Clubes sociais e assemelhados, Circos, Auditórios ou salas de reunião com mais de 100m², Teatros, Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, Piscinas cobertas com arquibancadas e arenas em geral.)`;

  var text2 = `São os auditórios ou salas de reunião com mais de 100m2, boates, clubes noturnos em geral, salões de baile, restaurantes dançantes, bares dançantes, clubes sociais, circos, teatros, cinemas, óperas, templos religiosos sem assentos (cadeira, banco ou poltrona), estádios, ginásios e piscinas cobertas com arquibancadas, arenas em geral.`;

  var text3 = `Auditórios ou salas de reunião com até 100m2, restaurantes, lanchonetes, bares, cafés, refeitórios, cantinas, templos religiosos com assentos (cadeiras, bancos ou poltrona), museus, cartórios, piscinas cobertas sem arquibancadas, galerias de arte, bibliotecas, rodoviárias, parques de diversões, aeroportos, aeroclubes).`;

  var text6 = `Edificações destinadas a desenvolver atividades os pensionatos, asilos, conventos, internatos e congêneres.`;

  var text8 = `São os imóveis destinadas a desenvolver as atividades como: mercantil, comercial em geral, lojas, mercados, escritórios, galerias comerciais, supermercados e congêneres.`;

  var text9 = `Empreendimento constituído por um conjunto planejado de lojas, operando de forma integrada, sob administração única e centralizada; composto de lojas destinadas à exploração de ramos diversificados ou especializados de comércio e prestação de serviços (Assoc. Bras. de Shopping Centers ABRASCE).`;

  var text10 = `Edificações que executam um conjunto de operações com a finalidade de transformar uma matéria-prima em outra matéria-prima ou produto final.`;

  var text12 = `Imóveis utilizados com atividade de quartéis, secretarias, tribunais, delegacias, consulados e outros.`;

  var text13 = `São as escolas de ensino fundamental, médio ou superior, creches, jardins de infância, maternal, cursos supletivo, cursos pré-vestibulares e congêneres.`;

  var text14 = `São as escolas de artes, artesanatos, profissionalizantes, academias de ginásticas, escolas de idiomas, escolas de músicas e outros.`;

  var text15 = `Hospital, laboratório, unidades de pronto atendimento, clínica médica e congêneres quando houver internação ou ocorrer, mesmo que por breve período, a restrição de mobilidade do paciente (procedimentos como anestesia, sedação ou que impossibilite, ainda que temporária, a saída por conta própria a qualquer tempo)`;

  var text16 = `Hospital, laboratório, unidades de pronto atendimento, clínica médica e congêneres quando não houver internação ou não ocorrer a restrição de mobilidade do paciente.`;

  var text17 = `São os edifícios garagem, garagens em geral, hangares, marinas e congêneres.`;

  var text18 = `Postos de combustíveis em geral, inclusive aqueles que realizar reabastecimento de GNV.`;

  var text19 = `São as edificações destinadas ao armazenamento de recipientes transportáveis de gás liquefeito de petróleo (GLP) (IN 29).`;

  var text20 = `Imóveis utilizados como galpões, centros de distribuição, centro atacadista, entre outros.`;

  var text21 = `São as penitenciárias, presídios, centro de internação de menor infrator, manicômio e congêneres.`;

  var text22 = `São as edificações ou complexo de edificações do tipo sociedades recreativas, clubes, hotéis, pousadas, parques aquáticos, estações termais, hidrominerais e empreendimentos de lazer e turismo que possuam piscinas de uso coletivo e/ou áreas com opção aquática de lazer, como lagos, lagoas, represas e similares (Complemento IN 33)`;

  var text23 = `São aquelas edificações e instalações de caráter rudimentar ou provisório, edificações que abrigam aviários, chiqueiros, pocilgas, estrebarias, estábulos, retes, canis, gatis, haras, criadouros diversos, estufas destinadas à produção de mudas ou hortifrutigranjeiros, edificações para estocagem de forrageiras ou fardos, silos para estocagem de grãos, secadores de grãos ou folhas, paióis e outros (Complemento IN34).`;

  var text24 = `Minas de extração de minério, túneis rodoviários, etc..`;

  var textLink1 = `Conforme IN 001`;

  var occupation = { 
      text0: "Ocupação", 
      title1: "Exemplos de ocupação/atividade considerada como reunião de público:", 
      text1: text1,
      textLink1: textLink1,
      link1: "http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in",
      title2: "Reunião de público com concentração:",
      text2:  text2,
      title3: "Reunião de público sem concentração:",
      text3: text3,
      title4: "Residencial Privativa Multifamiliar:",
      text4: "Edificações na qual exista duas ou mais unidades residenciais.",
      title5: "Residencial Privativa Unifamiliar:",
      text5: "Edificações destinadas a abrigar apenas uma família com apenas uma unidade residencial.",
      title6: "Residencial Coletiva:",
      text6: text6,
      title7: "Residencial Transitória:",
      text7: "São os hotéis, apart-hotéis, albergues, motéis e congêneres.",
      title8: "Comercial:",
      text8: text8,
      title9: "Shopping Center:",
      text9: text9,
      title10: "Industrial:",
      text10: text10,
      title11: "Mista:",
      text11: "É o imóvel com duas ou mais ocupações diferentes.",
      title12: "Pública:",
      text12: text12,
      title13: "Escolar geral:",
      text13: text13,
      title14: "Escolar Diferenciada:",
      text14: text14,
      title15: "Hospitalar com internação ou com restrição de mobilidade:",
      text15: text15,
      title16: "Hospitalar sem internação e sem restrição de mobilidade:",
      text16: text16,
      title17: "Garagens:",
      text17: text17,
      title18: "Postos para reabastecimentos de combustíveis (líquidos inflamáveis e GNV):",
      text18: text18,
      title19: "Postos de revenda de glp (PRGLP):",
      text19: text19,
      title20: "Depósitos:",
      text20: text20,
      title21: "Locais com restrição de liberdade:",
      text21: text21,
      title22: "Parques aquáticos:",
      text22: text22,
      title23: "Atividades agropastoris e silos:",
      text23: text23,
      title24: "Túneis, galerias e minas:",
      text24: text24,
      title25: "Riscos diferenciados:",
      text25: {
          a: "a) estação de rádio ou TV;",
          b: "b) centro de computação;",
          c: "c) subestação elétrica (complemento IN 16);",
          d: "d) hidroelétrica, termoelétrica ou usina eólica;",
          e: "e) centrais telefônicas ou de telecomunicações;",
          f: "f) estações de serviço (torre de transmissão de rádio, TV ou telefonia);",
          g: "g) portos;",
          text26: {
              title26: "Edificações Especiais:",
              h: "a) oficinas de consertos de veículos automotores;",
              i: "b) depósito de combustíveis e/ou inflamáveis (complemento IN 29);",
              j: "c) depósito de armas, explosivos e munições (complemento IN 30);",
              k: "d) caldeiras e vasos de pressão (complemento IN 32)."
          }
      }
  };

  function ocupCombo() {
      ocup = {
          1: "RESIDENCIAL PRIVATIVA MULTIFAMILIAR",
          2: "RESIDENCIAL PRIVATIVA UNIFAMILIAR",
          3: "RESIDENCIAL COLETIVA",
          4: "RESIDENCIAL TRANSITÓRIA",
          5: "COMERCIAL",
          6: "INDUSTRIAL",
          7: "MISTA",
          8: "PÚBLICA",
          9: "ESCOLAR GERAL",
          10: "HOSPITALAR COM INTERNAÇÃO OU RESTRIÇÃO DE MOBILIDADE",
          11: "GARAGENS",
          12: "REUNIÄO DE PÚBLICO",
          13: "EDIFICAÇÖES ESPECIAIS",
          14: "EDIFICAÇÖES ESPECIAIS - DEPÓSITO DE COMBUSTIVEIS E/OU INFLAMÁVEIS",
          15: "EDIFICAÇÖES ESPECIAIS - DEPÓSITO DE EXPLOSIVOS E MUNIÇÕES",
          16: "POSTOS PARA REABASTECIMENTOS DE COMBUSTÍVEIS",
          17: "POSTOS DE REVENDA DE GLP",
          18: "DEPÓSITOS",
          19: "LOCAIS COM RESTRIÇÃO DE LIBERDADE",
          20: "MATAS NATIVAS E REFLORESTAMENTOS",
          21: "PARQUES AQUÁTICOS",
          22: "ATIVIDADES AGROPASTORIS E SILOS",
          23: "TÚNEIS, GALERIAS E MINAS",
          24: "RISCOS DIFERENCIADOS - ESTAÇÃO DE RÁDIO E TV",
          25: "RISCOS DIFERENCIADOS - CENTRO DE COMPUTAÇÃO",
          26: "RISCOS DIFERENCIADOS - SUBESTAÇÃO ELÉTRICA",
          27: "RISCOS DIFERENCIADOS - HIDROELÉTRICA, TERMOELÉTRICA OU USINA EÓLICA",
          28: "RISCOS DIFERENCIADOS - CENTRAIS TELEFÔNICAS OU DE TELECOMUNICAÇÕES",
          29: "RISCOS DIFERENCIADOS - TORRE DE TRANSMISSÃO DE RÁDIO, TV OU TELEFONIA",
          30: "RISCOS DIFERENCIADOS - PORTOS",
          31: "EDIFICAÇÖES ESPECIAIS - OFICINAS DE CONSERTOS DE VEICULOS AUTOMOTORES",
          32: "EDIFICAÇÖES ESPECIAIS - CALDEIRAS E VASOS DE PRESSÃO",
          33: "SHOPPING CENTER",
          34: "ESCOLAR DIFERENCIADA",
          35: "HOSPITALAR SEM INTERNAÇÃO OU RESTRIÇÃO DE MOBILIDADE"
      }

      cmbInit = `<option value="">Selecione uma ocupação</option>`;
      cmbOcupation.push(cmbInit);
      for(i = 1; i < 37; i++) {
          ocupArray = ocup;        
          itemCombo = `<option value="`+ocupArray[i]+`">`+ocupArray[i]+`</option>`;
          cmbOcupation.push(itemCombo);
          document.getElementById("ocup").innerHTML = cmbOcupation;
      }
  }

  document.getElementById("title1").innerHTML = occupation.title1;
  document.getElementById("text1").innerHTML = occupation.text1;
  document.getElementById("textLink1").innerHTML = occupation.textLink1;
  document.getElementById("title2").innerHTML = occupation.title2;
  document.getElementById("text2").innerHTML = occupation.text2;
  document.getElementById("title3").innerHTML = occupation.title3;
  document.getElementById("text3").innerHTML = occupation.text3;
  document.getElementById("title4").innerHTML = occupation.title4;
  document.getElementById("text4").innerHTML = occupation.text4;
  document.getElementById("title5").innerHTML = occupation.title5;
  document.getElementById("text5").innerHTML = occupation.text5;
  document.getElementById("title6").innerHTML = occupation.title6;
  document.getElementById("text6").innerHTML = occupation.text6;
  document.getElementById("title7").innerHTML = occupation.title7;
  document.getElementById("text7").innerHTML = occupation.text7;
  document.getElementById("title8").innerHTML = occupation.title8;
  document.getElementById("text8").innerHTML = occupation.text8;
  document.getElementById("title9").innerHTML = occupation.title9;
  document.getElementById("text9").innerHTML = occupation.text9;
  document.getElementById("title10").innerHTML = occupation.title10;
  document.getElementById("text10").innerHTML = occupation.text10;
  document.getElementById("title11").innerHTML = occupation.title11;
  document.getElementById("text11").innerHTML = occupation.text11;
  document.getElementById("title12").innerHTML = occupation.title12;
  document.getElementById("text12").innerHTML = occupation.text12;
  document.getElementById("title13").innerHTML = occupation.title13;
  document.getElementById("text13").innerHTML = occupation.text13;
  document.getElementById("title14").innerHTML = occupation.title14;
  document.getElementById("text14").innerHTML = occupation.text14;
  document.getElementById("title15").innerHTML = occupation.title15;
  document.getElementById("text15").innerHTML = occupation.text15;
  document.getElementById("title16").innerHTML = occupation.title16;
  document.getElementById("text16").innerHTML = occupation.text16;
  document.getElementById("title17").innerHTML = occupation.title17;
  document.getElementById("text17").innerHTML = occupation.text17;
  document.getElementById("title18").innerHTML = occupation.title18;
  document.getElementById("text18").innerHTML = occupation.text18;
  document.getElementById("title19").innerHTML = occupation.title19;
  document.getElementById("text19").innerHTML = occupation.text19;
  document.getElementById("title20").innerHTML = occupation.title20;
  document.getElementById("text20").innerHTML = occupation.text20;
  document.getElementById("title21").innerHTML = occupation.title21;
  document.getElementById("text21").innerHTML = occupation.text21;
  document.getElementById("title22").innerHTML = occupation.title22;
  document.getElementById("text22").innerHTML = occupation.text22;
  document.getElementById("title23").innerHTML = occupation.title23;
  document.getElementById("text23").innerHTML = occupation.text23;
  document.getElementById("title24").innerHTML = occupation.title24;
  document.getElementById("text24").innerHTML = occupation.text24;
  document.getElementById("title25").innerHTML = occupation.title25;
  document.getElementById("text25").innerHTML = occupation.text25.a;
  document.getElementById("text252").innerHTML = occupation.text25.b;
  document.getElementById("text253").innerHTML = occupation.text25.c;
  document.getElementById("text254").innerHTML = occupation.text25.d;
  document.getElementById("text255").innerHTML = occupation.text25.e;
  document.getElementById("text256").innerHTML = occupation.text25.f;
  document.getElementById("text257").innerHTML = occupation.text25.g;
  document.getElementById("text26").innerHTML = occupation.text25.text26.title26;
  document.getElementById("text261").innerHTML = occupation.text25.text26.h;
  document.getElementById("text262").innerHTML = occupation.text25.text26.i;
  document.getElementById("text263").innerHTML = occupation.text25.text26.j;
  document.getElementById("text264").innerHTML = occupation.text25.text26.k;

  // Execute functions

  ocupCombo();
}

function textSituation() {
  // Text situation

  var text1 = `(Boates, Clubes noturnos em geral, Salões de Baile, Restaurantes dançantes, Bares dançantes, Clubes sociais e assemelhados, Circos, Auditórios ou salas de reunião com mais de 100m², Teatros, Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, Piscinas cobertas com arquibancadas e arenas em geral.)`;
  var text2 = `aquela que já se encontrava edificada, acabada ou concluída na data de publicação (11/11/2013) da Lei no 16.157, de 07/11/2013.`;
  var text3 = `aquela que ainda se encontrava em fase de projeto ou de construção na data de publicação (11/11/2013) da Lei no 16.157, de 07/11/2013, e a que vier a ser construída posteriormente.`;
  var textA = `não obteve aprovação de projeto preventivo quando foi edificada pelo fato de a ocupação original e/ou a legislação vigente na época não exigir; ou `;
  var textB = `embora anteriormente aprovada pelo Corpo de Bombeiros Militar, venha a enquadrar-se posteriormente numa das seguintes situações:`;
  var c1 = `(1) aprovada para ocupação diversa da atual ou pretendida; ou`;
  var c2 = `(2) desatualizada em relação às normas vigentes, mantendo ou modificando a ocupação original.`;

  var situation = {
      title1: "Exemplos de ocupação/atividade considerada como reunião de público:",
      text1: text1,
      textLink1: "Conforme IN 001(Para acessar a norma clique aqui)",
      link1: "http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in",
      title2: "Edificação existente:",
      text2: text2,
      title3: "Edificação nova:",
      text3: text3,
      title4: "Edificação recente:",
      text4: "aquela que se enquadra nas seguintes situações:",
      sit: {
          a: textA,
          b: textB,
          c1: c1,
          c2: c2
      }
  };

  document.getElementById("modal2Title1").innerHTML = situation.title1;
  document.getElementById("modal2Text1").innerHTML = situation.text1;
  document.getElementById("modal2TextLink1").innerHTML = situation.textLink1;
  document.getElementById("modal2Title2").innerHTML = situation.title2;
  document.getElementById("modal2Text2").innerHTML = situation.text2;
  document.getElementById("modal2Title3").innerHTML = situation.title3;
  document.getElementById("modal2Text3").innerHTML = situation.text3;
  document.getElementById("modal2Title4").innerHTML = situation.title4;
  document.getElementById("modal2Text4").innerHTML = situation.text4;
  document.getElementById("sit1").innerHTML = situation.sit.a;
  document.getElementById("sit2").innerHTML = situation.sit.b;
  document.getElementById("sit3").innerHTML = situation.sit.c1;
  document.getElementById("sit4").innerHTML = situation.sit.c2;
}

function textStairs() {
  // Text stairs

  var text1 = `(Boates, Clubes noturnos em geral, Salões de Baile, Restaurantes dançantes, Bares dançantes, Clubes sociais e assemelhados, Circos, Auditórios ou salas de reunião com mais de 100m², Teatros, Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, Piscinas cobertas com arquibancadas e arenas em geral.)`;
  var gas = {
      title1: "Exemplos de ocupação/atividade considerada como reunião de público:",
      text1: text1,
      textLink1: "Conforme IN 008, SISTEMA DE SAIDA DE EMERGÊNCIA",
      link1: "http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in"
  };

  document.getElementById("modal3Title1").innerHTML = gas.title1;
  document.getElementById("modal3Text1").innerHTML = gas.text1;
  document.getElementById("modal3Link1").innerHTML = gas.textLink1;
}

function textReunion() {
  // Text reunion

  var text1 = `(Boates, Clubes noturnos em geral, Salões de Baile, Restaurantes dançantes, Bares dançantes, Clubes sociais e assemelhados, Circos, Auditórios ou salas de reunião com mais de 100m², Teatros, Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, Piscinas cobertas com arquibancadas e arenas em geral.)`;

  var reunion = {
      title1: "Exemplos de ocupação/atividade considerada como reunião de público:",
      text1: text1
  };
}

// Excecute functions
generateProgress5b();
generateForm5b();
check();
decimalMask();
bindGlp();
bindDep();
bindExp();
bindReunion();
bindEdif();
alertErrorQuestion();
textGas();
textOccupation();
textSituation();
textStairs();
textReunion();
