function comparar(){
    var N1 = Number(document.getElementById("n1").value)
    var N2 = Number(document.getElementById("n2").value)
    var N3 = Number(document.getElementById("n3").value)
    var N4 = Number(document.getElementById("n4").value)
    var V1 = (N1**2)
    var V2 = (N2**2)
    var V3 = (N3**2)
    var V4 = (N4**2)   

    if (V3>100)
    window.alert(`O quadrado deste número é: ${V3}`)
    else{
        (V3<100)
    window.alert(`O quadrado de ${N1} é: ${V1}.       O quadrado de ${N2} é: ${V2}.
    O quadrado de ${N3} é: ${V3}.            O quadrado de ${N4} é: ${V4}.`)
    }
}