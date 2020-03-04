<?php
// Controller Solicitation

// include classes
require 'request.php';

// Controller SIGAT
// Date: 20-02-2020

// O sistema vai imprimir a taxa e o atestado para ser levado ao quartel para ser assinado.

// Imports
include_once 'atestados_funcionamentos/funcoes_aprova_auto.php';
require_once 'lib/loader_client.php';
// Imports

// Variables
$CORRESPONDENCIA = 0;
$erro = "";
$userlogin = $usuario=USUARIO_SOLICITACAO;
$passwd = SENHA_SOLICITACAO;
$rotina = "25";
$ses = $global_obj_sessao->authenticate ($userlogin, $passwd,$rotina);
$arquivo = "solic_funcionamento.php";
// Variables

// ==========================================================================================================

// Functions

// Function Connection

$conn = new BD (BD_HOST, BD_USER, BD_PASS, BD_NOME_ACESSOS);
if ($conn->get_status()==false)
 	die(email_erro($conn->get_msg()));

	if (@$_POST['hdn_id_cidade']) {

		// Responsavel pela troca do host do banco onde sera feita a insercao da solicitacao via WEB

		$sql = "select CADASTROS.TP_SERVIDOR.NM_IP from CADASTROS.CIDADE_SERVIDOR LEFT JOIN CADASTROS.TP_SERVIDOR USING (ID_SERVIDOR) ".
				"where CADASTROS.CIDADE_SERVIDOR.ID_CIDADE = $_POST[$frm_city]".
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

	}

// Function Connection

// ==========================================================================================================

// Function Solicitation

$sql="SELECT ".
TBL_SOL_FUNC.".ID_CIDADE, ".TBL_SOL_FUNC.".ID_SOLIC_FUNC, ".TBL_SOL_FUNC.".ID_TP_FUNC, ".
TBL_SOL_FUNC.".NM_EDIFICACOES, ".
TBL_SOL_FUNC.".NM_LOGRADOURO, ".
TBL_SOL_FUNC.".ID_CEP, ".
TBL_SOL_FUNC.".NM_BAIRRO, ".
TBL_SOL_FUNC.".NR_EDIFICACOES, ".
TBL_SOL_FUNC.".NM_FANTASIA_EMPRESA, ".
TBL_SOL_FUNC.".CH_PROTOCOLADO, ".
TBL_SOL_FUNC.".NR_CNPJ_EMPRESA, ".
TBL_SOL_FUNC.".NM_RAZAO_SOCIAL, ".
TBL_CIDADE.".NM_CIDADE, ".
"DATE_FORMAT(".TBL_SOL_FUNC.".DT_SOLICITACAO,'%d/%m/%Y') DT_SOLICITACAOS, ".
"(TO_DAYS('".date("Y-m-d")."') - TO_DAYS(".TBL_SOL_FUNC.".DT_SOLICITACAO)) AS DIAS ".
"FROM ".
    TBL_SOL_FUNC." JOIN ".TBL_CIDADE." USING(ID_CIDADE) " .
"WHERE ".
    TBL_SOL_FUNC.".CH_PROTOCOLADO IN ('S','J','P') AND ".
    TBL_SOL_FUNC.".NR_CNPJ_EMPRESA = ".$frm_natId." AND ".
    TBL_SOL_FUNC.".ID_CIDADE = ".$frm_city." ".
"ORDER BY DT_SOLICITACAO ASC, NM_CIDADE ASC";

$conn->query($sql)or die(email_erro(mysql_error()));
$rows_pendente=$conn->num_rows();
$encontrouSolicitacao = false;
while ($pendente = $conn->fetch_row()) {
    if(!$encontrouSolicitacao) $encontrouSolicitacao = true;
    $solicitacoes[] = $pendente;
}
if(!$encontrouSolicitacao) {

  $query_trans = "BEGIN";
  $res = $conn->query($query_trans)or die(email_erro(mysql_error()));
  $query_trans = "COMMIT";

  if ($ID_SOLIC_FUNC == "0") {

	$aprova_auto = aprova_auto(
    $frm_occupation,
    $frm_situation,
    $frm_type,
    $frm_edifArea,
    $frm_stairs,
    $frm_glp,
    $frm_quantGlp,
    $frm_dep,
    $frm_depLiq,
    $frm_exp,
    $CORRESPONDENCIA,
    $frm_floors,
    $frm_qtdFunc,
    $frm_capacity
  );
  $ID_TP_COMPLEXIDADE = tipo_complexidade(
    $aprova_auto,
    $frm_edifArea,
    $CORRESPONDENCIA
  );

  $sql = "INSERT INTO ".TBL_SOL_FUNC." (
      ID_CIDADE, ID_SOLIC_FUNC, ID_TP_FUNC, CH_PAGO,
      NR_CNPJ_EMPRESA, NM_RAZAO_SOCIAL, NR_FONE_EMPRESA, DE_EMAIL_EMPRESA,
      NR_CNPJ_CPF_PROPRIETARIO, NM_PROPRIETARIO, NR_FONE_PROPRIETARIO,
      DE_EMAIL_PROPRIETARIO, NM_EDIFICACOES, NM_FANTASIA, ID_TP_LOGRADOURO,
      NM_LOGRADOURO, NR_EDIFICACOES, NR_CEP, NM_BAIRRO, NM_COMPLEMENTO,
      VL_AREA_CONSTRUIDA, CH_PROTOCOLADO, DT_SOLICITACAO, CH_AGUARDO_LOGRADOURO,
      DT_AGUARDO_LOGRADOURO, ID_USUARIO,
      ID_TP_COMPLEXIDADE, ID_TP_CONSTRUCAO, ID_OCUPACAO, ID_SITUACAO,
      NM_CONTATO, NM_FANTASIA_EMPRESA, CH_TP_FUNC, PROTOCOLO_REGIN,
      ID_ESCADA, QTD_GAS, QTD_COMBUSTIVEL, EXPLOSIVO,
      CORRESPONDENCIA, ID_TP_MEI, NR_PESSOAS, NR_FUNC_MEI,
      NR_PAVIMENTOS, NR_BLOCOS,NECESSITA_VISTORIA,LOTACAO_MAXIMA
   ) VALUES (
      $frm_city, $ID_SOLIC_FUNC,$ID_TP_FUNC,$CH_PAGO, $frm_natId,
      $frm_corporateName, $frm_phone, $frm_email,
      $frm_natId2, $frm_name2, $frm_phoneAdm,
      $frm_emailAdm, $frm_name2,
      $frm_nameFant, $frm_tipLog, $frm_log, $frm_num,
      $frm_cep, $frm_block, $frm_compl, $frm_edifArea,
      $CH_PROTOCOLADO, $DT_SOLICITACAO, $CH_AGUARDO_LOGRADOURO,
      $DT_AGUARDO_LOGRADOURO, $ID_USUARIO, $ID_TP_COMPLEXIDADE,
      $frm_type, $frm_occupation, $frm_situation, $frm_nameCont,
      $frm_fant2, '$CH_TP_FUNCIONAMENTO',$frm_protRegin,
      $frm_stairs,$frm_quantGlp,$frm_depLiq,$frm_exp,
      $CORRESPONDENCIA, $ID_TP_MEI, $frm_qtdFunc, $NR_FUNC_MEI,
      $frm_floors, $frm_nbBlock, $NECESSITA_VISTORIA, $frm_capacity
  )";
  $res = $conn->query($sql)or die(email_erro(mysql_error()));
  }
  if ($conn->get_status()==false && $ID_SOLIC_FUNC == "0") {
      $query_trans="ROLLBACK";
      mysql_query($query_trans)or die(email_erro(mysql_error()));
      die(email_erro($conn->get_msg()));
  } else {
    if ($ID_SOLIC_FUNC == "0") {
        $ID_SOLIC_FUNC = mysql_insert_id();
        $ID_DESC_FUNC = 0;
        $query_desc_sub = "";

       if ($VL_AREA_PARCIAL>0) {
          $NR_PAVIMENTOS_DESC=0;
          $query_desc_sub .= " ($ID_CIDADE, $ID_SOLIC_FUNC, $ID_TP_FUNC, $ID_DESC_FUNC, ".
        	"'ÁREA PARCIAL DA EDIFICAÇÃO', $NR_PAVIMENTOS_DESC, 'PARCIAL', $VL_AREA_VISTORIADA)";
          } else {
           $query_desc_sub .= " ($ID_CIDADE, $ID_SOLIC_FUNC, $ID_TP_FUNC, $ID_DESC_FUNC, 'ÁREA TOTAL DA EDIFICAÇÃO', ".
           "$NR_PAVIMENTOS, 'TODOS', $VL_AREA_VISTORIADA)";
          }
            $query_desc = "INSERT INTO ".TBL_DESC_FUNC." (".
                "ID_CIDADE, ID_SOLIC_FUNC, ID_TP_FUNC, ID_DESC_FUNC, NM_DESC_FUNC, NR_PAVIMENTO, NM_BLOCO, VL_AREA_DESC_FUNC".
            ") VALUES $query_desc_sub;";
            $res = $conn->query($query_desc)or die(email_erro(mysql_error()));
            $checa_condicao = true;
          }
          if ($conn->get_status()==false && $ID_SOLIC_FUNC == true) {
          	$query_trans="ROLLBACK";
            mysql_query($query_trans)or die(email_erro(mysql_error()));
            die(email_erro($conn->get_msg()." ---  ".$sql));
          } else {
            // Aprovação automática
          	$aprova_auto = aprova_auto($ID_OCUPACAO,$ID_SITUACAO,$ID_TP_CONSTRUCAO,$VL_AREA_CONSTRUIDA,$ID_ESCADA,$USA_GAS,$QTD_GAS,$USA_COMBUSTIVEL,$QTD_COMBUSTIVEL,$EXPLOSIVOS,$CORRESPONDENCIA, $NR_PAVIMENTOS, $NR_PESSOAS, $LOTACAO_MAXIMA);
            $PDF_antigo = null;
         		$ID_SERVICO = 0;
            $ID_TP_SERVICO = 0;
            $INFORMATIVO = null;
            $GERAR_BOLETO = 'P';
            $CH_BOLETO_CCBSC = 'N';
            $ID_CIDADE_SERVICO = '0';
            $sql_aprov_auto = "SELECT ".TBL_APROVACAO_AUTOMATICA.".ID_SERVICO, ".TBL_APROVACAO_AUTOMATICA.".ID_TP_SERVICO, ".TBL_APROVACAO_AUTOMATICA.".INFORMATIVO, ".TBL_APROVACAO_AUTOMATICA.".GERAR_BOLETO, ".TBL_SERVICO.".CH_BOLETO_CCBSC FROM ".TBL_APROVACAO_AUTOMATICA." JOIN ".TBL_SERVICO." ON (".TBL_APROVACAO_AUTOMATICA.".ID_CIDADE = ".TBL_SERVICO.".ID_CIDADE  AND ".TBL_APROVACAO_AUTOMATICA.".ID_SERVICO = ".TBL_SERVICO.".ID_SERVICO) WHERE ".TBL_APROVACAO_AUTOMATICA.".ID_CIDADE ='".$ID_CIDADE."'";
            $res_aprov_auto = $conn->query($sql_aprov_auto);
            if ($conn->num_rows()>0) {
                $tupula_aprov_auto = $conn->fetch_row();
                $ID_SERVICO = $tupula_aprov_auto["ID_SERVICO"];
                $ID_TP_SERVICO = $tupula_aprov_auto["ID_TP_SERVICO"];
                $INFORMATIVO = $tupula_aprov_auto["INFORMATIVO"];
                $GERAR_BOLETO = $tupula_aprov_auto["GERAR_BOLETO"];
                $CH_BOLETO_CCBSC = $tupula_aprov_auto["CH_BOLETO_CCBSC"];
                $ID_CIDADE_SERVICO = $ID_CIDADE;
           }

	if ($ID_PROT_FUNC == "0") {
      $query_prot="INSERT INTO ".TBL_PROT_FUNC." (
			ID_PROT_FUNC, ID_CIDADE, ID_SOLIC_FUNC, ID_TP_FUNC, CH_VISTORIADO,
			DT_PROTOCOLADO, ID_TP_SERVICO, ID_SERVICO, ID_CIDADE_SERVICO, VL_VISTORIA, ID_USUARIO,
			NM_RAZAO_SOCIAL, NM_BAIRRO, PROTOCOLO_REGIN, NM_LOGRADOURO, ID_TP_COMPLEXIDADE,
			ID_OCUPACAO, NR_FONE_EMPRESA, DE_EMAIL_EMPRESA, NM_CONTATO
			)
      VALUES (
    	0, $ID_CIDADE, $ID_SOLIC_FUNC,$ID_TP_FUNC, 'N', CURDATE(), $ID_TP_SERVICO,
				 $ID_SERVICO,$ID_CIDADE_SERVICO, $VL_AREA_VISTORIADA,'$usuario',
				 $NM_RAZAO_SOCIAL, $NM_BAIRRO, $PROTOCOLO_REGIN, $NM_LOGRADOURO,
				 $ID_TP_COMPLEXIDADE, $ID_OCUPACAO, $NR_FONE_EMPRESA, $DE_EMAIL_EMPRESA, $NM_CONTATO)";

      $conn->query($query_prot);
      if ($conn->get_status()==false) {
          $ERRO_TRANS.="ERRO NO PROTOCOLO:".$conn->get_msg()."\n";
          $query_trans="ROLLBACK";
          die($conn->get_msg());
          email_erro($conn->get_msg());
      }
      $ID_PROT_FUNC=$conn->insert_id();
      }
      $ID_PROT_FUNC_RES=$ID_PROT_FUNC;

      if ($aprova_auto) {
          $encontrouSolicitacao = false;
          if($tp_vistoria === NULL) {
            $aprovacao_automatica = true;
            $_SESSION['ID_PROTOCOLO'] = $ID_PROT_FUNC;
            $_SESSION['ID_SOLICITACAO'] = $ID_SOLIC_FUNC;
            $_SESSION['ID_DA_CIDADE'] = $ID_CIDADE;

            } elseif($tp_vistoria == 'posterior'  || $tp_vistoria == 'previa') {

              $ID_CNPJ_EMPRESA                = $NR_CNPJ_EMPRESA;
              $ID_TP_PESSOA                    = "'S'";
              $NM_RAZAO_SOCIAL_FONETICA        = formataCampo(nr_txt_fonetica($NM_RAZAO_SOCIAL));
              $NM_CONTATO_FONETICO            = formataCampo(nr_txt_fonetica($NM_CONTATO));
              $NM_FANTASIA_FONETICO_EMPRESA    = formataCampo(nr_txt_fonetica($NM_FANTASIA_EMPRESA));
              $NM_FANTASIA_FONETICA            = formataCampo(nr_txt_fonetica($NM_FANTASIA_EMPRESA));

              if (strlen(str_replace("'","",$ID_CNPJ_EMPRESA))>13) $CH_JURIDICA="'S'"; else $CH_JURIDICA="'N'";

                  $query_pessoa="SELECT ID_TP_PESSOA FROM ".TBL_PESSOA." WHERE ID_CNPJ_CPF=$ID_CNPJ_EMPRESA AND ID_CIDADE=$ID_CIDADE";
                  $conn->query($query_pessoa);
                  if ($conn->num_rows()>0) {
                  	$pessoa_fetch=$conn->fetch_row();
                  	if ($pessoa_fetch["ID_TP_PESSOA"]!="S") {
                  		$ID_TP_PESSOA="'A'";
                  	}
                  	$query_pessoa="UPDATE ".TBL_PESSOA." SET ID_TP_PESSOA=$ID_TP_PESSOA, NM_PESSOA=$NM_RAZAO_SOCIAL, NM_PESSOA_FONETICA=$NM_RAZAO_SOCIAL_FONETICA, NR_FONE=$NR_FONE_EMPRESA, DE_EMAIL_PESSOA=$DE_EMAIL_EMPRESA, NM_CONTATO=$NM_CONTATO, NM_CONTATO_FONETICO=$NM_CONTATO_FONETICO, NM_FANTASIA=$NM_FANTASIA_EMPRESA, NM_FANTASIA_FONETICO=$NM_FANTASIA_FONETICO_EMPRESA, CH_JURIDICA=$CH_JURIDICA WHERE ".TBL_PESSOA.".ID_CNPJ_CPF=$ID_CNPJ_EMPRESA AND ".TBL_PESSOA.".ID_CIDADE=$ID_CIDADE";
                  } else {
                  	$query_pessoa="INSERT INTO ".TBL_PESSOA." (ID_CNPJ_CPF, ID_CIDADE, ID_TP_PESSOA, NM_PESSOA, NM_PESSOA_FONETICA, NR_FONE, DE_EMAIL_PESSOA, NM_CONTATO, NM_CONTATO_FONETICO, NM_FANTASIA, NM_FANTASIA_FONETICO, CH_JURIDICA) VALUES ($ID_CNPJ_EMPRESA, $ID_CIDADE, $ID_TP_PESSOA, $NM_RAZAO_SOCIAL, $NM_RAZAO_SOCIAL_FONETICA, $NR_FONE_EMPRESA, $DE_EMAIL_EMPRESA, $NM_CONTATO, $NM_CONTATO_FONETICO, $NM_FANTASIA_EMPRESA, $NM_FANTASIA_FONETICO_EMPRESA, $CH_JURIDICA)";
                  }

                  $conn->query($query_pessoa);
                  if ($conn->get_status()==false) {
                  	$ERRO_TRANS.= "pessoa auto externo1:\n".$conn->get_msg()."\n";
                  	die(email_erro($ERRO_TRANS));
                  }

// Function Solicitation

// ==========================================================================================================

?>
