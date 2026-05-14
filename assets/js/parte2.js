/** PARTE 1**/
(e => {
    let btn = $(`.parte-2 .botao-submeter`);
    btn.on(`click`, e => {
        playSound('click.mp3', .5);
        trocaParte(3);
    });
})();