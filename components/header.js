// App Script
// Header
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateHead() {
    var title = `<div class="card style-card-header">
                    <div class="card-body"><h3>Formulário de Solicitação</h3></div>
                </div>`;
    // Handling variables
    document.getElementById("header").innerHTML = title;
}

// Excecute functions
generateHead();