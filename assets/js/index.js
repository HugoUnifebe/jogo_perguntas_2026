let trocaParte = (n) => {
    $(`.parte`).hide();
    $(`.parte.parte-${n}`).show();
}


let audiosReproduzindo = {};

function playSound(soundFileName, nivelSom = 1, id = null, onEnd = null) {

    if (id == null) {
        id = Math.floor(Math.random() * 9000) + 1000;
    }

    if (audiosReproduzindo[id]) {
        audiosReproduzindo[id].pause();
        audiosReproduzindo[id].currentTime = 0;
    }

    const audio = new Audio(`./assets/sound/${soundFileName}`);

    if (soundFileName === 'click.mp3') {
        audio.currentTime = .5;
    }
    if(/\/\d+\.mp3$/i.test(soundFileName)){
        audio.currentTime = .75;
    }

    audio.volume = nivelSom;

    audiosReproduzindo[id] = audio;

    audio.play().catch(e => console.error("Erro ao tocar o som:", e));

    audio.onended = () => {
        delete audiosReproduzindo[id];
    };

    audio.onended = () => {
        delete audiosReproduzindo[id];
        if (typeof onEnd === 'function') {
            onEnd();
        }
    };

    return audio;
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
function tocarBackground() {
    playSound(
        'background.mp3',
        .015,
        'bg-music',
        tocarBackground
    );
}

$(document).one('click touchstart', function () {
    tocarBackground();
});