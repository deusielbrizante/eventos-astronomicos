import chuva_meteoros from "./data/chuva-de-meteoros.js"
import { verifica_chuva_de_meteoros_hoje, verifica_chuva_de_meteoros_2meses } from "./funcoes/verifica-chuva-de-meteoros.js"
import imprime_na_tela from "./funcoes/interface.js"

function main() {
    const data = new Date()

    let chuva_meteoros_hoje = chuva_meteoros.filter((chuva) => verifica_chuva_de_meteoros_hoje(chuva, data))
    let proximas_chuva_meteoros = chuva_meteoros.filter((chuva) => verifica_chuva_de_meteoros_2meses(chuva, data))

    console.log("Chuva de meteoros\n")

    if (chuva_meteoros_hoje.length > 0) {

        chuva_meteoros.length === 1 ? console.log(`Encontramos ${chuva_meteoros_hoje.length} chuva que pode ser vista hoje !!!\n`)
                                    : console.log(`Encontramos ${chuva_meteoros_hoje.length} chuvas que podem ser vistas hoje !!!\n`)

        imprime_na_tela(chuva_meteoros_hoje)

    } else {
        console.log("Não há chuvas passando hoje!")
    }

    console.log("\nNão perca as próximas chuvas de meteoros:\n")
    imprime_na_tela(proximas_chuva_meteoros)
}

main()