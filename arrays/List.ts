export interface List {
    // adicionar elementos
    add(item: any): void; // adiciona o elemento no final da lista
    addFirst(item: any): void; // adiciona o elemento no inicio da lista
    addAt(index:number, item: any): void; // adiciona um elemento em uma posição especifica da lista

    //remover elementos
    remove(item: any): void; // remove um elemento especifico da lista
    removeFirst(): void; // remove o primeiro elemento da lista
    removeLast(): void; // remove o ultimo elemento da lista
    removeAt(index: number): void; // remove o elemento em uma posição especifica da lista

    //acessar elementos
    get(index: number): any | null; // retorna o elemento em uma posição especifica da lista
    indexOf(item: any): number; // retorna o indice da primeira ocorrenciai de um elemtno da lista
    
    //verificar se a lista está vazia
    isEmpty(): boolean // retorna verdadeiro ou falso se a lista estiver vazia, caso contrario, retorna falso

    //obte ro tamanho total da lista
    size():number; // retorna o numero total de elementos na lista
}