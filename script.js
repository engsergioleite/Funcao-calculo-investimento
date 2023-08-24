let invest = document.getElementById('capini')
let jur = document.getElementById('jurmes')
let mes = document.getElementById('meses')
let retorno = document.getElementById('res')
let mont = Number(0);

function calculo(c, i, t){
    mont = c * (1 + (i/100)) ** t;
    return mont;
}

function calc(){
    
calculo(invest.value, jur.value, mes.value)

retorno.innerHTML = `O retorno do investimento foi de:`

retorno.innerHTML = `<p>O montante total do investimento foi de: ${mont.toLocaleString('PT-BR', {style:'currency', currency: 'BRL'})}</p>` //comando para criar o estilo monetário brasileiro - REAL. 

invest.value = ''
mes.value = ''
jur.value = ''
}