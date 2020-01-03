// Text situation

var text1 = `(Boates, Clubes noturnos em geral, Salões de Baile, Restaurantes dançantes, Bares dançantes, Clubes sociais e assemelhados, Circos, Auditórios ou salas de reunião com mais de 100m², Teatros, Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, Piscinas cobertas com arquibancadas e arenas em geral.)`;
var text2 = `aquela que já se encontrava edificada, acabada ou concluída na data de publicação (11/11/2013) da Lei no 16.157, de 07/11/2013.`;
var text3 = `aquela que ainda se encontrava em fase de projeto ou de construção na data de publicação (11/11/2013) da Lei no 16.157, de 07/11/2013, e a que vier a ser construída posteriormente.`;
var textA = `não obteve aprovação de projeto preventivo quando foi edificada pelo fato de a ocupação original e/ou a legislação vigente na época não exigir; ou `;
var textB = `embora anteriormente aprovada pelo Corpo de Bombeiros Militar, venha a enquadrar-se posteriormente numa das seguintes situações:`;
var c1 = `(1) aprovada para ocupação diversa da atual ou pretendida; ou`;
var c2 = `(2) desatualizada em relação às normas vigentes, mantendo ou modificando a ocupação original.`;

var situation = {
    title1: "Exemplos de ocupação/atividade considerada como reunião de público:",
    text1: text1,
    textLink1: "Conforme IN 001(Para acessar a norma clique aqui)",
    link1: "http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in",
    title2: "Edificação existente:",
    text2: text2,
    title3: "Edificação nova:",
    text3: text3,
    title4: "Edificação recente:",
    text4: "aquela que se enquadra nas seguintes situações:",
    sit: {
        a: textA,
        b: textB,
        c1: c1,
        c2: c2
    }
};

document.getElementById("modal2Title1").innerHTML = situation.title1;
document.getElementById("modal2Text1").innerHTML = situation.text1;
document.getElementById("modal2TextLink1").innerHTML = situation.textLink1;
document.getElementById("modal2Title2").innerHTML = situation.title2;
document.getElementById("modal2Text2").innerHTML = situation.text2;
document.getElementById("modal2Title3").innerHTML = situation.title3;
document.getElementById("modal2Text3").innerHTML = situation.text3;
document.getElementById("modal2Title4").innerHTML = situation.title4;
document.getElementById("modal2Text4").innerHTML = situation.text4;
document.getElementById("sit1").innerHTML = situation.sit.a;
document.getElementById("sit2").innerHTML = situation.sit.b;
document.getElementById("sit3").innerHTML = situation.sit.c1;
document.getElementById("sit4").innerHTML = situation.sit.c2;