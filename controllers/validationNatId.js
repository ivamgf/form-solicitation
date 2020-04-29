// App Script
// Validation NatId
// Author: Ivam Galvão Filho
// Date: 03/01/2020.

// Descriptions

// Imports

// Functions

// Validation CPF

function validnatId(natIdLenght) {
  if(natIdLenght == 12 || natIdLenght == 13 || natIdLenght > 14) {
    alert('Cpf inválido!');
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
  var Soma = 0;
  var Resto = 0;
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
      alert('Cpf Inválido!');
    } else {
      for (i=1; i<=9; i++) {
        Soma = Soma + parseInt(cpfCnpj.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
      } 
      if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
      } 
      if (Resto != parseInt(cpfCnpj.substring(9, 10)) ) {
        alert('Cpf Inválido!');
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
        alert('Cpf Inválido!');
      } else {
        // alert('Cpf Válido!');
      }
    }
}

// Validation CNPJ

function validCNPJ(cpfCnpj) {
     
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
    alert('CNPJ Inválido!');
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
      alert('CNPJ Inválido!');
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
      alert('CNPJ Inválido!');
    } else {
      // console.log(result);
    }          
  }  
}

// =====================================================================

// Validation CPF

function validnatId2(natIdLenght2) {
  if(natIdLenght2 == 12 || natIdLenght2 == 13 || natIdLenght2 > 14) {
    alert('Cpf inválido!');
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
  var Soma = 0;
  var Resto = 0;
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
      alert('Cpf Inválido!');
    } else {
      for (i=1; i<=9; i++) {
        Soma = Soma + parseInt(natId.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
      } 
      if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
      } 
      if (Resto != parseInt(natId.substring(9, 10)) ) {
        alert('Cpf Inválido!');
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
        alert('Cpf Inválido!');
      } else {
        // alert('Cpf Válido!');
      }
    }
}

// Validation CNPJ

function validCNPJ2(natId) {
     
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
    alert('CNPJ Inválido!');
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
      alert('CNPJ Inválido!');
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
      alert('CNPJ Inválido!');
    } else {
      console.log("CNPJ Válido!");
    }          
  }  
}