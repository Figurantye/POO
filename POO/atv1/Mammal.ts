import { Animal } from "./Animal";

export class Mammal extends Animal{
    private coat:string
    constructor(name:string, weight:number){
        super(name, weight)
    }

    private breastfood():void{
        console.log(`the ${this.getName} is beastfeeding`);
    }
}

const mam = new Mammal(`bear`, 150)
mam.emitSound(`uuuhr`)