// Calculations SIGAT

// Functions

// Function carrega_desc

function carrega_desc(camp_desc) {
var dfrm=document.frm_solic_funcionamento;
if (camp_desc.value!="") {
    dfrm.hdn_id_desc_funcionamento_tmp.value=camp_desc.value;
    var indice_car=camp_desc.value-1;
    var nomes=dfrm.hdn_nm_desc_funcionamento.value.split("^");
    var valores=dfrm.hdn_vl_desc_funcionamento.value.split("^");
    var blocos=dfrm.hdn_nm_bloco_desc_funcionamento.value.split("^");
    dfrm.txt_nm_desc_funcionamento_tmp.value=nomes[indice_car];
    dfrm.txt_vl_desc_funcionamento_tmp.value=valores[indice_car];
    dfrm.txt_nm_bloco_desc_funcionamento_tmp.value=blocos[indice_car];
    dfrm.btn_incluir_desc.disabled=false; 
    dfrm.btn_incluir_desc.disabled=true;
    dfrm.btn_excluir_desc.disabled=false;
} else {
    dfrm.txt_nm_desc_funcionamento_tmp.value="";
    dfrm.txt_vl_desc_funcionamento_tmp.value="";
    dfrm.txt_nm_bloco_desc_funcionamento_tmp.value="";
    dfrm.hdn_id_desc_funcionamento_tmp.value="";
    dfrm.btn_incluir_desc.disabled=false;
    dfrm.btn_incluir_desc.disabled=true;
    dfrm.btn_excluir_desc.disabled=false;
    dfrm.btn_excluir_desc.disabled=true;
    }
}
  
// Function insere_desc

function insere_desc() {
var dfrm=document.frm_solic_funcionamento;
var nomes=dfrm.hdn_nm_desc_funcionamento.value.split("^");
for (var i=0; i<nomes.length; i++) {
    if (nomes[i]==dfrm.txt_nm_desc_funcionamento_tmp.value) {
    alert("Nome da Referência já Existe!!");
    return;
    }
}

sec_cmb_desc_funcionamento=dfrm.cmb_desc_funcionamento.options.length++;
dfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].text=dfrm.txt_nm_desc_funcionamento_tmp.value;
dfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].value=sec_cmb_desc_funcionamento;
dfrm.hdn_nm_desc_funcionamento.value+=dfrm.txt_nm_desc_funcionamento_tmp.value+"^";
dfrm.hdn_vl_desc_funcionamento.value+=dfrm.txt_vl_desc_funcionamento_tmp.value+"^";
dfrm.hdn_nm_bloco_desc_funcionamento.value+=dfrm.txt_nm_bloco_desc_funcionamento_tmp.value+"^";
dfrm.txt_nm_desc_funcionamento_tmp.value="";

if (dfrm.txt_vl_tot_vistoria.value=="") {
    dfrm.txt_vl_tot_vistoria.value=dfrm.txt_vl_desc_funcionamento_tmp.value;
} else {
    var valor_tmp=dfrm.txt_vl_desc_funcionamento_tmp.value;
    var tot=dfrm.txt_vl_tot_vistoria.value;
    while (tot.indexOf(".")>-1) {
    tot=tot.replace(".","");
    }
    while (tot.indexOf(",")>-1) {
    tot=tot.replace(",",".");
    }
    while (valor_tmp.indexOf(".")>-1) {
    valor_tmp=valor_tmp.replace(".","");
    }
    while (valor_tmp.indexOf(",")>-1) {
    valor_tmp=valor_tmp.replace(",",".");
    }
    tot=parseFloat(tot)+parseFloat(valor_tmp)+"";
    while (tot.indexOf(".")>-1) {
    tot=tot.replace(".",",");
    }
    dfrm.txt_vl_tot_vistoria.value=tot;
    FormatNumero(dfrm.txt_vl_tot_vistoria);
    decimal(dfrm.txt_vl_tot_vistoria,2);
}
    dfrm.txt_vl_desc_funcionamento_tmp.value="";
    dfrm.txt_nm_bloco_desc_funcionamento_tmp.value="";
    dfrm.txt_nm_desc_funcionamento_tmp.focus();
    dfrm.btn_incluir_desc.disabled=false;
    dfrm.btn_incluir_desc.style.backgroundImage="url('../../imagens/botao2.gif')";
    dfrm.btn_incluir_desc.disabled=true;
}
  
// Function exclui_desc

function exclui_desc() {
var dfrm=document.frm_solic_funcionamento;
var indice_excluido=dfrm.hdn_id_desc_funcionamento_tmp.value;
var sec_cmb_desc_funcionamento="";
if (dfrm.cmb_desc_funcionamento.value!="") {
    dfrm.cmb_desc_funcionamento.options.length=0;
    sec_cmb_desc_funcionamento=dfrm.cmb_desc_funcionamento.options.length++;
    dfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].text="----------------";
    dfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].value="";

    var nomes=dfrm.hdn_nm_desc_funcionamento.value.split("^");
    var valores=dfrm.hdn_vl_desc_funcionamento.value.split("^");
    var blocos=dfrm.hdn_nm_bloco_desc_funcionamento.value.split("^");
    var tot=0;
    var valor_tmp="";
    dfrm.hdn_nm_desc_funcionamento.value="";
    dfrm.hdn_vl_desc_funcionamento.value="";
    dfrm.hdn_nm_bloco_desc_funcionamento.value="";
    dfrm.txt_nm_desc_funcionamento_tmp.value="";
    dfrm.txt_vl_desc_funcionamento_tmp.value="";
    dfrm.txt_nm_bloco_desc_funcionamento_tmp.value="";
    for (var i=0; i<nomes.length;i++) {
    if ((i!=(dfrm.hdn_id_desc_funcionamento_tmp.value-1)) && (nomes[i]!="")) {
        sec_cmb_desc_funcionamento=dfrm.cmb_desc_funcionamento.options.length++;
        dfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].text=nomes[i];
        dfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].value=sec_cmb_desc_funcionamento;
        dfrm.hdn_nm_desc_funcionamento.value+=nomes[i]+"^";
        dfrm.hdn_vl_desc_funcionamento.value+=valores[i]+"^";
        valor_tmp=valores[i];
        while (valor_tmp.indexOf(".")>-1) {
        valor_tmp=valor_tmp.replace(".","");
        }
        while (valor_tmp.indexOf(",")>-1) {
        valor_tmp=valor_tmp.replace(",",".");
        }
        tot=parseFloat(tot)+parseFloat(valor_tmp);
        dfrm.hdn_nm_bloco_desc_funcionamento.value+=blocos[i]+"^";
    }
    }
    tot=tot+"";
    while (tot.indexOf(".")>-1) {
    tot=tot.replace(".",",");
    }
    dfrm.txt_vl_tot_vistoria.value=tot;
    FormatNumero(dfrm.txt_vl_tot_vistoria);
    decimal(dfrm.txt_vl_tot_vistoria,2);
    dfrm.btn_incluir_desc.disabled=false;
    dfrm.btn_excluir_desc.disabled=false;
    dfrm.btn_excluir_desc.disabled=true;
    }
}
  
// Function muda_desc

function muda_desc() {
var vfrm=document.frm_solic_funcionamento;
var sec_cmb_desc_funcionamento="";
if ((vfrm.txt_nm_desc_funcionamento_tmp.value!="") && (vfrm.txt_vl_desc_funcionamento_tmp.value!="")) {
    vfrm.btn_incluir_desc.disabled=false;
} else {
    vfrm.btn_incluir_desc.disabled=false;
    vfrm.btn_incluir_desc.disabled=true;
    vfrm.btn_excluir_desc.disabled=false;
    vfrm.btn_excluir_desc.disabled=true;
}
}
  
// Function muda_desc_tp

function muda_desc_tp(tp_vist) {
var vfrm=document.frm_solic_funcionamento;
var sec_cmb_desc_funcionamento="";
if (tp_vist.value=="P") {
    vfrm.cmb_desc_funcionamento.disabled=false;
    vfrm.txt_nm_desc_funcionamento_tmp.disabled=false;
    vfrm.txt_nm_bloco_desc_funcionamento_tmp.disabled=false;
    vfrm.txt_vl_desc_funcionamento_tmp.disabled=false;
} else {
    var sec_cmb_desc_funcionamento="";
    vfrm.cmb_desc_funcionamento.options.length=0;
    sec_cmb_desc_funcionamento=vfrm.cmb_desc_funcionamento.options.length++;
    vfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].text="----------------";
    vfrm.cmb_desc_funcionamento.options[sec_cmb_desc_funcionamento].value="";
    vfrm.cmb_desc_funcionamento.disabled=true;
    vfrm.txt_nm_desc_funcionamento_tmp.disabled=true;
    vfrm.txt_nm_bloco_desc_funcionamento_tmp.disabled=true;
    vfrm.txt_vl_desc_funcionamento_tmp.disabled=true;
    vfrm.hdn_nm_desc_funcionamento.value="";
    vfrm.hdn_vl_desc_funcionamento.value="";
    vfrm.hdn_nm_bloco_desc_funcionamento.value="";
    vfrm.btn_incluir_desc.disabled=false;
    vfrm.btn_incluir_desc.disabled=true;
    vfrm.btn_excluir_desc.disabled=false;
    vfrm.btn_excluir_desc.disabled=true;
}
}
  
// Function valida_prop
  
function valida_prop() {
    var frm=document.frm_solic_funcionamento;
    if ((frm.txt_nr_cnpj_empresa.value!="") && (frm.txt_nr_cnpjcpf_proprietario.value!="")) {
    if ((frm.txt_nr_cnpj_empresa.value==frm.txt_nr_cnpjcpf_proprietario.value) && (frm.txt_nm_solicitante.value!="") && (frm.txt_nm_proprietario.value=="")) {
        frm.txt_nm_proprietario.value=frm.txt_nm_solicitante.value;
        frm.txt_fone_proprietario.value=frm.txt_nr_fone_empresa.value;
        frm.txt_de_email_proprietario.value=frm.txt_de_email_empresa.value;
        frm.txt_nm_edificacao.focus();
    } else {
        if ((frm.txt_nr_cnpj_empresa.value==frm.txt_nr_cnpjcpf_proprietario.value) && (frm.txt_nm_solicitante.value!=frm.txt_nm_proprietario.value)) {
            alert("Nome do Empresa diferente do Prorietário com mesmo CNPJ/CPF!");
        frm.txt_nm_proprietario.value="";
        frm.txt_nr_cnpjcpf_proprietario.value="";
        frm.txt_nm_proprietario.focus();
        }
    }
    }
}
  
// Function valida_desc_habitese
  
function valida_desc_habitese() {
    var vfrm=document.frm_solic_funcionamento;
    var desc_erro="";
    var valores_desc_calc=document.frm_solic_funcionamento.hdn_vl_desc_funcionamento.value;
    var vl_vist=0;
    var valor_tmp=document.frm_solic_funcionamento.txt_vl_desc_funcionamento_tmp.value;
    var vl_tot=document.frm_solic_funcionamento.txt_vl_area_tot_const.value;
    while (vl_tot.indexOf(".")>-1) {
      vl_tot=vl_tot.replace(".","");
    }
    while (vl_tot.indexOf(",")>-1) {
      vl_tot=vl_tot.replace(",",".");
    }
    while (valor_tmp.indexOf(".")>-1) {
      valor_tmp=valor_tmp.replace(".","");
    }
    while (valor_tmp.indexOf(",")>-1) {
      valor_tmp=valor_tmp.replace(",",".");
    }
    while (valores_desc_calc.indexOf(".")>-1) {
      valores_desc_calc=valores_desc_calc.replace(".","");
    }
    while (valores_desc_calc.indexOf(",")>-1) {
      valores_desc_calc=valores_desc_calc.replace(",",".");
    }
    var valores_desc=valores_desc_calc.split("^");
    for (var i=0; i<valores_desc.length; i++) {
      if (!isNaN(parseFloat(valores_desc[i]))) {
        vl_vist=parseFloat(vl_vist)+parseFloat(valores_desc[i]);
      }
    }
    if (isNaN(parseFloat(vl_tot))) {
      vl_tot=-9999999.99;
    }
    if (isNaN(vl_vist)) {
      vl_vist=parseFloat(valor_tmp);
    } else {
      vl_vist=parseFloat(vl_vist)+parseFloat(valor_tmp);
    }
    if (vfrm.txt_nm_desc_funcionamento_tmp.value=="") {
      desc_erro="=> N° ou Referência da Sala\n";
    }
    if (vfrm.txt_vl_desc_funcionamento_tmp.value=="") {
      desc_erro+="=> Valor da Área\n";
    }
    if (parseFloat(vl_tot)<parseFloat(vl_vist)) {
      desc_erro+="=> Área de Vistoria MENOR que Área Construída\n";
    }
    if (desc_erro!="") {
      alert("Os campos são Obrigatórios!\n"+desc_erro+"Verifique!!!");
    } else {
      insere_desc();
    }
}
  
// Function consultar_regin

function consultar_regin(protocolo) {
    if (protocolo.length == 9) {
    window.open("consultar_regin.php?protocolo="+protocolo,"","toolbar=no, location=no, directories=no, scrollbars=no, status=yes, innerheight=yes, innerwidth=yes");
    } else {
        alert('Número do protocolo deve possuir 9 dígitos');
        document.frm_solic_funcionamento.reset();
    }

}
  
  