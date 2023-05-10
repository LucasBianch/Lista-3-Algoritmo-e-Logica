function media(){
    var P1 = Number(document.getElementById("n1").value)
    var P2 = Number(document.getElementById("n2").value)
    var T1 = Number(document.getElementById("n3").value)
    var Faltas = Number(document.getElementById("n4").value)
    var medianota = ((P1 + P2 + T1) / 3)
             
    if(medianota > 7.0)
        window.alert (`Aprovado`)
    else{
        if(medianota < 7.0)
        window.alert(`Reprovado por Nota`)
        else{
            ((80 - Faltas)>(((25/100)*80)))
            window.alert(`Reprovado por Faltas`)
        }
   }
}