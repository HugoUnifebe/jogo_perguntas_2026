let trocaParte = (n) => {
    $(`.parte`).hide();
    $(`.parte.parte-${n}`).show();
}

function playSound(soundFileName, nivelSom = 1) {
    const audio = new Audio(`./assets/sound/${soundFileName}`);
    if (soundFileName === 'click.mp3') {
        audio.currentTime = .5;
    }
    audio.volume = nivelSom
    audio.play().catch(e => console.error("Erro ao tocar o som:", e));
}


function montarHtmlColorido(frase, tag = 'h4') {
    const $h1 = $(`<${tag}>`, {
        class: 'colorido'
    });
    const palavras = frase.split(' ');
    palavras.forEach((palavra, index) => {
        const $wrapper = $('<span>', {
            class: 'text-nowrap'
        });
        if (index > 0) {
            $wrapper.append('&nbsp;');
        }
        palavra.split('').forEach(letra => {
            $wrapper.append(
                $('<span>').text(letra)
            );
        });
        $h1.append($wrapper);
    });
    return $h1;
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}