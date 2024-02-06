import { Animal } from "./Animal";

export class Mammal extends Animal{
    protected coat:string
    constructor(name:string, age:number, coat:string){
        super(name, age)
        this.coat = coat
    }

    public breastfeed():void{
        console.log(`the ${this.name} is beastfeeding`);
    }
    info(){
        console.log(`name: ${this.name}, age: ${this.age}, coat: ${this.coat}`);
        this.emitSound(`uuugrhh`)
        this.breastfeed()
    }

    infoUpdate(){
        this.name = "elephant"
        this.age = 7
        this.coat = "gray"
        console.log(`name: ${this.name}, age: ${this.age}, coat: ${this.coat}`);
    }
}