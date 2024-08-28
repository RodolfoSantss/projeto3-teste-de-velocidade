let name1 = prompt('Insira o nome do seu veículo')
let name2 = prompt('Insira o nome do veículo de seu oponente')
const speed1 = parseInt(prompt('Insira sua velocidade'))
const speed2 = parseInt(prompt('Insira a velocidade do seu oponente'))
if (speed1 > speed2){
    alert(`O ${name1} está a ${speed1}km/h, e está mais rápidoque ${name2}, que está a ${speed2}km/h!`)
}else if (speed1 < speed2){
    alert(`O ${name2} está a ${speed2}km/h, está mais rápido que ${name1}, que está a ${speed1}km/h!`)
}else {
    alert(`Tanto ${name1} quanto ${name2} estão na mesma velocidade de ${speed1}km/h!`)
}