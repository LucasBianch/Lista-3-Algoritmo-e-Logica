function Numero(){
    var N1 = Number(document.getElementById("n1").value)
    var N2 = Number(document.getElementById("n2").value)
    var N3 = Number(document.getElementById("n3").value)
    var N4 = Number(document.getElementById("n4").value)
    var N5 = Number(document.getElementById("n5").value)

    var Maior = [N1,N2,N3,N4,N5]
    var MAX = Math.max(...Maior)
    window.alert(`O Maior número é: ${MAX}`)
}