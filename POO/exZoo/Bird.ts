import { Animal } from "./Animal";
export class Bird extends Animal{
    private wingspan:number
    constructor(name:string, age:number, wingspan:number){
        super(name, age)
        this.wingspan = wingspan
    }

    public fly():void{
        console.log(`the ${this.getName()} is flying`)
    }
    getWingspan(){
        return this.wingspan
    }
    setWingspan(wingspan:number){
        this.wingspan = wingspan
    }
}