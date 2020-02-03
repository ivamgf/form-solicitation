// App Script
// Form5
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Imports
var imported = document.createElement('script');
imported.src = '/components/typeLog.js';
document.head.appendChild(imported);

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

function alertError() {
  
  var blockError = `<div class="alert alert-danger">
                      <strong>Erro!</strong> CEP Inválido! Digite Novamente.
                    </div>`;

  var blockTipLog = `<div class="alert alert-danger">
                      <strong>Atenção!</strong> Você precisa informar um tipo de logradouro!
                  </div>`;
  document.getElementById("error").innerHTML = blockError;
  document.getElementById("blockFrm5Alert1").innerHTML = blockTipLog;
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
                                      <label for="name">Nome:</label>
                                      <input type="text" class="form-control" id="name" placeholder="Digite o nome" name="nome" onblur="bindName2()" required>
                                  </div>
                                  <div class="form-group">
                                      <label for="fant">Nome Fantasia Empresa:</label>
                                      <input type="text" class="form-control" id="fant2" placeholder="Digite o nome fantasia" name="fant" onblur="bindFant2()">
                                  </div>
                                  <div class="form-group">
                                      <label for="re">RE:</label>
                                      <input type="number" class="form-control" id="re" placeholder="Digite a RE" name="re" onblur="bindRe()">
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
                                        <input type="text" class="form-control" id="cep" placeholder="Digite o CEP (Somente números)" name="cep" onblur="bindcep()" required>
                                        <div class="input-group-prepend">
                                          <button class="btn btn-outline-primary" type="button" onclick="buscaCep()">Pesquisar CEP</button>
                                        </div>                                      
                                      </div>
                                    </div>                              

                                    <div class="form-group col-6">
                                        
                                        <label for="typ">Tipo de Logradouro:</label>
                                        <select class="form-control" id="typLog" name="typLog" onclick="bindTipLog()">
                                          <option>Selecione um tipo de logradouro</option>
                                          <option>10ª Avenida</option> 
                                          <option>10ª Travessa</option> 
                                          <option>11ª Avenida</option>
                                          <option>11ª Travessa</option>
                                          <option>12ª Travessa</option>
                                          <option>13ª Travessa</option>
                                          <option>14ª Travessa</option>
                                          <option>15ª Travessa</option>
                                          <option>16ª Travessa</option>
                                          <option>17ª Travessa</option>
                                          <option>18ª Travessa</option>
                                          <option>19ª Travessa</option>
                                          <option>1ª Avenida</option>
                                          <option>1ª Ladeira</option>
                                          <option>1ª Paralela</option>
                                          <option>1ª Rua</option>
                                          <option>1ª Subida</option>
                                          <option>1ª Travessa</option>
                                          <option>1ª Travessa da Rodovia</option>
                                          <option>1ª Vila</option>
                                          <option>1º Alto</option>
                                          <option>1º Beco</option>
                                          <option>20ª Travessa</option>
                                          <option>21ª Travessa</option>
                                          <option>22ª Travessa</option>
                                          <option>26ª Travessa</option>
                                          <option>2ª Avenida</option>
                                          <option>2ª Ladeira</option>
                                          <option>2ª Paralela</option> 
                                          <option>2ª Rua</option>
                                          <option>2ª Subida</option>
                                          <option>2ª Travessa</option>
                                          <option>2ª Travessa da Rodovia</option>
                                          <option>2ª Vila</option>
                                          <option>2º Alto</option>
                                          <option>2º Beco</option>
                                          <option>3ª Avenida</option>
                                          <option>3ª Ladeira</option>
                                          <option>3ª Paralela</option> 
                                          <option>3ª Rua</option>
                                          <option>3ª Subida</option>
                                          <option>3ª Travessa</option>
                                          <option>3ª Vil</option>
                                          <option>3º Alto</option>
                                          <option>3º Beco</option>
                                          <option>4ª Avenida</option>
                                          <option>4ª Paralela</option>
                                          <option>4ª Rua</option>
                                          <option>4ª Subida</option>
                                          <option>4ª Travessa</option>
                                          <option>4ª Vila</option>
                                          <option>5ª Avenida</option>
                                          <option>5ª Rua</option>
                                          <option>5ª Subida</option>
                                          <option>5ª Travessa</option>
                                          <option>5ª Vila</option>
                                          <option>6ª Avenida</option>
                                          <option>6ª Rua</option>
                                          <option>6ª Subida</option>
                                          <option>6ª Travessa</option>
                                          <option>6ª Vila</option>
                                          <option>7ª Avenida</option>
                                          <option>7ª Travessa</option>
                                          <option>8ª Avenida</option>
                                          <option>8ª Travessa</option>
                                          <option>9ª Avenida</option>
                                          <option>9ª Travessa</option>
                                          <option>Acampamento</option>
                                          <option>Acesso</option>
                                          <option>Acesso Estadual</option>
                                          <option>Acesso Local</option>
                                          <option>Adro</option>
                                          <option>Aeroporto</option>
                                          <option>Alameda</option>
                                          <option>Alça de Acesso</option>
                                          <option>Alto</option>
                                          <option>Anel Viário</option>
                                          <option>Antiga Estação</option>
                                          <option>Antiga Estrada</option>
                                          <option>Área</option>
                                          <option>Área Especial</option>
                                          <option>Área Verde</option>
                                          <option>Artéria</option>
                                          <option>Atalho</option>
                                          <option>Avenida</option>
                                          <option>Avenida Contorno</option>
                                          <option>Avenida Marginal</option>
                                          <option>Avenida Marginal Direita</option>
                                          <option>Avenida Marginal Esquerda</option>
                                          <option>Avenida Marginal Norte</option>
                                          <option>Avenida Perimetral</option>
                                          <option>Baixa</option>
                                          <option>Balão</option>
                                          <option>Beco</option>
                                          <option>Beco 1</option>
                                          <option>Beco 2</option>
                                          <option>Beco 3</option>
                                          <option>Belvedere</option>
                                          <option>Bloco</option>
                                          <option>Blocos</option>
                                          <option>Bosque</option>
                                          <option>Boulevard</option>
                                          <option>Bulevar</option>
                                          <option>Buraco</option>
                                          <option>Cais</option>
                                          <option>Calçada</option>
                                          <option>Calçadão</option>
                                          <option>Caminho</option>
                                          <option>Caminho de Servidão</option>
                                          <option>Campo</option>
                                          <option>Campus</option>
                                          <option>Canal</option>
                                          <option>Chácara</option>
                                          <option>Ciclovia</option>
                                          <option>Circular</option>
                                          <option>Colina</option>
                                          <option>Colônia</option>
                                          <option>Complexo Viário</option>
                                          <option>Comunidade</option>
                                          <option>Condomínio</option>
                                          <option>Condomínio Residencial</option>
                                        </select> 
                                        
                                    </div>
                                  </div>
                                  
                                    <div class="form-group">
                                        <label for="log">Logradouro:</label>
                                        <input type="text" class="form-control" id="log" name="log" onchange="bindLog()" required>
                                    </div>

                                  <div class="row">
                                    <div class="form-group col-6">
                                        <label for="num">Número:</label>
                                        <input type="number" class="form-control" id="number" name="number" onblur="bindNum()">
                                    </div>
                                  
                                    <div class="form-group col-6">
                                        <label for="comp">Complemento:</label>
                                        <input type="text" class="form-control" id="comp" name="comp" onblur="bindCompl()">
                                    </div>
                                  </div>

                                    <div class="form-group">
                                        <label for="cid">Cidade:</label>
                                        <input type="text" class="form-control" id="cid" name="cid" onchange="bindCity()" required>
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
                                        <a class="page-link" href="#" onclick="clearForm5()">Limpar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm4()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" id="next5" href="#" onclick="validationForm5()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>           
                    </div>`;    

    // Handling variables
    document.getElementById("blockForm5").innerHTML = blockForm5;
}

// Variables

var name2 = "";
var fant2 = "";
var re = "";
var cep = "";
var tipLog = "";
var log = "";
var num = null;
var compl = "";
var city = "";
var block = "";

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
    bindLog();
    bindCity();
    bindBlock();    
    transferVar5();
}

function buscaCep() {
  window.open('http://www.buscacep.correios.com.br/sistemas/buscacep/', '_blank');
}

function cepMask() {
  $(document).ready(function(){
      $("#cep").mask("99999-999", { reverse : true});
  });
}

function validationForm5() {
  if(name2 !== "") {
    if(tipLog !== "") {
      nextForm5b();
    } else {
      document.getElementById("blockFrm5Alert1").style.display = "block";
    }    
  } else {
    document.getElementById("blockFrm4Alert1").style.display = "block";
  }
}

function bindName2() {
  name2 = document.getElementById("name").value;
  console.log("name2:", name2);
  document.getElementById("blockFrm4Alert1").style.display = "none";
}
function bindFant2() {
  fant2 = document.getElementById("fant2").value;
  console.log("Nome Fantasia:", fant2);
}
function bindRe() {
  re = document.getElementById("re").value;
  console.log("RE:", re);   
}
function bindcep() {
  cep = document.getElementById("cep").value;
  console.log("cep:", cep);
  $(document).ready(function(){
    apiCep();
  });
  document.getElementById("error").style.display = "none";  
}

function bindTipLog() {
  /*
  $(document).ready(function(){
    completType();
  });
  */
  tipLog = document.getElementById("typLog").value;
  console.log("Tipo Logradouro:", tipLog);
  document.getElementById("blockFrm5Alert1").style.display = "none";
}

function bindLog() {
  log = document.getElementById("log").value;
  console.log("Logradouro:", log);   
}
function bindNum() {
  num = document.getElementById("number").value;
  console.log("Número:", num);
}
function bindCompl() {
  compl = document.getElementById("comp").value;
  console.log("Complemento:", compl);
}
function bindCity() {
  city = document.getElementById("cid").value;
  console.log("Cidade:", city);   
}
function bindBlock() {
  block = document.getElementById("bai").value;
  console.log("Bairro:", block);   
}
function clearForm5() {
  document.getElementById("name").value = "";
  document.getElementById("fant2").value = "";
  document.getElementById("re").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("tiplog").value = "";
  document.getElementById("log").value = "";
  document.getElementById("number").value = "";
  document.getElementById("comp").value = "";
  document.getElementById("cid").value = "";
  document.getElementById("bai").value = "";
  document.getElementById("error").style.display = "none";
}
function transferVar5() {  
  response.push(name2); 
  response.push(fant2);
  response.push(re); 
  response.push(cep);
  response.push(tipLog); 
  response.push(log);
  response.push(num); 
  response.push(compl);
  response.push(city); 
  response.push(block);
  showresponse();
}

// Excecute functions
generateProgress5();
generateForm5();
cepMask();
alertError();
