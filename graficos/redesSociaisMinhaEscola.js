import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function redesSociaisMinhaEscola() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas-minha-escola.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent',
            textfont: {
                color: '#FFFFFF'  // Texto em branco no gráfico
            }
        }
    ]

    const layout = {
        plot_bgcolor: '#000000',  // Fundo preto
        paper_bgcolor: '#000000', // Papel preto
        height: 700,
        title: {
            text: 'Redes sociais mais populares na escola',
            x: 0,
            font: {
                color: '#FFFFFF', // Texto branco
                family: 'Arial, sans-serif',
                size: 30
            }
        },
        legend: {
            font: {
                color: '#FFFFFF',  // Texto branco
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Na nossa escola, as redes sociais mais populares são o <span>Instagram</span>, seguido pelo <span>WhatsApp</span> e <span>Facebook</span>. Essa preferência reflete uma tendência crescente entre os estudantes de compartilhar fotos, vídeos e se conectar de maneira mais visual. <br> O <span>WhatsApp</span> se destaca como a principal plataforma de comunicação instantânea na escola, facilitando o contato entre alunos e professores.`)
}

redesSociaisMinhaEscola()

