$(document).ready( function() {
    
    $('#text-inp').focusout(textInpFocusout);

});

function textInpFocusout() {
    if ( $('#text-inp').val().length > 0 ) {
        $('#text-label').css('transform', 'translateY(-50%) scale(0.5)').css('transform-origin', 'top left');
        console.log('sonthing');
    } else {
        $('#text-label').css('transform', '');
        $('#text-inp').focus( () => {
            $('#text-label').css('transform', 'translateY(-50%) scale(0.5)').css('transform-origin', 'top left');
        });
    }

    console.log('focusout!');
}