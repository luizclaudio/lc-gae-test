function alternarTab(pTab){		
	oldtab = document.formulario.guia.value;
	if(isNaN(parseInt(oldtab)))
		oldtab = 1;
	else
		oldtab = parseInt(oldtab);
	if(oldtab < 1 || oldtab > 4)
		oldtab = 1;		
	oldtab = '0' + oldtab.toString();	
	document.getElementById('folha' + oldtab).style.display = 'none';
	document.getElementById('guia' + oldtab).style.backgroundColor='#cccccc';
	document.getElementById('folha' + pTab).style.display = 'inline';
	document.getElementById('guia' + pTab).style.backgroundColor='#ffffff';
	formulario.guia.value = pTab;
}
		
function verificarCampos(){
    ret = campoSelectValido('projeto', 1, 'Selecione um projeto.');
    if(ret) ret = campoDataValido('data', 'Data inválida. Verifique.');
    if(ret) ret = campoSelectValido('tipo', 1, 'Selecione o tipo de projeto.');
    if(ret) ret = campoTextoValido('avaliador', 'Avaliador inválido. Verifique.');
    if(ret) ret = campoNumericoValido('produtividade', 2, 'Produtividade inválida. Verifique (ex. 20,35).');
    if(ret) ret = campoNumericoValido('homemhora', 2, 'Valor do Hh inválido. Verifique (ex. 110,50).');
    return ret;
}

function submeterFormulario(){
    if(verificarCampos()){
    	formulario.data.value = formatarDataBr(formulario.data.value);
        formulario.submit();
    }
}

//----------

function salvarAnalise(){
    submeterFormulario();
}

function atualizarAnalise(){
	formulario.atualizar.value = '1';
    submeterFormulario();
}

function excluirAnalise(pId, pNom, pDta){
    if(confirm('Confirma exclusão da análise do projeto ' + pNom + ' (' + pDta + ')?'))
        window.location.href = '/analise/excluir?id=' + pId;
}

//----------

function excluirArquivo(pId, pNom){
    if(confirm('Confirma exclusão do arquivo ' + pNom + '?'))
        window.location.href = '/arquivo/excluir?id=' + pId;
}

function excluirTransacao(pId, pNom){
    if(confirm('Confirma exclusão da transação ' + pNom + '?'))
        window.location.href = '/transacao/excluir?id=' + pId;
}