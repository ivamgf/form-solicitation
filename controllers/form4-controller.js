// App Script
// Form4
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Imports
var imported = document.createElement('script');
imported.src = '/controllers/form3-controller.js';
document.head.appendChild(imported); 

// Functions
function generateProgress4() {
    // Variables
    var progressBar4 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-done">Empresa</li>
                            <li class="progtrckr-todo">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress4").innerHTML = progressBar4;
}

function generateAlerts2() {
    var alertName = `<div class="alert alert-danger style-card-alert1">
                        <strong>Atenção!</strong> Você precisa informar um nome!
                    </div>`;
    
    var alertPhone = `<div class="alert alert-danger style-card-alert3">
                        <strong>Atenção!</strong> Você precisa informar um telefone ou celular válido!
                    </div>`;

    var alertNatId2 = `<div class="alert alert-danger style-card-alert1">
                        <strong>Atenção!</strong> Você precisa informar um CPF ou CNPJ válidos!
                    </div>`;

    var alertEmail2 = `<div class="alert alert-danger style-card-alert6">
                    <strong>Atenção!</strong> Você precisa informar um E-mail válido!
                </div>`;

    // Handling variables
    document.getElementById("blockFrm4Alert1").innerHTML = alertName;
    document.getElementById("blockFrm4Alert2").innerHTML = alertPhone;
    document.getElementById("blockFrm4Alert3").innerHTML = alertNatId2;
    document.getElementById("blockFrm4Alert4").innerHTML = alertEmail2;
}

function generateForm4() {
    var blockForm4 =   `<div class="card" id="form4">
                            <div class="card-head style-card-head"><h4>Proprietário ou Responsável pela Empresa</h4></div>
                            <div class="card-body">                                
                            
                            <label class="style-alert-form"><i class="fas fa-exclamation-triangle"></i> Favor preencher todos os campos!</label><br>

                            <div class="form-group">
                                <label for="name">Nome:</label>
                                <input type="text" class="form-control" id="nome" placeholder="Digite o nome" name="nome" onblur="bindName()" required>
                            </div>
                            <div class="form-group">
                                <label for="fone">Telefone:</label>
                                <input type="tel" class="form-control" id="fone2" placeholder="Digite o telefone com DDD (Somente números)" name="fone" onblur="bindPhoneAdm()" required>
                            </div>
                            <div class="form-group">
                                <label for="natId">CPF/CNPJ do Proprietário:</label>
                                <input type="text" class="form-control" id="natId" placeholder="Digite o cpf/cnpj (Somente números)" name="natId" onblur="bindNatId()" required>
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="text" class="form-control" id="emailAdm" placeholder="Digite o E-mail" name="email" onchange="bindEmailAdm()" required>
                            </div>                            

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="clearForm1()">Limpar</a>
                                    </li>    
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm3()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" id="next4" href="#" onclick="validationForm4()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                    </div>`;

    // Disable form submissions if there are invalid fields
    document.getElementById("blockForm4").innerHTML = blockForm4;
}

// Variables

var name = "";
var phoneAdm = "";
var natId = "";
var emailAdm = "";
var natIdLenght2 = null;
var statusNatId2 = false;

function validationForm4(natIdLenght2) {
    if(name !== "") {
        if(phoneAdm !== "") {
            if(natId !== "" && statusNatId2 == true) {
                nextForm5();                                    
            } else {
                document.getElementById("blockFrm4Alert3").style.display = "block";
                document.getElementById("natId").value = "";
                $(document).ready(function(){
                    $("#natId").unmask("999.999.999-99");
                    $("#form4").load("form4-controller.js #natId");
                });
            }
        } else {
            document.getElementById("blockFrm4Alert2").style.display = "block";
        }
    } else {
        document.getElementById("blockFrm4Alert1").style.display = "block";
    }
}

function previousForm3() {
    document.getElementById("blockForm3").style.display = "block";
    document.getElementById("blockForm3").style.position = "relative";
    document.getElementById("blockForm4").style.display = "none";
    document.getElementById("blockForm4").style.position = "relative";
    document.getElementById("blockProgress3").style.display = "block";
    document.getElementById("blockProgress4").style.display = "none";
}

function nextForm5() {
    document.getElementById("blockForm4").style.display = "none";
    document.getElementById("blockForm4").style.position = "relative";
    document.getElementById("blockForm5").style.display = "block";
    document.getElementById("blockProgress4").style.display = "none";
    document.getElementById("blockProgress5").style.display = "block";
    document.getElementById("blockFrm4Alert3").style.display = "none";
    transferVar4();    
}

function phoneMask4() {
    var typePhone2 = phoneAdm.length;
    if(typePhone2 < 10 || typePhone2 > 11) {
        alert("Favor digitar um número de telefone válido!");
    } else {
        if(typePhone2 == 10) {
            $(document).ready(function(){
                $("#fone2").mask("(99) 9999-9999");
            });
        } else {
            $(document).ready(function(){
                $("#fone2").mask("(99) 9 9999-9999");
            });
        }
    }
}

function cpfMask2() {
    console.log(natIdLenght2);
    $(document).ready(function(){
        $("#natId").mask("999.999.999-99");
    });
}

function cnpjMask2() {
    console.log(natIdLenght2);
    $(document).ready(function(){
        $("#natId").mask("99.999.999/9999-99");
    });
}

function bindName() {
    name = document.getElementById("nome").value;
    console.log("name:", name);
    document.getElementById("blockFrm4Alert1").style.display = "none";
}
function bindPhoneAdm() {
    phoneAdm = document.getElementById("fone2").value;
    console.log("phoneAdm:", phoneAdm);    
    phoneMask4();
    document.getElementById("blockFrm4Alert2").style.display = "none";    
}
function bindNatId() {
    natId = document.getElementById("natId").value;
    console.log("natId:", natId);
    natIdLenght2 = natId.length;
    if(natIdLenght2 < 11 || natIdLenght2 == 12 || natIdLenght2 == 13 || natIdLenght2 > 14) {
        document.getElementById("blockFrm4Alert3").style.display = "block";
    }
    document.getElementById("blockFrm4Alert3").style.display = "none";
    validnatId2(natIdLenght2);   
}
function bindEmailAdm() {
    emailAdm = document.getElementById("emailAdm").value;
    console.log("emailAdm:", emailAdm);
    if(emailAdm.length = 0) {
        document.getElementById("blockFrm4Alert4").style.display = "block";  
    }
    document.getElementById("blockFrm4Alert4").style.display = "none";
}
function clearForm1() {
    document.getElementById("nome").value = "";
    document.getElementById("fone2").value = "";
    document.getElementById("natId").value = "";
    document.getElementById("emailAdm").value = "";
}
function transferVar4() {
    natId = natId.replace(/[^0-9]+/g,'');
    response.push(name); 
    response.push(phoneAdm);
    response.push(natId); 
    response.push(emailAdm);
    showresponse();    
}

// ====================================================================================

// Validation CPF

function validnatId2(natIdLenght2) {
    if(natIdLenght2 == 12 || natIdLenght2 == 13 || natIdLenght2 > 14) {
        statusNatId2 = false;
        document.getElementById("blockFrm4Alert3").style.display = "block";
        document.getElementById("natId").value = "";
        $(document).ready(function(){
            $("#natId").unmask("999.999.999-99");
            $("#form4").load("form4-controller.js #natId");
        });        
    } else {
      if(natIdLenght2 == 11) {
        TestaCPF2(natId);
        cpfMask2();
      } else {
        if(natIdLenght2 == 14) {
          validCNPJ2(natId);
          cnpjMask2();
        }
      }
    }
  }
  
  function TestaCPF2(natId) {
    $(document).ready(function(){
        $("#form4").load("form4-controller.js #natId");
    });
    var Soma = 0;
    var Resto;
    if ((this.natId === '00000000000') ||
        (this.natId === '11111111111') ||
        (this.natId === '22222222222') ||
        (this.natId === '33333333333') ||
        (this.natId === '44444444444') ||
        (this.natId === '55555555555') ||
        (this.natId === '66666666666') ||
        (this.natId === '77777777777') ||
        (this.natId === '88888888888') ||
        (this.natId === '99999999999')) {
        document.getElementById("blockFrm4Alert3").style.display = "block";
        document.getElementById("natId").value = "";
        $(document).ready(function(){
            $("#natId").unmask("999.999.999-99");
            $("#form4").load("form4-controller.js #natId");
        });
        statusNatId2 = false;
      } else {
        for (i=1; i<=9; i++) {
          Soma = Soma + parseInt(natId.substring(i-1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
        } 
        if ((Resto == 10) || (Resto == 11)) {
          Resto = 0;
        } 
        if (Resto != parseInt(natId.substring(9, 10)) ) {
            statusNatId2 = false;
            document.getElementById("blockFrm4Alert3").style.display = "block";
            document.getElementById("natId").value = "";
            $(document).ready(function(){
                $("#natId").unmask("999.999.999-99");
                $("#form4").load("form4-controller.js #natId");
            });
        } else {
            statusNatId = true;
        }
        Soma = 0;
        for (i = 1; i <= 10; i++) {
          Soma = Soma + parseInt(natId.substring(i-1, i)) * (12 - i);
          Resto = (Soma * 10) % 11;
        }      
       
        if ((Resto == 10) || (Resto == 11)) {
          Resto = 0;
        } 
        if (Resto != parseInt(natId.substring(10, 11) ) ) {
            statusNatId2 = false;
            document.getElementById("blockFrm4Alert3").style.display = "block";
            document.getElementById("natId").value = "";
            $(document).ready(function(){
                $("#natId").unmask("999.999.999-99");
                $("#form4").load("form4-controller.js #natId");
            });
        } else {
            statusNatId2 = true;
        }
      }
  }
  
  // Validation CNPJ
  
  function validCNPJ2(natId) {
    $(document).ready(function(){
        $("#form4").load("form4-controller.js #natId");
    });  
    // List CNPJs invalids
    if (natId == "00000000000000" || 
        natId == "11111111111111" || 
        natId == "22222222222222" || 
        natId == "33333333333333" || 
        natId == "44444444444444" || 
        natId == "55555555555555" || 
        natId == "66666666666666" || 
        natId == "77777777777777" || 
        natId == "88888888888888" || 
        natId == "99999999999999") {
        statusNatId2 = false;
        document.getElementById("blockFrm4Alert3").style.display = "block";
        document.getElementById("natId").value = "";
        $(document).ready(function(){
            $("#natId").unmask("99.999.999/9999-99");
            $("#form4").load("form4-controller.js #natId");
        });
    } else {
      // Valid DVs
      size = natId.length - 2
      numbers = natId.substring(0,size);
      digit = natId.substring(size);
      sum = 0;
      pos = size - 7;
  
      for (i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digit.charAt(0)) {
        statusNatId2 = false;
        document.getElementById("blockFrm4Alert3").style.display = "block";
        document.getElementById("natId").value = "";
        $(document).ready(function(){
            $("#natId").unmask("99.999.999/9999-99");
            $("#form4").load("form4-controller.js #natId");
        });
      } else {
        statusNatId2 = true;
      }
  
      size = size + 1;
      numbers = natId.substring(0,size);
      sum = 0;
      pos = size - 7;
      for (i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digit.charAt(1)) {
        statusNatId2 = false;
        document.getElementById("blockFrm4Alert3").style.display = "block";
        document.getElementById("natId").value = "";
        $(document).ready(function(){
            $("#natId").unmask("99.999.999/9999-99");
            $("#form4").load("form4-controller.js #natId");
        });
      } else {
        statusNatId2 = true;
      }          
    }  
  }

// Block Paste

$(document).ready(function() {

    $("#natId").bind('paste', function(e) {
        e.preventDefault();
    });

    $("#fone2").bind('paste', function(e) {
        e.preventDefault();
    });

});

// Excecute functions
generateProgress4();
generateForm4();
generateAlerts2();
