// App Script
// Form7
// Author: Ivam Galvão Filho
// Date: 06/12/2019.

// Descriptions

// Functions
function generateProgress7() {
    // Variables
    var progressBar7 =  `<ol class="progtrckr" data-progtrckr-steps="6">
                            <li class="progtrckr-done">Regin</li>
                            <li class="progtrckr-done">MEI</li>
                            <li class="progtrckr-done">Empresa</li>
                            <li class="progtrckr-done">Proprietário</li>
                            <li class="progtrckr-done">Edificação</li>
                            <li class="progtrckr-done">Finalizar</li>                            
                        </ol>`;

    // Handling variables
    document.getElementById("blockProgress7").innerHTML = progressBar7;
}

function generateForm7() {
    var blockForm7 =   `<div class="card">
                            <div class="card-head style-card-head"><h4>Solicitação Concluída com Sucesso!</h4></div>
                            <div class="card-body">                                
                                
                                <div class="alert alert-success">
                                    <span class="style-alert-fin">
                                        <i class="fas fa-thumbs-up"></i> 
                                        Clique em "Finalizar" para voltar ao site!
                                    </span>
                                </div>

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm6()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" id="next7" href="#" onclick="transferContainer()">Finalizar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>             

                    </div>`;

    // Disable form submissions if there are invalid fields

    // Handling variables
    document.getElementById("blockForm7").innerHTML = blockForm7;
}

// TransferContainer

    // Variables
    var sl_checkRegin;
    var sl_protRegin;
    var sl_radioMei;
    var sl_qtdFunc;
    var sl_natId;
    var sl_nameFant;
    var sl_phone;
    var sl_corporateName;
    var sl_nameCont;
    var sl_email;
    var sl_name;
    var sl_phoneAdm;
    var sl_natId2;
    var sl_emailAdm;
    var sl_name2;
    var sl_fant2;
    var sl_re;
    var sl_cep;
    var sl_tipLog;
    var sl_log;
    var sl_num;
    var sl_compl;
    var sl_city;
    var sl_block;
    var sl_occupation;
    var sl_situation;
    var sl_floors;
    var sl_stairs;
    var sl_capacity;
    var sl_type;
    var sl_nbBlock;
    var sl_glp;
    var sl_quantGlp;
    var sl_dep;
    var sl_depLiq;
    var sl_exp;
    var sl_reunion;
    var sl_edification;
    var sl_edifArea;
    var sl_area;

    console.log(response);

    function transferContainer() {
    for(i=0; i < response.length; i++) {
        sl_checkRegin = response[0];
        sl_protRegin = response[1];
        sl_radioMei = response[2];
        sl_qtdFunc = response[3];
        sl_natId = response[4];
        sl_nameFant = response[5];
        sl_phone = response[6];
        sl_corporateName = response[7];
        sl_nameCont = response[8];
        sl_email = response[9];
        sl_name = response[10],
        sl_phoneAdm = response[11],
        sl_natId2 = response[12],
        sl_emailAdm = response[13],
        sl_name2 = response[14];
        sl_fant2 = response[15];
        sl_re = response[16];
        sl_cep = response[17];
        sl_tipLog = response[18];
        sl_log = response[19];
        sl_num = response[20];
        sl_compl = response[21];
        sl_city = response[22];
        sl_block = response[23];
        sl_occupation = response[24],
        sl_situation = response[25],
        sl_floors = response[26],
        sl_stairs = response[27],
        sl_capacity = response[28],
        sl_type = response[29],
        sl_nbBlock = response[30],
        sl_glp = response[31],
        sl_quantGlp = response[32],
        sl_dep = response[33],
        sl_depLiq = response[34],
        sl_exp = response[35],
        sl_reunion = response[36],
        sl_edification = response[37],
        sl_edifArea = response[38],
        sl_area = response[39]

        console.log(sl_checkRegin);
        console.log(sl_protRegin);
        console.log(sl_radioMei);
        console.log(sl_qtdFunc);
        console.log(sl_natId);
        console.log(sl_nameFant);
        console.log(sl_phone);
        console.log(sl_corporateName);
        console.log(sl_nameCont);
        console.log(sl_email);
        console.log(sl_name);
        console.log(sl_phoneAdm);
        console.log(sl_natId2);
        console.log(sl_emailAdm);
        console.log(sl_name2);
        console.log(sl_fant2);
        console.log(sl_re);
        console.log(sl_cep);
        console.log(sl_tipLog);
        console.log(sl_log);
        console.log(sl_num);
        console.log(sl_compl);
        console.log(sl_city);
        console.log(sl_block);
        console.log(sl_occupation);
        console.log(sl_situation);
        console.log(sl_floors);
        console.log(sl_stairs);
        console.log(sl_capacity);
        console.log(sl_type);
        console.log(sl_nbBlock);
        console.log(sl_glp);
        console.log(sl_quantGlp);
        console.log(sl_dep);
        console.log(sl_depLiq);
        console.log(sl_exp);
        console.log(sl_reunion);
        console.log(sl_edification);
        console.log(sl_edifArea);
        console.log(sl_area);
        // Request JQuery + Ajax
        $.ajax({
            type: "POST",
            url: "../classes/request.php",
            data:{
                sl_checkRegin: sl_checkRegin,
                sl_protRegin: sl_protRegin,
                sl_radioMei: sl_radioMei,
                sl_qtdFunc: sl_qtdFunc,
                sl_natId: sl_natId,
                sl_nameFant: sl_nameFant,
                sl_phone: sl_phone,
                sl_corporateName: sl_corporateName,
                sl_nameCont: sl_nameCont,
                sl_email: sl_email,
                sl_name: sl_name,
                sl_phoneAdm: sl_phoneAdm,
                sl_natId2: sl_natId2,
                sl_emailAdm: sl_emailAdm,
                sl_name2: sl_name2,
                sl_fant2: sl_fant2,
                sl_re: sl_re,
                sl_cep: sl_cep,
                sl_tipLog: sl_tipLog,
                sl_log: sl_log,
                sl_num: sl_num,
                sl_compl: sl_compl,
                sl_city: sl_city,
                sl_block: sl_block,
                sl_occupation: sl_occupation,
                sl_situation: sl_situation,
                sl_floors: sl_floors,
                sl_stairs: sl_stairs,
                sl_capacity: sl_capacity,
                sl_type: sl_type,
                sl_nbBlock: sl_nbBlock,
                sl_glp: sl_glp,
                sl_quantGlp: sl_quantGlp,
                sl_dep: sl_dep,
                sl_depLiq: sl_depLiq,
                sl_exp: sl_exp,
                sl_reunion: sl_reunion,
                sl_edification: sl_edification,
                sl_edifArea: sl_edifArea,
                sl_area: sl_area
                },
                success: function (result) {
                    $('#result1').html(result);
                },
                error: function (result) {
                    $('#result1').html(result);
                }
        });
        // request JQuery + Ajax
    }
}


function previousForm6() {
    document.getElementById("blockForm6").style.display = "block";
    document.getElementById("blockForm6").style.position = "relative";
    document.getElementById("blockForm7").style.display = "none";
    document.getElementById("blockForm7").style.position = "relative";
    document.getElementById("blockProgress6").style.display = "block";
    document.getElementById("blockProgress7").style.display = "none";
}

function finalize() {        
    window.location.href='https://www.cbm.sc.gov.br/';
}

// Excecute functions
generateProgress7();
generateForm7();