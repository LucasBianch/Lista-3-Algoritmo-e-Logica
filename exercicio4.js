function idade(){
    var Anos = Number(document.getElementById("n1").value)
    var Calcmenor = ((Anos - 18)*(-1))
    var Calcmaior = Anos - 18 

    if (Anos <= 17)    
        window.alert(`Falta(m) ${Calcmenor} ano(s) para atingir a maioridade.`) 
    else {
        (Anos => 18)    
        window.alert(`Você já é maior a ${Calcmaior} ano(s).`)
        }
}