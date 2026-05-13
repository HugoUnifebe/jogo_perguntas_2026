/** PARTE 1**/
let btn = $(`.parte-1 .botao-iniciar`);
btn.on(`click`, e => {
    trocaParte(2);
});
btn.on("mousedown", function () {
    btn.addClass(`clicado`);
    playSound('click.mp3', .5);
});

btn.on("mouseup mouseleave", function () {
    btn.removeClass(`clicado`);
});
btn.get(0).addEventListener('mouseover', () => {
    playSound('hover.mp3', .05);
});