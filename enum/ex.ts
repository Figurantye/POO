enum semana{
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado,
    domingo
}

console.log(semana.quarta);

enum cores{
    vermelho = '#FF0000',
    verde = '00FF00',
    azul = '0000FF'
}

console.log(cores.azul);

enum direcoes{
    norte,
    sul,
    leste,
    oeste
}

for(let direcao in direcoes){
    console.log(direcao);
}

export enum implicito{
    blue,
    yellow,
    orange,
    red
}

export enum explicito{
    blue = 10,
    yellow = 14,
    orange = 7,
    red = 20
}

export enum incremental{
    blue = 2,
    yellow,
    orange,
    red
}

export enum stringo{
    blue = 'blue',
    yellow = 'yellow',
    orange = 'orange',
    red = 'red'
}