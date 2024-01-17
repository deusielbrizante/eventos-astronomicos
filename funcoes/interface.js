import { formata_intensidade, formata_hemisferio, formata_periodo } from "./formatacao.js"

function imprime_na_tela(lista_chuvas){

    console.log("NOME DA CHUVA".padEnd(27) + "- INTENSIDADE".padEnd(15) + "- HEMISFÉRIO".padEnd(15) + "- PERÍODO")

    for (let chuva of lista_chuvas) {
        console.log(chuva.nome.padEnd(27) + `${formata_intensidade(chuva.intensidade)}`.padEnd(15) + `${formata_hemisferio(chuva.declinacao)}`.padEnd(15) + formata_periodo(chuva.inicio, chuva.fim))
    }
}

export default imprime_na_tela