import { Animal } from "./Animal";
export class Bird extends Animal{
    private wingspan:number

    constructor(name:string, weight:number){
        super(name, weight)
    }

    fly():void{
        console.log(`the ${this.getName} is flying`);
    }

}