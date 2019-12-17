// App Script
// Form5
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress5() {
    // Variables
    var progressBar5 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-done">Empresa</li>
                            <li class="progtrckr-done">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress5").innerHTML = progressBar5;
}

function generateForm5() {
    var blockForm5 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Edificação</h4></div>
                            <div class="card-body">                                
                            
                            <div id="accordion">

                            <div class="card">
                              <div class="card-header">
                                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                    <i class="fas fa-user"></i> Dados:
                                </a>
                              </div>
                              <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                <div class="card-body">
                                  <div class="form-group">
                                      <label for="fant">Nome:</label>
                                      <input type="text" class="form-control" id="nome" placeholder="Digite o nome" name="nome" required>
                                  </div>
                                  <div class="form-group">
                                      <label for="fant">Nome Fantasia Empresa:</label>
                                      <input type="text" class="form-control" id="fant" placeholder="Digite o nome fantasia" name="fant">
                                  </div>
                                  <div class="form-group">
                                      <label for="re">RE:</label>
                                      <input type="number" class="form-control" id="re" placeholder="Digite a RE" name="re" required>
                                  </div>
                                </div>
                              </div>
                            </div>
                          
                            <div class="card">
                              <div class="card-header">
                                <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                    <i class="fas fa-address-card"></i> Endereço:
                                </a>
                              </div>
                              <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                <div class="card-body">                                    
                                    
                                  <div class="row">
                                    <div class="col-6">
                                      <label for="cep">CEP:</label>
                                      <div class="input-group mb-3">                                      
                                        <input type="text" class="form-control" id="cep" placeholder="Digite o CEP" name="cep" required>
                                        <div class="input-group-prepend">
                                          <button class="btn btn-outline-primary" type="button" onclick="buscaCep()">Pesquisar CEP</button>
                                        </div>                                      
                                      </div>
                                    </div>                              

                                    <div class="form-group col-6">
                                        <label for="tiplog">Tipo Logradouro:</label>
                                        <input type="text" class="form-control" id="tiplog" name="tiplog">
                                    </div>
                                  </div>
                                  
                                    <div class="form-group">
                                        <label for="log">Logradouro:</label>
                                        <input type="text" class="form-control" id="log" name="log" required>
                                    </div>

                                  <div class="row">
                                    <div class="form-group col-6">
                                        <label for="num">Número:</label>
                                        <input type="number" class="form-control" id="number" name="number">
                                    </div>
                                  
                                    <div class="form-group col-6">
                                        <label for="comp">Complemento:</label>
                                        <input type="text" class="form-control" id="comp" name="comp">
                                    </div>
                                  </div>

                                    <div class="form-group">
                                        <label for="cid">Cidade:</label>
                                        <input type="text" class="form-control" id="cid" name="cid" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="bai">Bairro:</label>
                                        <input type="text" class="form-control" id="bai" name="bai" required>
                                    </div>
                                    
                                </div>
                              </div>
                            </div>
                          
                            <div class="card">
                              <div class="card-header">
                                <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                    <i class="fas fa-building"></i> Características da Edificação:
                                </a>
                              </div>
                              <div id="collapseThree" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                  <div id="quest"></div>
                                </div>
                              </div>
                            </div>
                          
                          </div>                          

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm4()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="nextForm6()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                    </div>`;

    // Disable form submissions if there are invalid fields
    var blockQuest = `<div class="form-group">
                        <label for="ocup">*Ocupação:
                          <span class="badge badge-pill badge-danger style-bagde" data-toggle="modal" data-target="#myModal2">
                              ?
                          </span>
                        </label>
                        <select class="form-control" id="ocup">
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
                        <select class="form-control" id="sit">
                          <option> Selecione uma opção </option>
                          <option> Existente </option>
                          <option> Nova </option>
                          <option> Recente </option>
                        </select>
                      </div>
                      
                      <div class="form-group col-6">
                        <label for="floors">*Nº Pavimentos:</label>
                        <select class="form-control" id="floors" name="comboFloors">
                          
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
                        <select class="form-control" id="tipo">
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
                            <input type="number" class="form-control" id="lot" name="lot" required>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="form-group col-6">
                        <label for="tip">*Tipo:
                        </label>
                        <select class="form-control" id="tip">
                          <option> Selecione uma opção </option>
                          <option> Alvenaria </option>
                          <option> madeira </option>
                          <option> mista </option>
                          <option> metálica </option>
                        </select>
                      </div>

                      <div class="form-group col-6">
                        <label for="block">*Nº Blocos:</label>
                        <select class="form-control" id="block" name="comboBlock">
                          
                        </select>
                      </div>
                    </div>

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
                              <div id="modal3Text2" class="style-text-modal"></div><br>                       
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
    document.getElementById("blockForm5").innerHTML = blockForm5;
    document.getElementById("quest").innerHTML = blockQuest;
}

function previousForm4() {
    document.getElementById("blockForm4").style.display = "block";
    document.getElementById("blockForm4").style.position = "relative";
    document.getElementById("blockForm5").style.display = "none";
    document.getElementById("blockForm5").style.position = "relative";
    document.getElementById("blockProgress4").style.display = "block";
    document.getElementById("blockProgress5").style.display = "none";
}

function nextForm6() {
    document.getElementById("blockForm5").style.display = "none";
    document.getElementById("blockForm5").style.position = "relative";
    document.getElementById("blockForm6").style.display = "block";
    document.getElementById("blockProgress5").style.display = "none";
    document.getElementById("blockProgress6").style.display = "block";
}

function buscaCep() {
  window.open('http://www.buscacep.correios.com.br/sistemas/buscacep/', '_blank');
}
// Excecute functions
generateProgress5();
generateForm5();

