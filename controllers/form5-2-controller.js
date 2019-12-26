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
                                                <a class="page-link" href="#" onclick="previousFormb()">Voltar</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" onclick="nextForm6()">Avançar</a>
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
                          <option> Selecione uma opção </option>
                          <option> Opção 1 </option>
                          <option> Opção 2 </option>
                          <option> Opção 3 </option>
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
                            <select class="form-control" id="block" name="comboBlock" onclick="bindBlock()">
                            
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
                            <input id="glpYes" type="radio" class="form-check-input" value="sim" name="optGlp">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="glpNo" type="radio" class="form-check-input" value="nao" name="optGlp">Não
                            </label>
                        </div>                      
                      
                        <div class="form-group">
                            <label for="qtd">Se a opção for sim, qual a quantidade? (kg)</label>
                            <input type="number" class="form-control col-6" id="qtdGlp" name="qtdGlp">
                        </div>
                    </div>

                    <div>
                        <label class="form-check-label">
                            A Empresa terá comércio ou depósito de líquido inflamável/combustível?
                        </label>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="depYes" type="radio" class="form-check-input" value="sim" name="optDep">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="depNo" type="radio" class="form-check-input" value="nao" name="optDep">Não
                            </label>
                        </div>                      
                      
                        <div class="form-group">
                            <label for="qtd">Se a opção for sim, Qual a quantidade? (L)</label>
                            <input type="number" class="form-control col-6" id="qtdGlp" name="qtdGlp">
                        </div>
                    </div>

                    <div>
                        <label class="form-check-label">
                            A empresa irá comercializar, fabricar ou depositar pólvora, explosivos, fogos de artifício, munições, detonantes ou materiais radioativos?
                        </label>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="comYes" type="radio" class="form-check-input" value="sim" name="optCom">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="comNo" type="radio" class="form-check-input" value="nao" name="optCom">Não
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
                            <input id="atiYes" type="radio" class="form-check-input" value="sim" name="optAti">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="atiNo" type="radio" class="form-check-input" value="nao" name="optAti">Não
                            </label>
                        </div> 
                    </div><br>

                    <div>
                        <label class="form-check-label">
                            Sua empresa esta localizada dentro de uma outra edificação (ex.: shopping center, centro comercial, empresarial, galeria, prédio comercial, etc.)?
                        </label>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="locYes" type="radio" class="form-check-input" value="sim" name="optLoc">Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                            <input id="locNo" type="radio" class="form-check-input" value="nao" name="optLoc">Não
                            </label>
                        </div>                      
                        
                        <div class="form-group">
                            <label for="loc">Se a opção for sim, Informe a área total da sua empresa (m²).</label>
                            <input type="number" class="form-control col-6" id="qtdLoc" name="qtdLoc">
                        </div>
                    </div><br>

                    <div>
                        <label class="form-check-label">
                            *Preencha a pergunta abaixo com base na pergunta anterior:<br>
                            Caso tenha respondido "SIM" informe a área total da edificação onde sua empresa está localizada.<br>
                            Caso tenha respondido "NÃO" informe a área construída da sua empresa;<br>                      
                        </label>                                           
                        
                        <div class="form-group row">                          
                            <input type="text" class="form-control col-6" id="qtdLoc2" name="qtdLoc2"> 
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
var block = "";

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
}

function buscaCep() {
  window.open('http://www.buscacep.correios.com.br/sistemas/buscacep/', '_blank');
}

function check() {
  document.getElementById("glpNo").checked = true;
  document.getElementById("depNo").checked = true;
  document.getElementById("comNo").checked = true;
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
}
function bindSituation() {
  situation = document.getElementById("sit").value;
  console.log("Situação:", situation);
}
function bindFloors() {
  floors = document.getElementById("floors").value;
  console.log("Núm. de Pavimentos:", floors);
}
function bindStairs() {
  stairs = document.getElementById("tipo").value;
  console.log("Tipo de Escada:", stairs);
}
function bindCapacity() {
  capacity = document.getElementById("lot").value;
  console.log("Lotação:", capacity);
}
function bindType() {
  type = document.getElementById("tip").value;
  console.log("Tipo:", type);
}
function bindBlock() {
  block = document.getElementById("block").value;
  console.log("Núm. de Blocos:", block);
}

// Excecute functions
generateProgress5b();
generateForm5b();
check();
decimalMask();

