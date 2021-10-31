$(document).ready( () => {
    setAllRotation();
    $('#card-4-1').mouseleave( () => {setRotation(1)} );
    $('#card-4-2').mouseleave( () => {setRotation(2)} );
    $('#card-4-3').mouseleave( () => {setRotation(3)} );
    $('#card-4-4').mouseleave( () => {setRotation(4)} );

    $('#card-4-1').mouseenter( () => {resetRotation(1)} );
    $('#card-4-2').mouseenter( () => {resetRotation(2)} );
    $('#card-4-3').mouseenter( () => {resetRotation(3)} );
    $('#card-4-4').mouseenter( () => {resetRotation(4)} );
});

function setRotation(num) {
    const el = $('#card-4-' + num);
    const x = getRandomInt(-1, 1);
    const y = getRandomInt(-1, 1);
    const z = getRandomInt(-1, 1);
    const theta = Math.floor(getRandomInt(-90, 90));
    const rotation = 'rotate3d(' + x + ',' + y + ',' + z + ',' + theta + 'deg)';
    el.css('transform', rotation);
}

function setAllRotation() {
    for (let i = 0; i < 4; i++) {
        const el = $('#card-4-' + (i + 1));
        const x = getRandomInt(-20, 20);
        const y = getRandomInt(-20, 20);
        const z = getRandomInt(-20, 20);
        const theta = getRandomInt(-90, 90);
        const rotation = 'rotate3d(' + x + ',' + y + ',' + z + ',' + theta + 'deg)';
        el.css('transform', rotation);
    }
}

function resetRotation(num) {
    $('#card-4-' + num).css('transform', 'rotate3d(0,0,0,0)');
}

function getRandomInt(a, b) {
    return Math.random() * (b - a + 1) + a;
}