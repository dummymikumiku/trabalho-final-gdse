import votos from "../json/votacoesVotos-2022.json" assert {type: 'json'}
import votacoes from "../json/votacoesObjetos-2022.json" assert {type: 'json'}

document.getElementById("pesquisaButton").addEventListener("click", Pesquisa, false)

function Pesquisa() {
    const pesquisaValue = document.getElementById('searchbox').value
    const tabela = document.createElement("table")

    tabela.innerHTML += `
    <tr>
        <th>Ementa</th>
        <th>Voto</th>
        <th>Data da Votação</th>
    </tr>
`

let html = ""

votos.dados.forEach(voto => {
    votacoes.dados.forEach(votacao => {
        if (pesquisaValue !== voto.deputado_.nome) return
        if (voto.idVotacao !== votacao.idVotacao) return
        html += `
        <tr>
            <td>${votacao.proposicao_.ementa}</td>
            <td>${voto.voto}</td>
            <td>${voto.dataHoraVoto}</td>
        </tr>
    `
    })
})

tabela.innerHTML += html
document.body.append(tabela)
}
