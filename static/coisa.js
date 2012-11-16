function verificarCampos(){
	ret = campoSelectValido('categoria', 1, 'Selecione uma categoria.');
    if(ret) ret = campoTextoValido('nome', 'O campo Nome é obrigatório. Verifique.');    
    if(ret) ret = campoTextoValido('descricao', 'O campo Descrição é obrigatório. Verifique.');    
    if(ret) ret = campoNumericoValido('preco', 2, 'Campo Preço vazio ou inválido. Verifique.');    
    return ret;
}

function submeterFormulario(){
    if(verificarCampos())
        formulario.submit();
}

//----------

function salvarCoisa(){
    submeterFormulario();
}

function excluirCoisa(pId, pDsc){
    if(confirm('Confirma exclusão da coisa ' + pDsc + '?'))
        window.location.href = '/categoria/excluir/' + pId;
}

//----------