<?php

 
// Variables
$id_ocupacao;
$ID_OCUPACAO_DESC;
$DESC_OCUPACAO;
$ID_CIDADE;
$NM_CIDADE;


$erro = "";
$userlogin = $usuario=USUARIO_SOLICITACAO;
$passwd = SENHA_SOLICITACAO;
$rotina = "25";
$ses = $global_obj_sessao->authenticate ($userlogin, $passwd,$rotina);
$arquivo = "solic_funcionamento.php";
// Variables

// ==========================================================================================================

// Function Conection

$conn = new BD (BD_HOST, BD_USER, BD_PASS, BD_NOME_ACESSOS);
if ($conn->get_status()==false)
 	die(email_erro($conn->get_msg()));

	if (@$_POST['hdn_id_cidade']) {
		
		// Responsavel pela troca do host do banco onde sera feita a insercao da solicitacao via WEB
	
		$sql = "select CADASTROS.TP_SERVIDOR.NM_IP from CADASTROS.CIDADE_SERVIDOR LEFT JOIN CADASTROS.TP_SERVIDOR USING (ID_SERVIDOR) ".
				"where CADASTROS.CIDADE_SERVIDOR.ID_CIDADE = $_POST[hdn_id_cidade]".
				";";
		$conn->query($sql)or die(email_erro(mysql_error()));
		if ($registro = $conn->fetch_row()) {
			$host = $registro['NM_IP'];
			if (trim(shell_exec('hostname')) == 'cbmiguel')$host = 'localhost';
		} else {
			die("Cidade n&atilde;o cadastrada no banco de dados<br>Fazer solicita&ccedil;&atilde;o no protocolo da cidade");
		}
	
		$conn = new BD ($host, BD_USER, BD_PASS, BD_NOME_SOLICITACAO);
		if (!$conn || $conn->link==false )
		{	
			email_erro('Servidor '.$host.' fora do ar');
			die("Desculpe o transtorno. O servidor da cidade de sua solicitação está fora do ar, tente novamente mais tarde.");
        } 
        else {
            echo 'Servidor conectado!';
        }
		
	}

// Function Conection

// ==========================================================================================================

// Import Connection
// include 'classes/connection.php';

// Query City
$sql="SELECT ".TBL_CIDADE.".ID_CIDADE, ".TBL_CIDADE.".NM_CIDADE, ".
"FROM ".TBL_CIDADE." ";
$result = $conn->query($sql)or die(email_erro(mysql_error()));

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        // echo "id: " . $row["ID_CIDADE"]. " - Name: " . $row["NM_CIDADE"]. " <br>";
        $ID_CIDADE = $row["ID_CIDADE"];
        $NM_CIDADE = $row["NM_CIDADE"];
    }
}
// Query City

if($NM_CIDADE == '' || $ID_CIDADE == '') {    
    throw new Exception('Recebido valor em branco!');
    echo "<div class='alert alert-danger'>
            <strong>Atenção!</strong> Nome da cidade estava em branco, favor preencher o campo!
        </div>";
    } else {
        // Tests
        // echo " $NM_CIDADE ";
        // Tests
    }

// Script Description

// Query Description

$sql= "SELECT ID_OCUPACAO_DESC, DESC_OCUPACAO 
FROM CADASTROS.OCUPACAO_EMPRESA  
WHERE ID_OCUPACAO = ".$id_ocupacao."";

$result = $conn->query($sql)or die(email_erro(mysql_error()));

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        // echo "id_ocupacao: " . $row["ID_OCUPACAO_DESC"]. " - Descrição: " . $row["DESC_OCUPACAO"]. " <br>";
        $ID_OCUPACAO_DESC = $row["ID_OCUPACAO_DESC"];
        $DESC_OCUPACAO = $row["DESC_OCUPACAO"];
    }
}

// Query Description

if($DESC_OCUPACAO == '' || $ID_OCUPACAO_DESC == '') {    
    throw new Exception('Recebido valor em branco!');
    echo "<div class='alert alert-danger'>
            <strong>Atenção!</strong> Nome da sub-ocupação estava em branco, favor preencher o campo!
        </div>";
    } else {
        // Tests
        // echo " $DESCRIPTION ";
        // Tests
    }
// Script Description
?>
<script type="text/javascript">var id_description = "<?= $ID_OCUPACAO_DESC ?>";</script>
<script type="text/javascript">var sub_occupation = "<?= $DESC_OCUPACAO ?>";</script>
<script type="text/javascript">var nm_city = "<?= $NM_CIDADE ?>";</script>
<script type="text/javascript">var id_city = "<?= $ID_CIDADE ?>";</script>
<!--- Imports -->
<script type="text/javascript" src="../controllers/form5-controller.js"></script>
<script type="text/javascript" src="../controllers/form5-2-controller.js"></script>
