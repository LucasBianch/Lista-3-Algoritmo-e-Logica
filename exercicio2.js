function checar(){
    var numero = Number(document.getElementById("n1").value)
    if
        (numero%5 == 0 && numero%3 == 0)
        window.alert(`Número é divisível por 5 e 3 ao mesmo tempo`)
    else{
        window.alert("Não divisível")
    }
}