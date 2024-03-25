export interface IQueue{
    //adiciona um elemento ao final da fila
    enqueue(item: any): void;

    //remove e retorna o elemento do inicio da fila
    dequeue(): any;

    //retorna o elemento do inicio da fila sem remove-lo
    peek(): any | null; 

    //retorna o numero de elementos na fila
    getSize(): number;

    //verifica se a fila esta vazia
    isEmpty(): boolean;
}