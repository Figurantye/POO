import { Animal } from "./Animal";
export class Bird extends Animal{
    private wingspan:number
    constructor(name:string, weight:number){
        super(name, weight)
    }

    private fly():void{
        console.log(`the ${this.getName} is flying`)
    }
}
const bird = new Bird(`Arara`, 0.5)
console.log(bird.emitSound("piupiu"));
