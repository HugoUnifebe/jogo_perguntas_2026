/** PARTE 1**/
let btn = $(`.parte-1 .botao-iniciar`);
btn.on(`click`, e => {
    trocaParte(2);
});
btn.on("mousedown", function () {
    btn.addClass(`clicado`);
});

btn.on("mouseup mouseleave", function () {
    btn.removeClass(`clicado`);
});