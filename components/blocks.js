// Text Block

var blockList = ["<option>Selecione uma opção</option>"];
var optionsBlock =  ``;
for (i = 1; i < 21; i++) {
    blockList.push(`<option value="` + i + `">`+ i +`</option>`);
    optionsBlock =  blockList;
};

document.getElementById("block").innerHTML = optionsBlock;