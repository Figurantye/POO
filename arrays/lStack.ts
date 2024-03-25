export interface lStack{
    // adiciona o elemento ao topo da pilha
    push(item: any):void;

    //remove e retorna o elemento do topo da pilha
    pop(): any | null;

    //retorna o elemento do topo da pilha sem remove-lo
    peek(): any | null;

    //verifica se a pilha esta vazia
    isEmpty(): boolean;

    //retorna o numero de elementos na pilha
    size(): number;
}