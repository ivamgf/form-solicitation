<?php
    // Form 3
    $frm_natId = $_POST['sl_natId'];
    $frm_nameFant = $_POST['sl_nameFant'];
    $frm_phone = $_POST['sl_phone'];
    $frm_corporateName = $_POST['sl_corporateName'];
    $frm_nameCont = $_POST['sl_nameCont'];
    $frm_email = $_POST['sl_email'];
    if (
        $frm_natId == '' ||
        $frm_nameFant == '' ||
        $frm_phone == '' ||
        $frm_corporateName == '' ||
        $frm_nameCont == '' || 
        $frm_email == ''
        ) {
        throw new Exception('Recebido valor em branco!');
        echo "<div class='alert alert-danger'>
                <strong>Atenção!</strong> Algum valor recebido estava em branco, favor preencher todos os campos!
            </div>";
    }
    // Form 3
?>