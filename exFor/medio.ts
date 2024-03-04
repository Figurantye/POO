/*
//1
let primo:number[] = [5, 12, 8, 14, 3, 20, 7]

for(let i:number = 0; i < primo.length; i++){
    if(primo[i] % i == 0){
        console.log(`${primo[i]} não é primo`);
    } else {
        console.log(`${primo[i]} é primo`);   
    }
}

//2
let palavra:string[] = ['p', 'a', 'l', 'a', 'v', 'r', 'e', 'a', 'd', 'o',]

for(let i:number = 0; i < palavra.length; i++){
    if(palavra[i] !== 'a' || 'e' || 'i' || 'o' || 'u'){
        palavra.pop()
    }    
}
console.log(palavra.length);


//3 Escreva um programa que calcule a média das notas armazenadas em um array. Cada item é uma nota obtida pelo aluno.
let nota:number[] = [8, 7, 6, 8, 9]
let soma:number = 0
for(let i:number = 0; i < nota.length; i++){
    soma += nota[i]
}

console.log(soma/nota.length);

//4

let materia = {
    matematica:6,
    quimica:7,
    fisica:6,
    portugues:9,
    literatura:10,
    geografia:8,
    historia:10,
    filosofia:6
}
let soma = 0
for(let notas in materia){
    soma += materia[notas]
}

console.log(soma/Object.keys(materia).length);
*/

//5
