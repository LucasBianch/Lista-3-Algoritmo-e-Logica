function salario(){
    var salario = Number(document.getElementById("n1").value)
    var minimo = 1320.00

    var calculo = salario/minimo
    window.alert (`Seu salário equivale a: ${calculo.toFixed(2)} Salário(s) Mínimo`)
}