$(`.parte-4 .btn`)
    .on(`click`, e => {
        trocaParte(1);
    })
    .on("mousedown", function () {
        playSound('click.mp3', .5);
    });