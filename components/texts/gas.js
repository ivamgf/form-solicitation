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