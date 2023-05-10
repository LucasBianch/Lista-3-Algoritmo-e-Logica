function peso(){
    var Sexo = document.getElementById("n1")
    var altura = Number(document.getElementById("n2").value)
    var PIMasc = (altura**2)*23
    var PIFem = (altura**2)*22

    if
        (Sexo == "M")
        window.alert (`Seu Peso Ideal é: ${PIMasc.toFixed(2)}`)
    else{
        (Sexo == "F")
        window.alert (`Seu Peso Ideal é: ${PIFem.toFixed(2)}`)
    }
}