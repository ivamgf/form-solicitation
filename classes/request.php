<?php
    // Form 1
    $frm_checkRegin = $_POST['sl_checkRegin'];
    $frm_protRegin = $_POST['sl_protRegin'];
    if(
        $frm_checkRegin == ''
        ) {
        throw new Exception('Recebido valor em branco!');
        echo "<div class='alert alert-danger'>
                <strong>Atenção!</strong> Algum valor recebido estava em branco, favor preencher todos os campos!
            </div>";
    } else {
        echo 'Tem Regin?' . $frm_checkRegin;
        echo 'Regin:' . $frm_protRegin;
       
    }
    // Form 1

?>