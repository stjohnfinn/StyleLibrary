$(document).ready( function() {
    
    $('#text-inp').focusout(textInpFocusout);
    $(window).resize(checkHeaderWidth);
    $('#rotate-arrow').click(rotateArrow);

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

function checkHeaderWidth() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 850) {
        $('#menu').html('<div><div id=three-bar-menu></div></div>')
        $('#menu')
            .css('width', 'min-content')
            .css('height', '20px')
            .css('padding-right', '1rem');
    } else if (viewportWidth > 850) {
        $('#menu').html('<p>About</p><p>Contact</p><p id="signin">Sign In</p>')
        $('#menu').css('width', '90%');
    }
}

function rotateArrow() {

    if ($('#rotate-arrow').hasClass('arrow-active')) {
        $('#rotate-arrow').removeClass('arrow-active');
        $('#rotate-arrow').addClass('arrow-inactive');
        $('#arrow-menu').removeClass('menu-visible');
        $('#arrow-menu').addClass('menu-invisible');
    } else {
        $('#rotate-arrow').removeClass('arrow-inactive');
        $('#rotate-arrow').addClass('arrow-active');
        $('#arrow-menu').removeClass('menu-invisible');
        $('#arrow-menu').addClass('menu-visible');
    }
}