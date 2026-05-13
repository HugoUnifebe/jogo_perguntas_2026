/** PARTE 1**/
let btn1 = $(`.botao-iniciar`);
btn1.on(`click`, e => {
    trocaParte(2);
});
btn1.on("mousedown", function () {
    btn1.addClass(`clicado`);
});

btn1.on("mouseup mouseleave", function () {
    btn1.removeClass(`clicado`);
});


let trocaParte = (n) => {
    $(`.parte`).hide();
    $(`.parte.parte-${n}`).show();
}