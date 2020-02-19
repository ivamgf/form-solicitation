<?php
    // Form 2    
    $frm_radioMei = $_POST['sl_radioMei'];
    $frm_qtdFunc = $_POST['sl_qtdFunc'];
    if(
        $frm_radioMei == '' 
        ) {
        throw new Exception('Recebido valor em branco!');
        echo "<div class='alert alert-danger'>
                <strong>Atenção!</strong> Algum valor recebido estava em branco, favor preencher todos os campos!
            </div>";
    } else {
        echo 'Tem Regin?' . $frm_radioMei;
        echo 'Regin:' . $frm_qtdFunc;
    }
    // Form 2


?>