let trocaParte = (n) => {
    $(`.parte`).hide();
    $(`.parte.parte-${n}`).show();
}

function playSound(soundFileName, nivelSom = 1) {
    const audio = new Audio(`./assets/sound/${soundFileName}`);
    audio.volume = nivelSom
    audio.play().catch(e => console.error("Erro ao tocar o som:", e));
}
