function litros(){
    var ValorCombustivel = Number(document.getElementById("n1").value)
    var Kilometro =  Number(document.getElementById("n2").value)
    var Distancia = Number(document.getElementById("n3").value)
    
    var Combnecessario = Distancia / Kilometro 
    var Preçototal = Combnecessario * ValorCombustivel

    window.alert(`Serão necessários ${Combnecessario.toFixed(2)} Litros de combustível para o trajeto. O Valor a pagar é: ${Preçototal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}