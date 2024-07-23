// implementando a função cadastrar
function cadastrar(){
    // Pegando valores inseridos pelo id dos inputs
    var nome = window.document.getElementById('nome')
    var email = window.document.getElementById('email')
    var senha = window.document.getElementById('senha')
    // Condição em caso de dados faltantes
    if(nome.value.length == 0|| email.value.length == 0 || senha.value.length == 0){
        window.alert(`[ERRO] Faltam dados!`)
    }else{
        // Efetuando o cadastro e limpando os valores
        window.alert(`Cadastro efetuado com sucesso`)
        nome.value = ''
        email.value = ''
        senha.value = ''
    }
}