function pagar(){
    var compra = Number(document.getElementById("n1").value)
    var juros = Number(document.getElementById("n2").value)
    var dias = Number(document.getElementById("n3").value)
    var calcjuros = ((compra)*(juros/100)*(dias)) + compra

     if 
        (calcjuros <= 100){
            window.alert (`Pagamento deve ser realizado à vista.`)
        }
        else if (calcjuros < 301){
            window.alert(`Pagamento deve ser realizado em 2 parcelas. Valor da Parcela: ${(calcjuros/2).toFixed(2)}`)
        }
        else if (calcjuros < 501){
            window.alert(`Pagamento deve ser realizado em 3 parcelas. Valor da Parcela: ${(calcjuros/3).toFixed(2)}`)
        }
        else if (calcjuros < 901){
            window.alert(`Pagamento deve ser realizado em 5 parcelas. Valor da Parcela: ${(calcjuros/5).toFixed(2)}`)
        }
        else if (calcjuros < 1000){
            window.alert(`Pagamento deve ser realizado em 6 parcelas. Valor da Parcela: ${(calcjuros/6).toFixed(2)}`)
        }
        else{
            (calcjuros >= 1000);
            var parcela = prompt ( `Você pode fazer o pagamento em até 10x, insira a quantidade de parcelas: `);
            if (parcela < 2){
                window.alert(`Pagamento será à vista. Total: ${calcjuros.toFixed(2)}`)
            }
            else if (parcela < 3){
                window.alert(`Pagamento será em duas parcelas de ${(calcjuros/2).toFixed(2)}`)
            }
            else if (parcela < 4){
                window.alert(`Pagamento será em três parcelas de ${(calcjuros/3).toFixed(2)}`) 
            }
            else if (parcela < 5){
                window.alert(`Pagamento será em quatro parcelas de ${(calcjuros/4).toFixed(2)}`)
            }
            else if (parcela < 6){
                window.alert(`Pagamento será em cinco parcelas de ${(calcjuros/5).toFixed(2)}`)
            }
            else if (parcela < 7){
                window.alert(`Pagamento será em seis parcelas de ${(calcjuros/6).toFixed(2)}`)
            }
            else if (parcela < 8){
                window.alert(`Pagamento será em sete parcelas de ${(calcjuros/7).toFixed(2)}`)
            }
            else if (parcela < 9){
                window.alert(`Pagamento será em oito parcelas de ${(calcjuros/8).toFixed(2)}`)
            }
            else if (parcela < 10){
                window.alert(`Pagamento será em nove parcelas de ${(calcjuros/9).toFixed(2)}`)
            }
            else{
                (parcela = 10)
                    window.alert(`Pagamento será em dez parcelas de ${(calcjuros/10).toFixed(2)}`)
            }            
        }
}
