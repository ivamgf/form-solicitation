// floors

var floorsList = ["<option>1</option>"];
var options =  ``;
for (i = 2; i < 101; i++) {
    floorsList.push(`<option value="` + i + `">`+ i +`</option>`);
    options = floorsList;
};

document.getElementById("floors").innerHTML = options;
