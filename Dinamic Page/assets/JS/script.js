/* $(document).ready(function() {
    
    $('#linkNew').click(function() {
        $('.conteudo-forms').load('UserNew.html .content');

    });

    $('#linkOld').click(function() {
        $('.conteudo-forms').load('UserOld.html .content');

    });

    $('#logo').click(function() {
        $('.conteudo-forms').load('description.html .content');

    });
}); */

$(document).ready(function() {
    $('#linkNew').click(function() {
        $('#cadastrar_usuario').show();
        $('#logar_usuario').hide();
    });

    $('#linkOld').click(function() {
        $('#cadastrar_usuario').hide();
        $('#logar_usuario').show();
    });
});
