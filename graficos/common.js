const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div');
    grafico.className = 'grafico';

    // Garantir que o container existe antes de adicionar o gráfico
    const container = document.getElementById('graficos-container');
    if (!container) {
        console.error('Container do gráfico não encontrado!');
        return;
    }

    container.appendChild(grafico);

    const config = {
        responsive: true,
        displayModeBar: false,
    };

    // Garantir que o Plotly está carregado e configurado corretamente
    if (window.Plotly) {
        Plotly.newPlot(grafico, data, layout, config);
    } else {
        console.error('Plotly não está carregado corretamente!');
    }
}

function incluirTexto(texto) {
    const container = document.getElementById('graficos-container');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = texto;
    container.appendChild(paragrafo);
}

export { getCSS, tickConfig, criarGrafico, incluirTexto }

