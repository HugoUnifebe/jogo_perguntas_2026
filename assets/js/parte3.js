let perguntas = [];
let questoesAcertadas = 0;

fetch('./assets/js/perguntas.json')
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        setTimeout(e => {
            reiniciarJogo();
        }, 100);
    });

function reiniciarJogo() {
    perguntas = embaralharArray(perguntas);
    questoesAcertadas = 0;
    montarPergunta(0);
}

let finalizarJogo = () => {
    let p4 = $(`.parte-4`);
    p4.find(`.qtdAcertos`).text(questoesAcertadas);
    if (questoesAcertadas > 11) {
        p4.find(`.imagem-resultado`).attr(`src`, `assets/img/resultado_bom.png`);
    }else if(questoesAcertadas > 8) {
        p4.find(`.imagem-resultado`).attr(`src`, `assets/img/resultado_medio.png`);
    }else {
        p4.find(`.imagem-resultado`).attr(`src`, `assets/img/resultado_melhore.png`);
    }
    reiniciarJogo();
}


function montarPergunta(i) {
    let objPergunta = perguntas[i];
    $(`.parte-3 .alternativas .card-alternativa`).off();


    $('.parte-3 .pergunta').html(montarHtmlColorido(String(objPergunta.pergunta).replace(/^\d+\.\s*/, '')));
    let respostasEmbaralhadas = embaralharArray(objPergunta.alternativas);


    $.each(respostasEmbaralhadas, (index, item) => {
        let btn = $(`.parte-3 .alternativas .card-alternativa-${index + 1}`);
        btn.find(`img`).attr(`src`, item.imagem);
        btn.on(`click`, e => {
            if (objPergunta.correta === item.texto) {
                questoesAcertadas++;
            }
            if (i === 14) {
                trocaParte(4);
                finalizarJogo();
            } else {
                montarPergunta(i + 1);
            }
        })
            .on("mousedown", function () {
                playSound('click.mp3', .5);
            });
    });

}