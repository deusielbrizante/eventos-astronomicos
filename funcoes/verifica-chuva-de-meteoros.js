function verifica_chuva_de_meteoros_hoje(chuva_de_meteoros, data_atual){
    const ano_atual = data_atual.getFullYear()

    const data_inicio = new Date(chuva_de_meteoros.inicio + '/' + ano_atual)
    const data_fim = new Date(chuva_de_meteoros.fim + '/' + ano_atual)

    if(data_inicio.getMonth() + 1 > data_fim.getMonth() + 1)
    {
        const ano_final = data_fim.getFullYear()
        data_fim.setFullYear(ano_final + 1)
    }

    return (data_atual >= data_inicio && data_atual <= data_fim)
}

function verifica_chuva_de_meteoros_2meses(chuva_de_meteoros, data_atual){
    const ano_atual = data_atual.getFullYear()
    const data_inicio = new Date(chuva_de_meteoros.inicio + '/' + ano_atual)
    const data_fim = new Date(data_atual)

    if(data_atual.getMonth() + 1 > data_inicio.getMonth() + 1){
        const ano_final = data_inicio.getFullYear()
        data_inicio.setFullYear(ano_final + 1)
    }

    data_fim.setMonth(data_fim.getMonth() + 2)

    return (data_atual < data_inicio && data_inicio < data_fim)
}

export {verifica_chuva_de_meteoros_hoje, verifica_chuva_de_meteoros_2meses}