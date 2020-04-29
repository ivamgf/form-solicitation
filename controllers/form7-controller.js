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
                            <div class="card-head style-card-head"><h4>Confirmação dos Dados</h4></div>
                            <div class="card-body">

                                <div id="accordion">

                                    <div class="card">
                                        <div class="card-header">
                                            <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                            Empresa
                                            </a>
                                        </div>
                                        <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                            <div class="card-body">

                                                <div class="form-group" id="natIdGroupConf">
                                                    <label for="cpfcnpj">CPF/CNPJ da Empresa:</label>
                                                    <input type="text" class="form-control" id="cpfcnpjConf" name="cpfcnpjConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="fantasia">Nome Fantasia Empresa:</label>
                                                    <input type="text" class="form-control" id="fantConf" name="fantConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="fone">Telefone:</label>
                                                    <input type="tel" class="form-control" id="foneConf" name="foneConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="razao">Razão Social:</label>
                                                    <input type="text" class="form-control" id="razaoConf" name="razaoConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="contato">Nome Contato:</label>
                                                    <input type="text" class="form-control" id="contatoConf" name="contatoConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email">E-mail:</label>
                                                    <input type="text" class="form-control" id="emailConf" name="emailConf" disabled>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapse2">
                                            Proprietário da Edificação
                                            </a>
                                        </div>
                                        <div id="collapse2" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label for="name">Nome:</label>
                                                    <input type="text" class="form-control" id="nomeConf" name="nomeConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="fone">Telefone:</label>
                                                    <input type="tel" class="form-control" id="fone2Conf" name="foneConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="natId">CPF/CNPJ do Proprietário:</label>
                                                    <input type="text" class="form-control" id="natIdConf" name="natIdConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="email">E-mail:</label>
                                                    <input type="text" class="form-control" id="emailAdmConf" name="emailConf" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                            Edificação
                                            </a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label for="name">Nome:</label>
                                                    <input type="text" class="form-control" id="name2Conf" name="nome2Conf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="fant">Nome Fantasia Empresa:</label>
                                                    <input type="text" class="form-control" id="fant2Conf" name="fantConf" disabled>
                                                </div>
                                                <div class="form-group">
                                                    <label for="re">RE:</label>
                                                    <input type="text" class="form-control" id="reConf" name="reConf" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                            Endereço
                                            </a>
                                        </div>
                                        <div id="collapseFour" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <label for="cep">CEP:</label>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" id="cepConf" name="cepConf" disabled>
                                                        </div>
                                                    </div>

                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label for="typ">Tipo Logradouro:</label>
                                                            <input type="text" class="form-control" id="typLogConf" name="typLogConf" disabled>
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label for="log">Logradouro:</label>
                                                            <input type="text" class="form-control" id="logConf" name="logConf" disabled>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-6">
                                                        <label for="num">Número:</label>
                                                        <input type="text" class="form-control" id="numberConf" name="numberConf" disabled>
                                                    </div>

                                                    <div class="form-group col-6">
                                                        <label for="comp">Complemento:</label>
                                                        <input type="text" class="form-control" id="compConf" name="compConf" disabled>
                                                    </div>
                                                </div>

                                                    <div class="form-group">
                                                        <label for="cid">Cidade:</label>
                                                        <input type="text" class="form-control" id="cidConf" name="cidConf" disabled>
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="bai">Bairro:</label>
                                                        <input type="text" class="form-control" id="baiConf" name="baiConf" disabled>
                                                    </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                                            Caracterìsticas da Edificação
                                            </a>
                                        </div>
                                        <div id="collapseFive" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label for="ocupConf">Ocupação:</label>
                                                    <input type="text" class="form-control" id="ocupConf" name="ocupConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="numbConf">Número de Pessoas:</label>
                                                    <input type="text" class="form-control" id="numbConf" name="numbConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="sitConf">Situação:</label>
                                                    <input type="text" class="form-control" id="sitConf" name="sitConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="pavConf">Número de Pavimentos:</label>
                                                    <input type="text" class="form-control" id="pavConf" name="pavConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="stairsConf">Tipo de Escadas:</label>
                                                    <input type="text" class="form-control" id="stairsConf" name="stairsConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="tipoEdifConf">Tipo:</label>
                                                    <input type="text" class="form-control" id="tipoEdifConf" name="tipoEdifConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="blocksEdifConf">Número de Blocos:</label>
                                                    <input type="text" class="form-control" id="blocksEdifConf" name="blocksEdifConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="glpConf">A Empresa fara uso de gás de petróleo liquefeito?</label>
                                                    <input type="text" class="form-control" id="glpConf" name="glpConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="infConf">Comércio ou depósito de líquido inflamável/combustível?</label>
                                                    <input type="text" class="form-control" id="infConf" name="infConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="depConf">Fabricação, o comércio ou depósito de: explosivos, fogos de artifício, artigos pirotécnicos, munições, detonantes ou materiais radioativos?</label>
                                                    <input type="text" class="form-control" id="depConf" name="depConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="meiConf">Micro Empreendedor Individual (MEI)?</label>
                                                    <input type="text" class="form-control" id="meiConf" name="meiConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="predConf">Seu Estabelecimento fica dentro de outro prédio? Exemplo: Dentro de Shopping, Centros Comerciais, Galerias ou dentro de um Apartamento / Hotel.</label>
                                                    <input type="text" class="form-control" id="predConf" name="predConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="reunionConf">Sua empresa possui ocupação/atividade de Reunião de público? E a lotação máxima de público é superior a 100 pessoas?</label>
                                                    <input type="text" class="form-control" id="reunionConf" name="reunionConf" disabled>
                                                </div>

                                                <div class="form-group">
                                                    <label for="areaConf">Qual é a área total construída/utilizada pela empresa:</label>
                                                    <input type="text" class="form-control" id="areaConf" name="areaConf" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <a class="page-link" href="#" onclick="previousForm6()">Voltar</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" id="next8" href="#" data-toggle="modal" data-target="#ModalVist">Confirmar</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <!-- The Modal -->
                        <div class="modal" id="ModalVist">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Empresa</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body style-body-modal">
                                <div style="color:DodgerBlue;" class="style-checkPost">
                                    <h5>Sua edificação foi classificada como de BAIXA COMPLEXIDADE com base no item 6 das orientações gerais.
                                    Aqui você pode escolher receber seu atestado antes da vistoria solicitando uma vistoria POSTERIOR.
                                    </h5>
                                </div>

                                <div style="color:DodgerBlue;" class="style-checkPrev">
                                    <h5>Sua edificação foi classificada como de ALTA COMPLEXIDADE com base no item 6 das orientações gerais.
                                    Aqui você pode escolher receber seu atestado antes da vistoria solicitando uma vistoria PRÉVIA.
                                    </h5>
                                </div>

                                <div class="style-body-modal">
                                    <div class="form-check style-checkPost">
                                        <label class="form-check-label">
                                        <input id="vistPost" type="radio" class="form-check-input" name="optradio" onclick="checkVistPos()" checked>
                                        <b>Vistoria Posterior:</b>
                                        </label>

                                        <p>
                                        Declaro que li as orientações gerais para aprovação de edificações do CBMSC(Corpo de Bombeiros Militar de Santa Catarina)
                                        e as orientações para a execução dos sistemas preventivos de edificações de baixa complexidade.
                                        O imóvel referente a esta solicitação,
                                        se enquadra como de baixa complexidade e o mesmo já se encontra com as medidas de segurança executadas conforme as orientações".
                                        </p>
                                    </div>

                                    <div class="form-check style-checkPrev">
                                        <label class="form-check-label">
                                        <input id="vistPrev" type="radio" class="form-check-input" onclick="checkVistPrev()" name="optradio">
                                        <b>Vistoria Prévia:</b>
                                        </label>

                                        <p>
                                        Declaro que li as orientações gerais para aprovação de edificações no CBMSC
                                        e as orientações para a execução dos sistemas preventivos de edificações de baixa complexidade
                                        e desejo que a vistoria seja realizada previamente, ou seja, antes da concessão do atestado de vistoria para funcionamento.
                                        </p>
                                    </div>
                                </div>

                                <div class="form-check style-body-modal">
                                    <label class="form-check-label">
                                        <input id="checkRead" type="checkbox" class="form-check-input" value="checkRead" onclick="checkRead()"> Li e aceito
                                    </label>
                                </div>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer">
                                <ul class="pagination justify-content-end" style="margin:20px 0">
                                    <li class="page-item">
                                        <button class="page-link" id="next7a" href="#" data-dismiss="modal" disabled>Enviar</button>
                                    </li>
                                    <li class="page-item">
                                        <button class="page-link" id="next7" href="#" onclick="transferContainer()" data-dismiss="modal">Enviar</button>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" data-dismiss="modal">Cancelar</a>
                                    </li>
                                </ul>
                            </div>

                            </div>
                        </div>
                    </div>`;

    // Disable form submissions if there are invalid fields

    // Handling variables
    document.getElementById("blockForm7").innerHTML = blockForm7;

    // disable link next
    document.getElementById('next7a').style.color = "grey";
    document.getElementById("next7").style.display = "none";

}

// TransferContainer

    // Variables
    var sl_checkRegin
    var sl_protRegin
    var sl_radioMei
    var sl_qtdFunc
    var sl_noEdif
    var sl_noEdif2
    var sl_tower
    var sl_ativCom
    var sl_agrop
    var sl_natId
    var sl_nameFant
    var sl_phone
    var sl_corporateName
    var sl_nameCont
    var sl_email
    var sl_name
    var sl_phoneAdm
    var sl_natId2
    var sl_emailAdm
    var sl_name2
    var sl_fant2
    var sl_re
    var sl_cep
    var sl_tipLog
    var sl_log
    var sl_num
    var sl_compl
    var sl_city
    var sl_block
    var sl_endRes
    var sl_endEsc
    var sl_occupation
    var sl_description
    var sl_situation
    var sl_floors
    var sl_stairs
    var sl_capacity
    var sl_type
    var sl_nbBlock
    var sl_mist
    var sl_glp
    var sl_quantGlp
    var sl_dep
    var sl_depLiq
    var sl_exp
    var sl_store
    var sl_reunion
    var sl_edification
    var sl_edifArea
    var sl_area
    var sl_checkRead
    var checkStatus;
    var complexidade;
    var sl_pred;
    var sl_checkVist;
    var nm_city;

    console.log(response);

    function checkVistPos() {
        checkVistPos = document.getElementById("vistPost").checked;
        console.log(checkVistPos);
        if(checkVistPos == true) {
            sl_checkVist = "Sim";
        } else {
            sl_checkVist = "Não";
        }
        console.log("Vistoria:", sl_checkVistPos);
    }

    function checkVistPrev() {
        checkVistPos = document.getElementById("vistPrev").checked;
        console.log(checkVistPrev);
        if(checkVistPrev == true) {
            sl_checkVist = "Sim";
        } else {
            sl_checkVist = "Não";
        }
        console.log("Vistoria:", sl_checkVistPrev);
    }

    function checkRead() {
        checkStatus = document.getElementById("checkRead").checked;
        console.log(checkStatus);
        if(checkStatus == true) {
            sl_checkRead = "Pos";
            document.getElementById("next7a").style.display = "none";
            document.getElementById("next7").style.display = "block";
        } else {
            sl_checkRead = "Pre";
        }
        console.log("Lido:", sl_checkRead);
    }

    function ConfirmSolic() {
        for(i=0; i < response.length; i++) {
            console.log(response[4]);
            document.getElementById("cpfcnpjConf").value = response[9];
            document.getElementById("fantConf").value = response[10];
            document.getElementById("foneConf").value = response[11];
            document.getElementById("razaoConf").value = response[12];
            document.getElementById("contatoConf").value = response[13];
            document.getElementById("emailConf").value = response[14];
            document.getElementById("nomeConf").value = response[15];
            document.getElementById("fone2Conf").value = response[16];
            document.getElementById("natIdConf").value = response[17];
            document.getElementById("emailAdmConf").value = response[18];
            document.getElementById("name2Conf").value = response[19];
            document.getElementById("fant2Conf").value = response[20];
            document.getElementById("reConf").value = response[21];
            document.getElementById("cepConf").value = response[22];
            document.getElementById("typLogConf").value = response[23];
            document.getElementById("logConf").value = response[24];
            document.getElementById("numberConf").value = response[25];
            document.getElementById("compConf").value = response[26];
            document.getElementById("cidConf").value = nm_city;
            document.getElementById("baiConf").value = response[28];
            document.getElementById("ocupConf").value = response[31];
            document.getElementById("numbConf").value = response[36];
            document.getElementById("sitConf").value = response[33];
            document.getElementById("pavConf").value = response[34];
            document.getElementById("stairsConf").value = response[35];
            document.getElementById("tipoEdifConf").value = response[37];
            document.getElementById("blocksEdifConf").value = response[38];
            document.getElementById("glpConf").value = response[40];
            document.getElementById("infConf").value = response[42];
            document.getElementById("depConf").value = response[44];
            document.getElementById("meiConf").value = response[2];
            document.getElementById("predConf").value = response[47];
            document.getElementById("reunionConf").value = response[46];
            document.getElementById("areaConf").value = response[49];
        }
    }

    function transferContainer() {

    for(i=0; i < response.length; i++) {
        sl_checkRegin = response[0];
        sl_protRegin = response[1];
        sl_radioMei = response[2];
        sl_qtdFunc = response[3];
        sl_noEdif = response[4];
        sl_noEdif2 = response[5];
        sl_tower = response[6];
        sl_ativCom = response[7];
        sl_agrop = response[8];
        sl_natId = response[9];
        sl_nameFant = response[10];
        sl_phone = response[11];
        sl_corporateName = response[12];
        sl_nameCont = response[13];
        sl_email = response[14];
        sl_name = response[15];
        sl_phoneAdm = response[16];
        sl_natId2 = response[17];
        sl_emailAdm = response[18];
        sl_name2 = response[19];
        sl_fant2 = response[20];
        sl_re = response[21];
        sl_cep = response[22];
        sl_tipLog = response[23];
        sl_log = response[24];
        sl_num = response[25];
        sl_compl = response[26];
        sl_city = response[27];
        sl_block = response[28];
        sl_endRes = response[29];
        sl_endEsc = response[30];
        sl_occupation = response[31];
        sl_description = response[32];
        sl_situation = response[33];
        sl_floors = response[34];
        sl_stairs = response[35];
        sl_capacity = response[36];
        sl_type = response[37];
        sl_nbBlock = response[38];
        sl_mist = response[39];
        sl_glp = response[40];
        sl_quantGlp = response[41];
        sl_dep = response[42];
        sl_depLiq = response[43];
        sl_exp = response[44];
        sl_store = response[45];
        sl_reunion = response[46];
        sl_edification = response[47];
        sl_edifArea = response[48];
        sl_area = response[49];

        sl_checkRead = sl_checkRead;
        sl_checkVist = sl_checkVist;

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
        console.log(sl_store);
        console.log(sl_description);
        console.log(sl_checkVist);

        // Request JQuery + Ajax
        $.ajax({
            type: "POST",
            url: "../classes/request.php",
            data:{
                sl_checkRegin: sl_checkRegin,
                sl_protRegin: sl_protRegin,
                sl_radioMei: sl_radioMei,
                sl_qtdFunc: sl_qtdFunc,
                sl_noEdif: sl_noEdif,
                sl_noEdif2: sl_noEdif2,
                sl_tower: sl_tower,
                sl_ativCom: sl_ativCom,
                sl_agrop: sl_agrop,
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
                sl_endRes: sl_endRes,
                sl_endEsc: sl_endEsc,
                sl_occupation: sl_occupation,
                sl_description: sl_description,
                sl_situation: sl_situation,
                sl_floors: sl_floors,
                sl_stairs: sl_stairs,
                sl_capacity: sl_capacity,
                sl_type: sl_type,
                sl_nbBlock: sl_nbBlock,
                sl_mist: sl_mist,
                sl_glp: sl_glp,
                sl_quantGlp: sl_quantGlp,
                sl_dep: sl_dep,
                sl_depLiq: sl_depLiq,
                sl_exp: sl_exp,
                sl_store: sl_store,
                sl_reunion: sl_reunion,
                sl_edification: sl_edification,
                sl_edifArea: sl_edifArea,
                sl_area: sl_area,
                sl_checkRead: sl_checkRead,
                sl_checkVist: sl_checkVist
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
/*
function checkVist() {
    document.getElementById("vistPost").checked;
}
*/

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
checkRead();
// checkVist();
