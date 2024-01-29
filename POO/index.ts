//string
let myName:string = "Gustavo"

//boolean
let isOk:boolean = true

//number
let myAge:number = 18

//array forma 1
let arr: Array<number> = [1,2,3]
let manga: Array<string> = ["Akira","Kokou no Hito","Vagabond"]

//array forma 2
let array: number[] = [1,2,3]
let listaDeCompras: string[] = ["kitkat","lança perfume","k9"]

//objeto
let person: {name:string, age:number} = 
{
    name: "Gustavo",
    age: 18
}

//function
function sum (
    a: number,
    b: number
): number {
    return a + b
}

function sayHello(
    name?: string
): void {
    console.log(`Hello`, name || `World`);
    
}
function applyDiscount (price:number, discount:number = 0.05): number {
    return price * (1 - discount)
}


sayHello(`Gustavo`)

const nome:string = "Gustavo"
const idade:number = 18

console.log(listaDeCompras[1]);

//array continuação
//adicionando elemento 
manga.push("Gantz")
console.log(manga);

//removendo o último elemento do array
manga.pop()
console.log(manga);

//iterando sobre um array
for(let i = 0; i < manga.length; i++){
    console.log(manga[i]);
    
}

//splice - remove n elementos a partir da posição i do array
const letras:string[] = ["A","B","C","D","E","F","G"]
letras.splice(2,1)
console.log(letras);

//array com diferentes tipos de dados
let mix:(string | number)[]  = ["maçã", 5, "banana", 10]
let mix2:(string | number | boolean)[] = ["maçã", 5, true, "banana", false, 10]
console.log(mix, mix2);

//map - função que percorre um array e cria um novo, aplicando uma modificação
let numeros:number[] = [1,2,3,4,5]
let dobrados:number[] = numeros.map(numero => numero * 2) 

let frutas:string[] = ["maçã", "pera", "morango"]
let frutasComPrefixo:string[] = frutas.map(fruta => `fruta: ${fruta}`)

let numeros2:string[] = ['1','2','3']
let numerosConvertidos:number[] = numeros2.map(numero => Number(numero))

console.log(dobrados, frutasComPrefixo, numerosConvertidos);

//filter - método que cria um novo array contendo os elementos que satisfazem uma determinada condição
let numeros3:number[] = [1,2,3,4,5]
let numerosMenores:number[] = numeros3.filter(numero => numero < 3)
console.log(numerosMenores);

//reduce - metodo usado para reduzir o array a um unico valor

let numeros4:number[] = [1,2,3,4,5]
let soma:number = numeros4.reduce((acumulador,numero) => {
    return acumulador + numero;
},0)
console.log(soma);
