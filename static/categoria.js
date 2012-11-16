function verificarCampos(){
    ret = campoTextoValido('descricao', 'O campo Descrição é obrigatório. Verifique.');    
    return ret;
}

function submeterFormulario(){
    if(verificarCampos())
        formulario.submit();
}

//----------

function salvarCategoria(){
    submeterFormulario();
}

function excluirCategoria(pId, pDsc){
    if(confirm('Confirma exclusão da categoria ' + pDsc + '?'))
        window.location.href = '/categoria/excluir/' + pId;
}

//----------