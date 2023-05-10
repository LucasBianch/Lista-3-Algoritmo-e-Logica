function porcent(){
    var venda = Number(document.getElementById("n1").value)
    var vendamaior = (venda*(30/100))
    var vendamenor = (venda*(45/100))

    if  ( venda<20.00)        
        window.alert(`O valor do lucro será de: ${vendamenor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    else{
        (venda>20.00)        
        window.alert(`O valor do lucro será de: ${vendamaior.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    }
}