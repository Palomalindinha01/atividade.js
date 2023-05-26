
function notaAluno(){
    let nome = (window.document.getElementById('Nome').value)
    let n1 = Number(window.document.getElementById('nota1').value)
    let n2 = Number(window.document.getElementById('nota2').value)
    let n3 = Number(window.document.getElementById('nota3').value)
        
    let soma = (n1 + n2 + n3)/3

    document.getElementById('res').innerHTML = soma

    if ( soma >= 6){
    document.getElementById('res').innerHTML = ` ${nome} sua media é ${soma}, você está APROVADO!`
}else {
    document.getElementById("res").innerHTML = ` ${nome} sua media é ${soma}, você está REPROVADO!`

}

}