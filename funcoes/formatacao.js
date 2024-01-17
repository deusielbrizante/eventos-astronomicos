function formata_intensidade(intensidade){
    if(intensidade.toLowerCase().includes("forte")){
        return "- 3 (Forte)"
    }else if(intensidade.toLowerCase().includes("média")){
        return "- 2 (Média)"
    }else if(intensidade.toLowerCase().includes("fraca")){
        return "- 1 (Fraca)"
    }else {
        return "- (Irregular)"
    }
}

const formata_hemisferio = (declinacao) => declinacao >= 0 ? "- Norte" : "- Sul"

function formata_periodo(inicio, fim){
    const dia_inicio = new Date(inicio).getDate()
    let mes_inicio = new Date(inicio).getMonth() + 1

    const dia_fim = new Date(fim).getDate()
    let mes_fim = new Date(fim).getMonth() + 1

    mes_inicio = mes_inicio.toString().length == 1 ? "0" + mes_inicio : mes_inicio
    mes_fim = mes_fim.toString().length == 1 ? "0" + mes_fim : mes_fim

    return `- ${dia_inicio}/${mes_inicio} à ${dia_fim}/${mes_fim}`
}

export {formata_intensidade, formata_hemisferio, formata_periodo}