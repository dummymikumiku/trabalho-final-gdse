import proposicoes from "../json/proposicoes-2022.json" assert {type: 'json'}
import autores from "../json/proposicoesAutores-2022.json" assert {type: 'json'}

document.getElementById("pesquisaButton").addEventListener("click", Pesquisa, false)

function Pesquisa() {
    const pesquisaValue = document.getElementById('searchbox').value
    const tabela = document.createElement("table")

    tabela.innerHTML += `
    <tr>
        <th>Tipo</th>
        <th>Ementa</th>
        <th>Data de Apresentação</th>
    </tr>
`

    let html = ""

    autores.dados.forEach(autor => {
        proposicoes.dados.forEach(proposicao => {
            if (pesquisaValue !== autor.nomeAutor) return
            if (autor.idProposicao !== proposicao.id) return
            html += `
            <tr>
                <td>${proposicao.descricaoTipo}</td>
                <td>${proposicao.ementa}</td>
                <td>${proposicao.dataApresentacao}</td>
            </tr>
        `
        })
    })

    tabela.innerHTML += html
    document.body.append(tabela)
}
