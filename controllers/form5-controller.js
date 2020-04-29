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
                                      <label for="name">*Nome:</label>
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
                                    
                                <div class="form-check">
                                    <label class="form-check-label style-questions">
                                        <input id="endRes" type="checkbox" class="form-check-input" onclick="bindEndRes()">
                                        Endereço refere-se a residência do solicitante.
                                    </label>
                                </div><br>

                                <div class="form-check">
                                    <label class="form-check-label style-questions">
                                        <input id="endEsc" type="checkbox" class="form-check-input" onclick="bindEndEsc()">
                                        Endereço refere-se a ao escritório de contabilidade contratado.
                                    </label>
                                </div><br>

                                  <div class="row">
                                    <div class="col-6">
                                      <label for="cep">*CEP:</label>
                                      <div class="input-group mb-3">                                      
                                        <input type="text" class="form-control" id="cep" placeholder="Digite o CEP (Somente números)" name="cep" onblur="bindcep()" required>
                                        <div class="input-group-prepend">
                                          <button class="btn btn-outline-primary" type="button" onclick="buscaCep()">Pesquisar CEP</button>
                                        </div>                                      
                                      </div>
                                    </div>                              

                                    <div class="form-group col-6">
                                        
                                        <label for="typ">*Tipo de Logradouro:</label>
                                        <select class="form-control" id="typLog" name="typLog" onclick="bindTipLog()">
                                          <option value="0">Selecione um tipo de logradouro</option>                                          
                                          <option value="65">AREA</option>
                                          <option value="66">ACESSO</option>
                                          <option value="68">ACERTAR</option>
                                          <option value="70">AEROPORTO</option>
                                          <option value="71">ALAMEDA</option>
                                          <option value="75">ASSENTAMENTO</option>
                                          <option value="79">AVENIDA</option>
                                          <option value="83">BAIRRO</option>
                                          <option value="84">BALNEARIO</option>
                                          <option value="85">BARRA</option>
                                          <option value="86">BECO</option>
                                          <option value="91">RODOVIA FEDERAL</option>
                                          <option value="92">BOSQUE</option>
                                          <option value="98">CAMINHO</option>
                                          <option value="100">CENTRO</option>
                                          <option value="101">CHACARA</option>
                                          <option value="104">CIDADE</option>
                                          <option value="106">CONJUNTO</option>
                                          <option value="107">CONJUNTO HABITACIONAL</option>
                                          <option value="108">CONJUNTO RESIDENCIAL</option>
                                          <option value="109">CLINICA</option>
                                          <option value="112">CONDOMINIO</option>
                                          <option value="118">CONTORNO VIARIO</option>
                                          <option value="121">DISTRITO</option>
                                          <option value="126">ESTRADA</option>
                                          <option value="127">ESTACIONAMENTO</option>
                                          <option value="128">ESTRADA GERAL</option>
                                          <option value="130">ESTRADA ESTADUAL</option>
                                          <option value="139">FAZENDA</option>
                                          <option value="143">FORTE</option>
                                          <option value="147">ILHA</option>
                                          <option value="148">INTERIOR</option>
                                          <option value="149">JARDIM</option>
                                          <option value="151">LAGEADO</option>
                                          <option value="152">LATERAL</option>
                                          <option value="153">LADEIRA</option>
                                          <option value="155">LAGOA</option>
                                          <option value="156">LINHA</option>
                                          <option value="157">LOCALIDADE</option>
                                          <option value="158">LOTEAMENTO</option>
                                          <option value="159">LARGO</option>
                                          <option value="160">MARGEM</option>
                                          <option value="161">MARGEM DIREITA</option>
                                          <option value="163">MARGINAL</option>
                                          <option value="166">MORRO</option>
                                          <option value="168">MUNICIPIO</option>
                                          <option value="169">NUCLEO</option>
                                          <option value="173">PARTICULAR</option>
                                          <option value="174">PASSEIO</option>
                                          <option value="177">PRACA</option>
                                          <option value="182">PRAIA</option>
                                          <option value="184">PARQUE</option>
                                          <option value="185">PASSARELA</option>
                                          <option value="186">PASSAGEM</option>
                                          <option value="191">QUADRA</option>
                                          <option value="196">RAMAL</option>
                                          <option value="197">RDR</option>
                                          <option value="198">RECANTO</option>
                                          <option value="203">RODOVIA</option>
                                          <option value="205">ROTULA</option>
                                          <option value="208">RUA</option>
                                          <option value="212">SITIO</option>
                                          <option value="213">SERVIDAO</option>
                                          <option value="215">SERTAO</option>
                                          <option value="218">TERMINAL</option>
                                          <option value="219">TIFA</option>
                                          <option value="221">TRANSVERSAL</option>
                                          <option value="223">TREVO</option>
                                          <option value="225">TRAVESSA</option>
                                          <option value="228">VIA</option>
                                          <option value="231">VIA EXPRESSA</option>
                                          <option value="239">VILA</option>
                                          <option value="244">RODOVIA ESTADUAL</option>
                                          <option value="245">ACESSO NORTE</option>
                                        </select> 
                                        
                                    </div>
                                  </div>
                                  
                                    <div class="form-group">
                                        <label for="log">*Logradouro:</label>
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
                                      <label for="cities">*Cidade:</label>
                                      <select class="form-control" id="cities" onclick="bindCities()">
                                        <option> --- </option>
                                        <option value=" `+ id_city +` ">`+ nm_city +`</option>
                                      </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="bai">*Bairro:</label>
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
                    </div>
                    <br>
                    <p>*Campos Obrigatórios!</p>`;    

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
var endRes = "Não";
var checkedEndRes = "";
var endEsc = "Não";
var checkedEndEsc = "";
var id_city;
var nm_city;
var ID_CIDADE = null;
var NM_CIDADE = "";

function nmCity() {
  ID_CIDADE = id_city;
  NM_CIDADE = nm_city;  
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
    bindLog();
    bindCities();
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

function bindCities() {
  city = document.getElementById("cities").value;  
  console.log("Cidade:", city);
}

function bindEndRes() {
  checkedEndRes = document.getElementById("endRes").checked;
  if(checkedEndRes == true) {
    endRes = "Sim";
  } else {
    endRes = "Não";
  }
  console.log("Residencia do solicitante:", endRes);
}

function bindEndEsc() {
  checkedEndEsc = document.getElementById("endEsc").checked;
  if(checkedEndEsc == true) {
    endEsc = "Sim";
  } else {
    endEsc = "Não";
  }
  console.log("Escritório de contabilidade:", endEsc);
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
  nmCity();
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
  // Function codeCity

  // Request JQuery + Ajax
  $.ajax({
    type: "POST",
    url: "../classes/form-model.php",
    data:{
        sl_city: city
        },
        success: function (result) {
            $('#result1').html(result);
        },
        error: function (result) {
            $('#result1').html(result);
        }
  })
  // Function codeCity   
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
  response.push(endRes);
  response.push(endEsc);
  showresponse();
}

// Excecute functions
generateProgress5();
generateForm5();
cepMask();
alertError();
