function velocidade(){
    var VeloIn = Number(document.getElementById("n1").value)
    var Aceleracao = Number(document.getElementById("n2").value)
    var Tempo = Number(document.getElementById("n3").value)

    var Velocidade = VeloIn + Aceleracao * Tempo 
    window.alert(`A velocidade do Objeto é de: ${Velocidade}`)
}