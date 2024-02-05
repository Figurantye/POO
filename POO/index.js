//string
var myName = "Gustavo";
//boolean
var isOk = true;
//number
var myAge = 18;
//array forma 1
var arr = [1, 2, 3];
var manga = ["Akira", "Kokou no Hito", "Vagabond"];
//array forma 2
var array = [1, 2, 3];
var listaDeCompras = ["kitkat", "lança perfume", "k9"];
//objeto
var person = {
    name: "Gustavo",
    age: 18
};
//function
function sum(a, b) {
    return a + b;
}
function sayHello(name) {
    console.log("Hello", name || "World");
}
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
sayHello("Gustavo");
var nome = "Gustavo";
var idade = 18;
console.log(listaDeCompras[1]);
//array continuação
//adicionando elemento 
manga.push("Gantz");
console.log(manga);
//removendo o último elemento do array
manga.pop();
console.log(manga);
//iterando sobre um array
for (var i = 0; i < manga.length; i++) {
    console.log(manga[i]);
}
//splice - remove n elementos a partir da posição i do array
var letras = ["A", "B", "C", "D", "E", "F", "G"];
letras.splice(2, 1);
console.log(letras);
//array com diferentes tipos de dados
var mix = ["maçã", 5, "banana", 10];
var mix2 = ["maçã", 5, true, "banana", false, 10];
console.log(mix, mix2);
//map - função que percorre um array e cria um novo, aplicando uma modificação
var numeros = [1, 2, 3, 4, 5];
var dobrados = numeros.map(function (numero) { return numero * 2; });
var frutas = ["maçã", "pera", "morango"];
var frutasComPrefixo = frutas.map(function (fruta) { return "fruta: ".concat(fruta); });
var numeros2 = ['1', '2', '3'];
var numerosConvertidos = numeros2.map(function (numero) { return Number(numero); });
console.log(dobrados, frutasComPrefixo, numerosConvertidos);
//filter - método que cria um novo array contendo os elementos que satisfazem uma determinada condição
var numeros3 = [1, 2, 3, 4, 5];
var numerosMenores = numeros3.filter(function (numero) { return numero < 3; });
console.log(numerosMenores);
//reduce - metodo usado para reduzir o array a um unico valor
var numeros4 = [1, 2, 3, 4, 5];
var soma = numeros4.reduce(function (acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(soma);
