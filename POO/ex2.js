/*
//1 o que sera impresso
let a:number = 10
let b:number = 10

console.log(b);
b = 5
console.log(a, b);
*/
//2 o que sera impresso
var a = 10;
var b = 20;
var c = a;
b = c;
a = b;
console.log(a, b, c);
/*
//3 suponha que temos duas variaveis a e b, cada uma com um valor inicial

agora, queremos trocar os valores delas, de forma que 'a' passe a te ro valor de 'b' e 'b' passe a ter o valor de 'a'

ou seja, no caso desse exemplo, 'a' passaria a ser 25 e 'b' passaria a ser '10'
let a:number = 10
let b:number = 25

//aqui faremos uma logica para trocar os valores
let c = a
a = b
b = c

//depois de trocados, teremos os seguintes resultados
console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);


/*
//resposta1
10
10 5

//resposta2
10 10 10*/ 
