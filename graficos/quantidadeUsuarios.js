import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/quantidade-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()

    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            x: redes,
            y: valores,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Número de Usuários por Rede Social',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            title: 'Redes Sociais',
            tickfont: {
                color: getCSS('--primary-color')
            }
        },
        yaxis: {
            title: 'Usuários (em bilhões)',
            tickfont: {
                color: getCSS('--primary-color')
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto('As redes sociais mais populares têm bilhões de usuários ao redor do mundo, com o <span>Facebook</span> sendo o maior, seguido pelo <span>Instagram</span> e <span>WhatsApp</span>. Esses números destacam a enorme presença e influência das redes sociais na vida cotidiana das pessoas.')
}

quantidadeUsuarios()
