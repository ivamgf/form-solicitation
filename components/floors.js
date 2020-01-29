// floors

var floorsList = ["<option>Selecione uma opção</option>"];
var options =  ``;
for (i = 1; i < 101; i++) {
    floorsList.push(`<option value="` + i + `">`+ i +`</option>`);
    options = floorsList;
};

document.getElementById("floors").innerHTML = options;
