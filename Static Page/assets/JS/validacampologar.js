$(document).ready(function() {
    $('#btnLogar').click(function() {
        var email = $('#email2').val().trim();
        var senha = $('#senha2').val().trim();

        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return false; // Impede o envio do formulário
        } else {
            // Se todos os campos estiverem preenchidos, pode prosseguir com o login
            alert("Verificando login...");
            console.log('Email:', email);
            console.log('Senha:', senha);
            // Aqui você pode adicionar a lógica para enviar os dados para o servidor e verificar o login
        }
    });
});