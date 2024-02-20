/*
//1) crie uma função chamada contemFilme que recebe um array de filmes e um filme como parametro a função deve retornar 'true' se o filme estiver presente no array e 'false' caso contrario
let filmes:string[] = ["Taxi Driver", "Touro Indomavel", "Poderoso Chefão"]

function contemFilme(
    array:string[],
    filme:string
): boolean {
    return array.includes(filme)
}

console.log(contemFilme(filmes, "Homem-Aranha 2"))
*
//2) crie uma função chamada "adicionarJogo" que recebe um array com jogos e um novo jogo. a função deve adicionar o novo jogo a fila do array e deve retornar o array atualizado

let jogos:string[] = ["Sekiro", "SF6", "RDR2"]


function adicionarJogo(biblioteca:string[], jogoNovo:string):string[] {
biblioteca.push(jogoNovo)
console.log(biblioteca)
}

adicionarJogo(jogos,"jogo4")



function adicionarJogo(biblioteca:string[],jogoNovo:string): string[] {
    return biblioteca.push(jogoNovo);
}

adicionarJogo(jogos, "TW3");

//3) crie uma função chamada "removerJogo" que remove o ultimo jogo adicionado. retorne o array atualizado.
/*
function removerJogo(biblioteca:string[]): string[]{
    biblioteca.pop()
    console.log(biblioteca);
    
}

removerJogo(jogos)

// 4) crie uma função que recebe um array de numeros como parametros. a função deve retornar um novo array, apenas com os numeros pares.

let numero:number[] = [1,23, 42, 54, 12, 53, 8, 3, 7, 26]

function pares(array:number[], array2:number[]) :number[] {
    array2 = array.filter(par => par%2===0)
    console.log(array2);
}

pares(numero)

*/
// 5) crie uma função chamada dobrarParesMenoresQueCinco que recebe um array de numeros, seleciona apenas os elementos pares e menores que cinco, dobra cada um desses numeros

let num2:number[] = [1,2,3,4,5,6,7,8,9,10]

function dobrarParesMenoresQueCinco(numeros:number[],numerosDobrados:[], numPar:number[]) :number[]{
    numPar = numeros.filter(num => num%2===0 && num<5)
    numerosDobrados = numPar.map(num => num * 2)
    console.log(numerosDobrados);
    
}

dobrarParesMenoresQueCinco(num2)
