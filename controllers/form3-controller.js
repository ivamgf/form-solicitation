// App Script
// Form3
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Imports
/*
var imported = document.createElement('script');
imported.src = '/controllers/validationNatId.js';
document.head.appendChild(imported);
*/
// Functions
function generateProgress3() {
    // Variables
    var progressBar3 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-todo">Empresa</li>
                            <li class="progtrckr-todo">Proprietário</li>
                            <li class="progtrckr-todo">Edificação</li>
                            <li class="progtrckr-todo">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress3").innerHTML = progressBar3;
}

function generateAlerts() {
    var alertNatId = `<div class="alert alert-danger style-card-alert1">
                        <strong>Atenção!</strong> Você precisa informar um CPF ou CNPJ válidos!
                    </div>`;
    
    var alertFant = `<div class="alert alert-danger style-card-alert2">
                        <strong>Atenção!</strong> Você precisa informar um nome fantasia!
                    </div>`;

    var alertTel = `<div class="alert alert-danger style-card-alert3">
                        <strong>Atenção!</strong> Você precisa informar um telefone ou celular válido!
                    </div>`;

    var alertCorpName = `<div class="alert alert-danger style-card-alert4">
                            <strong>Atenção!</strong> Você precisa informar uma razão social!
                        </div>`;

    var alertContact = `<div class="alert alert-danger style-card-alert5">
                            <strong>Atenção!</strong> Você precisa informar um contato!
                        </div>`;

    var alertEmail = `<div class="alert alert-danger style-card-alert6">
                            <strong>Atenção!</strong> Você precisa informar um E-mail válido!
                        </div>`;

    // Handling variables
    document.getElementById("blockAlert1").innerHTML = alertNatId;
    document.getElementById("blockAlert2").innerHTML = alertFant;
    document.getElementById("blockAlert3").innerHTML = alertTel;
    document.getElementById("blockAlert4").innerHTML = alertCorpName;
    document.getElementById("blockAlert5").innerHTML = alertContact;
    document.getElementById("blockAlert6").innerHTML = alertEmail;
}

function generateForm3() {
    var blockForm3 =   `<div class="card" id="form3">
                            <div class="card-head style-card-head"><h4>Informações Sobre a Empresa</h4></div>
                            <div class="card-body">                                
                            
                            <label class="style-alert-form"><i class="fas fa-exclamation-triangle"></i> Favor preencher todos os campos!</label><br>

                            <div class="form-group" id="natIdGroup">
                                <label for="cpfcnpj">CPF/CNPJ da Empresa:</label>
                                <input type="text" class="form-control" id="cpfcnpj" placeholder="Digite o cpf/cnpj (Somente números)" name="cpfcnpj" onblur="bindCpfCnpj()" required>
                            </div>
                            <div class="form-group">
                                <label for="fantasia">Nome Fantasia Empresa:</label>
                                <input type="text" class="form-control" id="fant" placeholder="Digite o nome fantasia" name="fant" onblur="bindNameFant()" required>
                            </div>
                            <div class="form-group">
                                <label for="fone">Telefone:</label>
                                <input type="tel" class="form-control" id="fone" max="11" placeholder="Digite o telefone com DDD (Somente números)" name="fone" onblur="bindPhone()" required>
                            </div>
                            <div class="form-group">
                                <label for="razao">Razão Social:</label>
                                <input type="text" class="form-control" id="razao" placeholder="Digite a razão social" name="razao" onblur="bindCorporate()" required>
                            </div>
                            <div class="form-group">
                                <label for="contato">Nome Contato:</label>
                                <input type="text" class="form-control" id="contato" placeholder="Digite o nome de contato" name="contato" onblur="bindNameCont()" required>
                            </div>
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="text" class="form-control" id="email" placeholder="Digite o E-mail" name="email" onchange="bindEmail()" required>
                            </div>                            

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="clearForm3()">Limpar</a>
                                    </li>    
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm2()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" id="next3" href="#" onclick="validationForm3()">Avançar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                    </div>`;

    // Disable form submissions if there are innatIdGroupalid fields

    // Handling variables
    document.getElementById("blockForm3").innerHTML = blockForm3;
}

// Variables

var cpfCnpj = "";
var nameFant = "";
var phone = "";
var corporateName = "";
var nameCont = "";
var email = "";
var natIdLenght = null;
var statusNatId = false;

function validationForm3(natIdLenght) {    
    if(cpfCnpj !== "" && statusNatId == true) {
        if(nameFant !== "") {
            if(phone !== "") {
                if(corporateName !== "") {
                    if(nameCont !== "") {
                        nextForm4();                       
                    } else {
                        document.getElementById("blockAlert5").style.display = "block";
                    }
                } else {
                    document.getElementById("blockAlert4").style.display = "block";
                }
            } else {
                document.getElementById("blockAlert3").style.display = "block"; 
            }
        } else {
            document.getElementById("blockAlert2").style.display = "block";
        }
    } else {
        document.getElementById("blockAlert1").style.display = "block";
        document.getElementById("cpfcnpj").value = "";
        $(document).ready(function(){
            $("#cpfcnpj").unmask("999.999.999-99");
            $("#form3").load("form3-controller.js #cpfcnpj");
        });                
    }
}

function previousForm2() {
    document.getElementById("blockForm2").style.display = "block";
    document.getElementById("blockForm2").style.position = "relative";
    document.getElementById("blockForm3").style.display = "none";
    document.getElementById("blockForm3").style.position = "relative";
    document.getElementById("blockProgress2").style.display = "block";
    document.getElementById("blockProgress3").style.display = "none";
}

function nextForm4() {
    document.getElementById("blockForm3").style.display = "none";
    document.getElementById("blockForm3").style.position = "relative";
    document.getElementById("blockForm4").style.display = "block";
    document.getElementById("blockProgress3").style.display = "none";
    document.getElementById("blockProgress4").style.display = "block";
    document.getElementById("blockAlert1").style.display = "none";        
    transferVar3();
}

function phoneMask3() {
    var typePhone = phone.length;
    if(typePhone < 10 || typePhone > 11) {
        alert("Favor digitar um número de telefone válido!");
    } else {
        if(typePhone == 10) {
            $(document).ready(function(){
                $("#fone").mask("(99) 9999-9999");
            });
        } else {
            $(document).ready(function(){
                $("#fone").mask("(99) 9 9999-9999");
            });
        }
    }    
}

function cpfMask() {
    console.log(natIdLenght);
    $(document).ready(function(){
        $("#cpfcnpj").mask("999.999.999-99");
    });
}

function cnpjMask() {
    console.log(natIdLenght);
    $(document).ready(function(){
        $("#cpfcnpj").mask("99.999.999/9999-99");
    });
}

function bindCpfCnpj() {
    cpfCnpj = document.getElementById("cpfcnpj").value;
    console.log("cpfCnpj:", cpfCnpj);
    natIdLenght = cpfCnpj.length;
    if(natIdLenght < 11 || natIdLenght == 12 || natIdLenght == 13 || natIdLenght > 14) {
        document.getElementById("blockAlert1").style.display = "block";
    }
    document.getElementById("blockAlert1").style.display = "none";
    validnatId(natIdLenght);    
}
function transferVar3() {
    cpfCnpj = cpfCnpj.replace(/[^0-9]+/g,'');
    var sl_natId = cpfCnpj;
    var sl_nameFant = nameFant;
    var sl_phone = phone;
    var sl_corporateName = corporateName;
    var sl_nameCont = nameCont;
    var sl_email = email;     
        $.ajax({
            type: "POST",
            url: "../classes/request3.php",
            data:{
                sl_natId: sl_natId,
                sl_nameFant: sl_nameFant,
                sl_phone: sl_phone,
                sl_corporateName: sl_corporateName,
                sl_nameCont: sl_nameCont,
                sl_email: sl_email
                },
                success: function (result) {
                    $('#result3').html(result);
                },
                error: function (result) {
                    $('#result3').html(result);
                }              
        });
   
}
function bindNameFant() {
    nameFant = document.getElementById("fant").value;
    console.log("nameFant:", nameFant);
    document.getElementById("blockAlert2").style.display = "none";
}
function bindPhone() {
    phone = document.getElementById("fone").value;
    console.log("phone:", phone);
    phoneMask3();
    document.getElementById("blockAlert3").style.display = "none";
}
function bindCorporate() {
    corporateName = document.getElementById("razao").value;
    console.log("corporateName:", corporateName);
    document.getElementById("blockAlert4").style.display = "none";
}
function bindNameCont() {
    nameCont = document.getElementById("contato").value;
    console.log("nameCont:", nameCont);
    document.getElementById("blockAlert5").style.display = "none";
}
function bindEmail() {
    email = document.getElementById("email").value;
    console.log("email:", email);
    document.getElementById("blockAlert6").style.display = "none";
}

function clearForm3() {
    document.getElementById("cpfcnpj").value = "";
    document.getElementById("fant").value = "";
    document.getElementById("fone").value = "";
    document.getElementById("razao").value = "";
    document.getElementById("contato").value = "";
    document.getElementById("email").value = "";
}

// Validation CPF

function validnatId(natIdLenght) {
    if(natIdLenght == 12 || natIdLenght == 13 || natIdLenght > 14) {
        statusNatId = false;
        document.getElementById("blockAlert1").style.display = "block";
        document.getElementById("cpfcnpj").value = "";
        $(document).ready(function(){
            $("#cpfcnpj").unmask("999.999.999-99");
            $("#form3").load("form3-controller.js #cpfcnpj");
        });
    } else {
      if(natIdLenght == 11) {
        TestaCPF(cpfCnpj);
        cpfMask();
      } else {
        if(natIdLenght == 14) {
          validCNPJ(cpfCnpj);
          cnpjMask();
        }
      }
    }
  }
  
  function TestaCPF(cpfCnpj) {
    $(document).ready(function(){
        $("#form3").load("form3-controller.js #cpfcnpj");
    });
    var Soma = 0;
    var Resto;
    if ((this.cpfCnpj === '00000000000') ||
        (this.cpfCnpj === '11111111111') ||
        (this.cpfCnpj === '22222222222') ||
        (this.cpfCnpj === '33333333333') ||
        (this.cpfCnpj === '44444444444') ||
        (this.cpfCnpj === '55555555555') ||
        (this.cpfCnpj === '66666666666') ||
        (this.cpfCnpj === '77777777777') ||
        (this.cpfCnpj === '88888888888') ||
        (this.cpfCnpj === '99999999999')) {
        document.getElementById("blockAlert1").style.display = "block";
        document.getElementById("cpfcnpj").value = "";
        $(document).ready(function(){
            $("#cpfcnpj").unmask("999.999.999-99");
            $("#form3").load("form3-controller.js #cpfcnpj");
        });
        statusNatId = false;
      } else {
        for (i=1; i<=9; i++) {
          Soma = Soma + parseInt(cpfCnpj.substring(i-1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
        } 
        if ((Resto == 10) || (Resto == 11)) {
          Resto = 0;
        } 
        if (Resto != parseInt(cpfCnpj.substring(9, 10)) ) {
            statusNatId = false;
            document.getElementById("blockAlert1").style.display = "block";
            document.getElementById("cpfcnpj").value = "";
            $(document).ready(function(){
                $("#cpfcnpj").unmask("999.999.999-99");
                $("#form3").load("form3-controller.js #cpfcnpj");
            });
        } else {
            statusNatId = true;
        }
        Soma = 0;
        for (i = 1; i <= 10; i++) {
          Soma = Soma + parseInt(cpfCnpj.substring(i-1, i)) * (12 - i);
          Resto = (Soma * 10) % 11;
        }      
       
        if ((Resto == 10) || (Resto == 11)) {
          Resto = 0;
        } 
        if (Resto != parseInt(cpfCnpj.substring(10, 11) ) ) {
            statusNatId = false;
            document.getElementById("blockAlert1").style.display = "block";
            document.getElementById("cpfcnpj").value = "";
            $(document).ready(function(){
                $("#cpfcnpj").unmask("999.999.999-99");
                $("#form3").load("form3-controller.js #cpfcnpj");
            });
        } else {
            statusNatId = true;
        }
      }
  }
  
  // Validation CNPJ
  
  function validCNPJ(cpfCnpj) {
    $(document).ready(function(){
        $("#form3").load("form3-controller.js #cpfcnpj");
    });  
    // List CNPJs invalids
    if (cpfCnpj == "00000000000000" || 
        cpfCnpj == "11111111111111" || 
        cpfCnpj == "22222222222222" || 
        cpfCnpj == "33333333333333" || 
        cpfCnpj == "44444444444444" || 
        cpfCnpj == "55555555555555" || 
        cpfCnpj == "66666666666666" || 
        cpfCnpj == "77777777777777" || 
        cpfCnpj == "88888888888888" || 
        cpfCnpj == "99999999999999") {
        statusNatId = false;
        document.getElementById("blockAlert1").style.display = "block";
        document.getElementById("cpfcnpj").value = "";
        $(document).ready(function(){
            $("#cpfcnpj").unmask("99.999.999/9999-99");
            $("#form3").load("form3-controller.js #cpfcnpj");
        });
    } else {
      // Valid DVs
      size = cpfCnpj.length - 2
      numbers = cpfCnpj.substring(0,size);
      digit = cpfCnpj.substring(size);
      sum = 0;
      pos = size - 7;
  
      for (i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digit.charAt(0)) {
        statusNatId = false;
        document.getElementById("blockAlert1").style.display = "block";
        document.getElementById("cpfcnpj").value = "";
        $(document).ready(function(){
            $("#cpfcnpj").unmask("99.999.999/9999-99");
            $("#form3").load("form3-controller.js #cpfcnpj");
        });
      } else {
        statusNatId2 == true;
      }
  
      size = size + 1;
      numbers = cpfCnpj.substring(0,size);
      sum = 0;
      pos = size - 7;
      for (i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2)
              pos = 9;
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result != digit.charAt(1)) {
        statusNatId = false;
        document.getElementById("blockAlert1").style.display = "block";
        document.getElementById("cpfcnpj").value = "";
        $(document).ready(function(){
            $("#cpfcnpj").unmask("99.999.999/9999-99");
            $("#form3").load("form3-controller.js #cpfcnpj");
        });
      } else {
        statusNatId = true;
      }          
    }  
  }
  
  // =====================================================================

// Block Paste

$(document).ready(function() {

    $("#cpfcnpj").bind('paste', function(e) {
        e.preventDefault();
    });

    $("#fone").bind('paste', function(e) {
        e.preventDefault();
    });

});

// Excecute functions
generateProgress3();
generateForm3();
generateAlerts();
