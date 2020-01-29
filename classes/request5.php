<?php
    // Form 5
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
    if(
        $frm_name2 == '' ||
        $frm_cep == '' ||
        $frm_tipLog == '' ||
        $frm_log == '' ||
        $frm_city == '' ||
        $frm_block == '' 
        ) {
        throw new Exception('Recebido valor em branco!');
        echo "<div class='alert alert-danger'>
                <strong>Atenção!</strong> Algum valor recebido estava em branco, favor preencher todos os campos!
            </div>";
    }
    // Form 5
?>