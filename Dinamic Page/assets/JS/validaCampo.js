$(document).ready(function() {
    $('#btnCadastrar').click(function() {
        // Verificar se todos os campos estão preenchidos
        var nome = $('#nome').val().trim();
        var cep = $('#cep').val().trim();
        var email = $('#email').val().trim();
        var senha = $('#senha').val().trim();

        if (nome === '' || cep === '' || email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return false; // Impede o envio do formulário
        }else {
            // Se todos os campos estiverem preenchidos, pode prosseguir com o cadastro
            // Aqui você pode adicionar a lógica para enviar os dados para o servidor, por exemplo
            alert('Todos os campos estão preenchidos. Cadastrando...');
        }
    });
});

