var vitorias = 57;
var derrotas = 4;
let rank;

let saldoVitorias = vitorias - (derrotas * 2);
saldoVitorias = Math.round(saldoVitorias);

if(saldoVitorias <= 10){
    rank = "Ferro";
}else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    rank = "Bronze";
}else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    rank = "Prata";
}else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    rank = "Ouro";
}else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    rank = "Diamante";
}else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    rank = "Lendário";
}else if(saldoVitorias >= 101){
    rank = "Imortal";
}

console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + rank);