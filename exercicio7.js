function votar(){
    var Candidato = Number(document.getElementById("voto").value)

    if (Candidato >= 1 && Candidato <= 4){
        window.alert(`Voto contabilizado com sucesso.`)
    }
    if (Candidato == 5){
        window.alert(`Voto Nulo contabilizado com sucesso.`)
    }
    if (Candidato == 6){
        window.alert(`Voto em Branco contabilizado com sucesso.`)
    }
}