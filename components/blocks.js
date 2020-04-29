// Text Block

var blockList = ["<option>1</option>"];
var optionsBlock =  ``;
for (i = 2; i < 21; i++) {
    blockList.push(`<option value="` + i + `">`+ i +`</option>`);
    optionsBlock =  blockList;
};

document.getElementById("comboBlock").innerHTML = optionsBlock;