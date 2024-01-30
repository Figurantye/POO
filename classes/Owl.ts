import { Animal } from "./Animal";

export class Owl extends Animal{
    constructor(name:string, weight:number){
        super(name, weight)
    }

    chirp():void{
        console.log(`hu hu`);
    }

    fly(quantity:number):void{
        console.log(`the owl has flown for ${quantity} minutes`);
    }
}