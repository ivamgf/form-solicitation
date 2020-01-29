// TypeLog

// Imports

// Variables

var ocup;
var typeLogradouro;
var typLogList;
var optionsTyp = [];
var typeArray = [];
var typeItem = "";

function completType() {

    typeLogradouro = {
        1: "10ª Avenida", 2: "10ª Travessa", 3: "11ª Avenida", 4: "11ª Travessa", 5: "12ª Travessa",
        6: "13ª Travessa", 7: "14ª Travessa", 8: "15ª Travessa", 9: "16ª Travessa", 10: "17ª Travessa",
        11: "18ª Travessa", 12: "19ª Travessa", 13: "1ª Avenida", 14: "1ª Ladeira", 15: "1ª Paralela",
        16: "1ª Rua", 17: "1ª Subida", 18: "1ª Travessa", 19: "1ª Travessa da Rodovia", 20: "1ª Vila",
        21: "1º Alto", 22: "1º Beco", 23: "20ª Travessa", 24: "21ª Travessa", 25: "22ª Travessa",
        26: "26ª Travessa", 27: "2ª Avenida", 28: "2ª Ladeira", 29: "2ª Paralela", 30: "2ª Rua",
        31: "2ª Subida", 32: "2ª Travessa", 33: "2ª Travessa da Rodovia", 34: "2ª Vila", 35: "2º Alto",
        36: "2º Beco", 37: "3ª Avenida", 38: "3ª Ladeira", 39: "3ª Paralela", 40: "3ª Rua",
        41: "3ª Subida", 42: "3ª Travessa", 43: "3ª Vila", 44: "3º Alto", 45: "3º Beco",
        46: "4ª Avenida", 47: "4ª Paralela", 48: "4ª Rua", 49: "4ª Subida", 50: "4ª Travessa",
        51: "4ª Vila", 52: "5ª Avenida", 53: "5ª Rua", 54: "5ª Subida", 55: "5ª Travessa",
        56: "5ª Vila", 57: "6ª Avenida", 58: "6ª Rua", 59: "6ª Subida", 60: "6ª Travessa",
        61: "6ª Vila", 62: "7ª Avenida", 63: "7ª Travessa", 64: "8ª Avenida", 65: "8ª Travessa",
        66: "9ª Avenida", 67: "9ª Travessa", 68: "Acampamento", 69: "Acesso", 70: "Acesso Estadual",
        71: "Acesso Local", 72: "Adro", 73: "Aeroporto", 74: "Alameda", 75: "Alça de Acesso",
        76: "Alto", 77: "Anel Viário", 78: "Antiga Estação", 79: "Antiga Estrada", 80: "Área",
        81: "Área Especial", 82: "Área Verde", 83: "Artéria", 84: "Atalho", 85: "Avenida",
        86: "Avenida Contorno", 87: "Avenida Marginal", 88: "Avenida Marginal Direita", 89: "Avenida Marginal Esquerda",
        90: "Avenida Marginal Norte", 91: "Avenida Perimetral", 92: "Baixa", 93: "Balão", 94: "Beco", 95: "Beco 1",
        96: "Beco 2", 97: "Beco 3", 98: "Belvedere", 99: "Bloco", 100: "Blocos",
        101: "Bosque", 102: "Boulevard", 103: "Bulevar", 104: "Buraco", 105: "Cais",
        106: "Calçada", 107: "Calçadão", 108: "Caminho", 109: "Caminho de Servidão", 110: "Campo",
        111: "Campus", 112: "Canal", 113: "Chácara", 114: "Ciclovia", 115: "Circular",
        116: "Colina", 117: "Colônia", 118: "Complexo Viário", 119: "Comunidade", 120: "Condomínio", 
        121: "Condomínio Residencial"
    }
}
