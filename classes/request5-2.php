<?php
    // Form 5.2

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
    }
    // Form 5.2
?>