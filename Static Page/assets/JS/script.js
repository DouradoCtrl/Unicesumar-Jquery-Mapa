$(document).ready(function() {
    function MostrarApresentacao() {
        $('#inicio-apresentacao').show();
        $('#cadastrar_usuario').hide();
        $('#logar_usuario').hide();
    }

    MostrarApresentacao(); //oculta as div cadastro e login ao carregar. Intancia de funcao;

    $('#logo').click(function() {
        $('#inicio-apresentacao').show();
        $('#cadastrar_usuario').hide();
        $('#logar_usuario').hide();
    });

    $('#linkNew').click(function() {
        $('#cadastrar_usuario').show();
        $('#logar_usuario').hide();
        $('#inicio-apresentacao').hide();
    });

    $('#linkOld').click(function() {
        $('#cadastrar_usuario').hide();
        $('#logar_usuario').show();
        $('#inicio-apresentacao').hide();
    });
});
