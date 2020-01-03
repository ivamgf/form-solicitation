// Text ocupation

var text1 = `(Boates, Clubes noturnos em geral, Salões de Baile, Restaurantes dançantes, Bares dançantes, Clubes sociais e assemelhados, Circos, Auditórios ou salas de reunião com mais de 100m², Teatros, Cinemas, Óperas, Templos religiosos, Estádios, Ginásios, Piscinas cobertas com arquibancadas e arenas em geral.)`;

var text2 = `São os auditórios ou salas de reunião com mais de 100m2, boates, clubes noturnos em geral, salões de baile, restaurantes dançantes, bares dançantes, clubes sociais, circos, teatros, cinemas, óperas, templos religiosos sem assentos (cadeira, banco ou poltrona), estádios, ginásios e piscinas cobertas com arquibancadas, arenas em geral.`;

var text3 = `Auditórios ou salas de reunião com até 100m2, restaurantes, lanchonetes, bares, cafés, refeitórios, cantinas, templos religiosos com assentos (cadeiras, bancos ou poltrona), museus, cartórios, piscinas cobertas sem arquibancadas, galerias de arte, bibliotecas, rodoviárias, parques de diversões, aeroportos, aeroclubes).`;

var text6 = `Edificações destinadas a desenvolver atividades os pensionatos, asilos, conventos, internatos e congêneres.`;

var text8 = `São os imóveis destinadas a desenvolver as atividades como: mercantil, comercial em geral, lojas, mercados, escritórios, galerias comerciais, supermercados e congêneres.`;

var text9 = `Empreendimento constituído por um conjunto planejado de lojas, operando de forma integrada, sob administração única e centralizada; composto de lojas destinadas à exploração de ramos diversificados ou especializados de comércio e prestação de serviços (Assoc. Bras. de Shopping Centers ABRASCE).`;

var text10 = `Edificações que executam um conjunto de operações com a finalidade de transformar uma matéria-prima em outra matéria-prima ou produto final.`;

var text12 = `Imóveis utilizados com atividade de quartéis, secretarias, tribunais, delegacias, consulados e outros.`;

var text13 = `São as escolas de ensino fundamental, médio ou superior, creches, jardins de infância, maternal, cursos supletivo, cursos pré-vestibulares e congêneres.`;

var text14 = `São as escolas de artes, artesanatos, profissionalizantes, academias de ginásticas, escolas de idiomas, escolas de músicas e outros.`;

var text15 = `Hospital, laboratório, unidades de pronto atendimento, clínica médica e congêneres quando houver internação ou ocorrer, mesmo que por breve período, a restrição de mobilidade do paciente (procedimentos como anestesia, sedação ou que impossibilite, ainda que temporária, a saída por conta própria a qualquer tempo)`;

var text16 = `Hospital, laboratório, unidades de pronto atendimento, clínica médica e congêneres quando não houver internação ou não ocorrer a restrição de mobilidade do paciente.`;

var text17 = `São os edifícios garagem, garagens em geral, hangares, marinas e congêneres.`;

var text18 = `Postos de combustíveis em geral, inclusive aqueles que realizar reabastecimento de GNV.`;

var text19 = `São as edificações destinadas ao armazenamento de recipientes transportáveis de gás liquefeito de petróleo (GLP) (IN 29).`;

var text20 = `Imóveis utilizados como galpões, centros de distribuição, centro atacadista, entre outros.`;

var text21 = `São as penitenciárias, presídios, centro de internação de menor infrator, manicômio e congêneres.`;

var text22 = `São as edificações ou complexo de edificações do tipo sociedades recreativas, clubes, hotéis, pousadas, parques aquáticos, estações termais, hidrominerais e empreendimentos de lazer e turismo que possuam piscinas de uso coletivo e/ou áreas com opção aquática de lazer, como lagos, lagoas, represas e similares (Complemento IN 33)`;

var text23 = `São aquelas edificações e instalações de caráter rudimentar ou provisório, edificações que abrigam aviários, chiqueiros, pocilgas, estrebarias, estábulos, retes, canis, gatis, haras, criadouros diversos, estufas destinadas à produção de mudas ou hortifrutigranjeiros, edificações para estocagem de forrageiras ou fardos, silos para estocagem de grãos, secadores de grãos ou folhas, paióis e outros (Complemento IN34).`;

var text24 = `Minas de extração de minério, túneis rodoviários, etc..`;

var textLink1 = `Conforme IN 001`;

var occupation = { 
    text0: "Ocupação", 
    title1: "Exemplos de ocupação/atividade considerada como reunião de público:", 
    text1: text1,
    textLink1: textLink1,
    link1: "http://www.cbm.sc.gov.br/dat/index.php/instrucoes-normativas-in",
    title2: "Reunião de público com concentração:",
    text2:  text2,
    title3: "Reunião de público sem concentração:",
    text3: text3,
    title4: "Residencial Privativa Multifamiliar:",
    text4: "Edificações na qual exista duas ou mais unidades residenciais.",
    title5: "Residencial Privativa Unifamiliar:",
    text5: "Edificações destinadas a abrigar apenas uma família com apenas uma unidade residencial.",
    title6: "Residencial Coletiva:",
    text6: text6,
    title7: "Residencial Transitória:",
    text7: "São os hotéis, apart-hotéis, albergues, motéis e congêneres.",
    title8: "Comercial:",
    text8: text8,
    title9: "Shopping Center:",
    text9: text9,
    title10: "Industrial:",
    text10: text10,
    title11: "Mista:",
    text11: "É o imóvel com duas ou mais ocupações diferentes.",
    title12: "Pública:",
    text12: text12,
    title13: "Escolar geral:",
    text13: text13,
    title14: "Escolar Diferenciada:",
    text14: text14,
    title15: "Hospitalar com internação ou com restrição de mobilidade:",
    text15: text15,
    title16: "Hospitalar sem internação e sem restrição de mobilidade:",
    text16: text16,
    title17: "Garagens:",
    text17: text17,
    title18: "Postos para reabastecimentos de combustíveis (líquidos inflamáveis e GNV):",
    text18: text18,
    title19: "Postos de revenda de glp (PRGLP):",
    text19: text19,
    title20: "Depósitos:",
    text20: text20,
    title21: "Locais com restrição de liberdade:",
    text21: text21,
    title22: "Parques aquáticos:",
    text22: text22,
    title23: "Atividades agropastoris e silos:",
    text23: text23,
    title24: "Túneis, galerias e minas:",
    text24: text24,
    title25: "Riscos diferenciados:",
    text25: {
        a: "a) estação de rádio ou TV;",
        b: "b) centro de computação;",
        c: "c) subestação elétrica (complemento IN 16);",
        d: "d) hidroelétrica, termoelétrica ou usina eólica;",
        e: "e) centrais telefônicas ou de telecomunicações;",
        f: "f) estações de serviço (torre de transmissão de rádio, TV ou telefonia);",
        g: "g) portos;",
        text26: {
            title26: "Edificações Especiais:",
            h: "a) oficinas de consertos de veículos automotores;",
            i: "b) depósito de combustíveis e/ou inflamáveis (complemento IN 29);",
            j: "c) depósito de armas, explosivos e munições (complemento IN 30);",
            k: "d) caldeiras e vasos de pressão (complemento IN 32)."
        }
    }
};

document.getElementById("title1").innerHTML = occupation.title1;
document.getElementById("text1").innerHTML = occupation.text1;
document.getElementById("textLink1").innerHTML = occupation.textLink1;
document.getElementById("title2").innerHTML = occupation.title2;
document.getElementById("text2").innerHTML = occupation.text2;
document.getElementById("title3").innerHTML = occupation.title3;
document.getElementById("text3").innerHTML = occupation.text3;
document.getElementById("title4").innerHTML = occupation.title4;
document.getElementById("text4").innerHTML = occupation.text4;
document.getElementById("title5").innerHTML = occupation.title5;
document.getElementById("text5").innerHTML = occupation.text5;
document.getElementById("title6").innerHTML = occupation.title6;
document.getElementById("text6").innerHTML = occupation.text6;
document.getElementById("title7").innerHTML = occupation.title7;
document.getElementById("text7").innerHTML = occupation.text7;
document.getElementById("title8").innerHTML = occupation.title8;
document.getElementById("text8").innerHTML = occupation.text8;
document.getElementById("title9").innerHTML = occupation.title9;
document.getElementById("text9").innerHTML = occupation.text9;
document.getElementById("title10").innerHTML = occupation.title10;
document.getElementById("text10").innerHTML = occupation.text10;
document.getElementById("title11").innerHTML = occupation.title11;
document.getElementById("text11").innerHTML = occupation.text11;
document.getElementById("title12").innerHTML = occupation.title12;
document.getElementById("text12").innerHTML = occupation.text12;
document.getElementById("title13").innerHTML = occupation.title13;
document.getElementById("text13").innerHTML = occupation.text13;
document.getElementById("title14").innerHTML = occupation.title14;
document.getElementById("text14").innerHTML = occupation.text14;
document.getElementById("title15").innerHTML = occupation.title15;
document.getElementById("text15").innerHTML = occupation.text15;
document.getElementById("title16").innerHTML = occupation.title16;
document.getElementById("text16").innerHTML = occupation.text16;
document.getElementById("title17").innerHTML = occupation.title17;
document.getElementById("text17").innerHTML = occupation.text17;
document.getElementById("title18").innerHTML = occupation.title18;
document.getElementById("text18").innerHTML = occupation.text18;
document.getElementById("title19").innerHTML = occupation.title19;
document.getElementById("text19").innerHTML = occupation.text19;
document.getElementById("title20").innerHTML = occupation.title20;
document.getElementById("text20").innerHTML = occupation.text20;
document.getElementById("title21").innerHTML = occupation.title21;
document.getElementById("text21").innerHTML = occupation.text21;
document.getElementById("title22").innerHTML = occupation.title22;
document.getElementById("text22").innerHTML = occupation.text22;
document.getElementById("title23").innerHTML = occupation.title23;
document.getElementById("text23").innerHTML = occupation.text23;
document.getElementById("title24").innerHTML = occupation.title24;
document.getElementById("text24").innerHTML = occupation.text24;
document.getElementById("title25").innerHTML = occupation.title25;
document.getElementById("text25").innerHTML = occupation.text25.a;
document.getElementById("text252").innerHTML = occupation.text25.b;
document.getElementById("text253").innerHTML = occupation.text25.c;
document.getElementById("text254").innerHTML = occupation.text25.d;
document.getElementById("text255").innerHTML = occupation.text25.e;
document.getElementById("text256").innerHTML = occupation.text25.f;
document.getElementById("text257").innerHTML = occupation.text25.g;
document.getElementById("text26").innerHTML = occupation.text25.text26.title26;
document.getElementById("text261").innerHTML = occupation.text25.text26.h;
document.getElementById("text262").innerHTML = occupation.text25.text26.i;
document.getElementById("text263").innerHTML = occupation.text25.text26.j;
document.getElementById("text264").innerHTML = occupation.text25.text26.k;
