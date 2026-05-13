/** PARTE 1**/
let btn = $(`.parte-2 .botao-submeter`);
btn.on(`click`, e => {
    trocaParte(2);
});
btn.on("mousedown", function () {
    btn.addClass(`clicado`);
});

btn.on("mouseup mouseleave", function () {
    btn.removeClass(`clicado`);
});