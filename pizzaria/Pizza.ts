import { SaborPizza } from "./SaborPizza";

export class Pizza{
    sabor:SaborPizza;
    preco:number;
    tamanho:number;

    constructor(sabor:SaborPizza, preco:number, tamanho:number){
        this.sabor = sabor;
        this.preco = preco;
        this.tamanho = tamanho
    }

    descricao(){
        console.log(`Pizza: ${this.sabor} \nPreço: R$${this.preco} \nTamanho: ${this.tamanho.toFixed(2)}cm`);
    }
}