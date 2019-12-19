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
                   
                          </div>                       
                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm4()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="nextForm5b()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>           
                    </div>`;    

    // Handling variables
    document.getElementById("blockForm5").innerHTML = blockForm5;
}

function previousForm4() {
    document.getElementById("blockForm4").style.display = "block";
    document.getElementById("blockForm4").style.position = "relative";
    document.getElementById("blockForm5").style.display = "none";
    document.getElementById("blockForm5").style.position = "relative";
    document.getElementById("blockProgress4").style.display = "block";
    document.getElementById("blockProgress5").style.display = "none";
}

function nextForm5b() {
    document.getElementById("blockForm5").style.display = "none";
    document.getElementById("blockForm5").style.position = "relative";
    document.getElementById("blockForm5b").style.display = "block";
    document.getElementById("blockProgress5").style.display = "none";
    document.getElementById("blockProgress5b").style.display = "block";
}

function buscaCep() {
  window.open('http://www.buscacep.correios.com.br/sistemas/buscacep/', '_blank');
}

function cepMask() {
  $(document).ready(function(){
      $("#cep").mask("99999-999", { reverse : true});
  });
}

// Excecute functions
generateProgress5();
generateForm5();
cepMask();
