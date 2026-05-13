let trocaParte = (n) => {
    $(`.parte`).hide();
    $(`.parte.parte-${n}`).show();
}

function playSound(soundFileName, nivelSom = 1) {
    const audio = new Audio(`./assets/sound/${soundFileName}`);
    if(soundFileName === 'click.mp3'){
        audio.currentTime = .5;
    }
    audio.volume = nivelSom
    audio.play().catch(e => console.error("Erro ao tocar o som:", e));
}
