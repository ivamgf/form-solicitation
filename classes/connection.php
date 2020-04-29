<?php
/*
// Connection

// include classes
require 'request.php';

// Connection
// Date: 20-03-2020

// Imports
include ('../../templates/head_solic_func_auto.htm');
include './../../templates/cabecalhoPopUp_hotsite.php';
include_once 'atestados_funcionamentos/funcoes_aprova_auto.php';
require_once 'lib/loader_client.php';
// Imports

// Variables
$erro = "";
$userlogin = $usuario=USUARIO_SOLICITACAO;
$passwd = SENHA_SOLICITACAO;
$rotina = "25";
$ses = $global_obj_sessao->authenticate ($userlogin, $passwd,$rotina);
$arquivo = "solic_funcionamento.php";
// Variables

// ==========================================================================================================

// Functions

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
*/
// ==========================================================================================================
?>