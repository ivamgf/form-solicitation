<?php
    // Form 4
    $frm_name = $_POST['sl_name'];
    $frm_phoneAdm = $_POST['sl_phoneAdm'];
    $frm_natId2 = $_POST['sl_natId2'];
    $frm_emailAdm = $_POST['sl_emailAdm'];
    if(
        $frm_name == '' ||
        $frm_phoneAdm == '' ||
        $frm_natId2 == '' ||
        $frm_emailAdm == '' 
        ) {
        throw new Exception('Recebido valor em branco!');
        echo "<div class='alert alert-danger'>
                <strong>Atenção!</strong> Algum valor recebido estava em branco, favor preencher todos os campos!
            </div>";
    }
    // Form 4
?>