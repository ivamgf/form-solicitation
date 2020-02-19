<?php
    // Form 1
    $frm_checkRegin = $_POST['sl_checkRegin'];
    $frm_protRegin = $_POST['sl_protRegin'];
    $frm_radioMei = $_POST['sl_radioMei'];
    $frm_qtdFunc = $_POST['sl_qtdFunc'];
    $frm_natId = $_POST['sl_natId'];
    $frm_nameFant = $_POST['sl_nameFant'];
    $frm_phone = $_POST['sl_phone'];
    $frm_corporateName = $_POST['sl_corporateName'];
    $frm_nameCont = $_POST['sl_nameCont'];
    $frm_email = $_POST['sl_email'];
    $frm_name = $_POST['sl_name'];
    $frm_phoneAdm = $_POST['sl_phoneAdm'];
    $frm_natId2 = $_POST['sl_natId2'];
    $frm_emailAdm = $_POST['sl_emailAdm'];
    $frm_name2 = $_POST['sl_name2'];
    $frm_fant2 = $_POST['sl_fant2'];
    $frm_re = $_POST['sl_re'];
    $frm_cep = $_POST['sl_cep'];
    $frm_tipLog = $_POST['sl_tipLog'];
    $frm_log = $_POST['sl_log'];
    $frm_num = $_POST['sl_num'];
    $frm_compl = $_POST['sl_compl'];
    $frm_city = $_POST['sl_city'];
    $frm_block = $_POST['sl_block'];
    $frm_occupation = $_POST['sl_occupation'];
    $frm_situation = $_POST['sl_situation'];
    $frm_floors = $_POST['sl_floors'];
    $frm_stairs = $_POST['sl_stairs'];
    $frm_capacity = $_POST['sl_capacity'];
    $frm_type = $_POST['sl_type'];
    $frm_nbBlock = $_POST['sl_nbBlock'];
    $frm_glp = $_POST['sl_glp'];
    $frm_quantGlp = $_POST['sl_quantGlp'];
    $frm_dep = $_POST['sl_dep'];
    $frm_depLiq = $_POST['sl_depLiq'];
    $frm_exp = $_POST['sl_exp'];
    $frm_reunion = $_POST['sl_reunion'];
    $frm_edification = $_POST['sl_edification'];
    $frm_edifArea = $_POST['sl_edifArea'];
    $frm_area = $_POST['sl_area'];    
    if(
        $frm_natId == '' ||
        $frm_nameFant == '' ||
        $frm_phone == '' ||
        $frm_corporateName == '' ||
        $frm_nameCont == '' || 
        $frm_email == '' ||
        $frm_name == '' ||
        $frm_phoneAdm == '' ||
        $frm_natId2 == '' ||
        $frm_emailAdm == '' ||
        $frm_name2 == '' ||
        $frm_cep == '' ||
        $frm_tipLog == '' ||
        $frm_log == '' ||
        $frm_city == '' ||
        $frm_block == '' ||
        $frm_occupation == '' || 
        $frm_situation == '' || 
        $frm_floors == '' || 
        $frm_stairs == '' || 
        $frm_type == '' ||
        $frm_nbBlock == '' || 
        $frm_area == ''
        ) {
        throw new Exception('Recebido valor em branco!');
        echo "<div class='alert alert-danger'>
                <strong>Atenção!</strong> Algum valor recebido estava em branco, favor preencher todos os campos!
            </div>";
    } else {
        echo 'Tem Regin?' . $frm_checkRegin . '<br>';
        echo 'Regin:' . $frm_protRegin . '<br>';
        echo 'MEI?' . $frm_radioMei . '<br>';
        echo 'Funcionários:' . $frm_qtdFunc . '<br>';
        echo 'CPF/CNPJ:' . $frm_natId . '<br>';
        echo 'Nome Fantasia:' . $frm_nameFant . '<br>';
        echo 'Telefone:' . $frm_phone . '<br>';
        echo 'Razão Social:' . $frm_corporateName . '<br>';
        echo 'Contato:' . $frm_nameCont . '<br>';
        echo 'E-mail:' . $frm_email . '<br>';
        echo 'Nome:' . $frm_name . '<br>';
        echo 'Telefone 2:' . $frm_phoneAdm . '<br>';
        echo 'CPF/CNPJ:' . $frm_natId2 . '<br>';
        echo 'E-mail 2:' . $frm_emailAdm . '<br>';
        echo 'Nome 2:' . $frm_name2 . '<br>';
        echo 'Nome Fantasia:' . $frm_fant2 . '<br>';
        echo 'RE:' . $frm_re . '<br>';
        echo 'CEP:' . $frm_cep . '<br>';
        echo 'Tipo de Logradouro:' . $frm_tipLog . '<br>';
        echo 'Logradouro:' . $frm_log . '<br>';
        echo 'Número:' . $frm_num . '<br>';
        echo 'Complemento:' . $frm_compl . '<br>';
        echo 'Cidade:' . $frm_city . '<br>';
        echo 'Bairro' . $frm_block . '<br>';
        echo 'Ocupação:' . $frm_occupation . '<br>';
        echo 'Situação:' . $frm_situation . '<br>';
        echo 'Pavimentos:' . $frm_floors . '<br>';
        echo 'Tipo de escadas:' . $frm_stairs . '<br>';
        echo 'Capacidade:' . $frm_capacity . '<br>';
        echo 'Tipo:' . $frm_type . '<br>';
        echo 'Blocos:' . $frm_nbBlock . '<br>';
        echo 'GLP?' . $frm_glp . '<br>';
        echo 'Quant. GLP:' . $frm_quantGlp . '<br>';
        echo 'Depósito?' . $frm_dep . '<br>';
        echo 'Quant. Dep.?' . $frm_depLiq . '<br>';
        echo 'Fabrica explosivos?' . $frm_exp . '<br>';
        echo 'Reunião?' . $frm_reunion . '<br>';
        echo 'Edificação?' . $frm_edification . '<br>';
        echo 'Área de edificação?' . $frm_edifArea . '<br>';
        echo 'Área:' . $frm_area . '<br>';
    }
    // Form 1

?>