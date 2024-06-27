$(document).ready(function() {
    function aplicarDesfoque() {
        $('.desfoque').addClass('blur-background');
    }
    
    function removerDesfoque() {
        $('.desfoque').removeClass('blur-background');
    }

    function EsconderCard() {
        $('#floatingCard').hide();
        removerDesfoque();
    }

    EsconderCard();

    $('#btnCadastrar').click(function() {
        aplicarDesfoque();
        
        var nome = $('#nome').val().trim();
        var cep = $('#cep').val().trim();
        var email = $('#email').val().trim();
        var senha = $('#senha').val().trim();

        if (nome === '' || cep === '' || email === '' || senha === '') {
            MostrarMensagem('Por favor, preencha todos os campos.');

        }else {
            
            
            MostrarMensagem('Cadastro realizado com sucesso!', 'success');

            $('#nome').val('');
            $('#cep').val('');
            $('#email').val('');
            $('#senha').val('');
        }
    });

    $('#btnLogar').click(function() {
        aplicarDesfoque();

        var email = $('#email2').val().trim();
        var senha = $('#senha2').val().trim();

        if (email === '' || senha === '') {
            MostrarMensagem('Por favor, preencha todos os campos.');

        } else {
            MostrarMensagem('Login realizado com sucesso!', 'success');

            $('#email2').val('');
            $('#senha2').val('');

        }
    });

   

    function MostrarMensagem(mensagem, type = 'error') {
        var MensagemCard = $('#messageText');
        MensagemCard.text(mensagem);
        if (type === 'error') {
            MensagemCard.removeClass('success').addClass('error');
        } else {
            MensagemCard.removeClass('error').addClass('success');
        }
        /* $('#floatingCard').show(); */
        $('.overlay').fadeIn(); 
        $('#floatingCard').fadeIn(); 
    }

    $('#closeCard').click(function() {
        /* $('#floatingCard').hide(); */
        $('#floatingCard').fadeOut(); 
        $('.overlay').fadeOut(); 
        removerDesfoque();
    });

});

