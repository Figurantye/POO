import { Animal } from "./Animal";
export class Bird extends Animal{
    protected wingspan:number
    constructor(name:string, age:number, wingspan:number){
        super(name, age)
        this.wingspan = wingspan
    }

    public fly():void{
        console.log(`the ${this.name} is flying`)
    }

    info(){
        console.log(`name: ${this.name}, age: ${this.age}, wingspan ${this.wingspan}`);
        this.emitSound(`piupiu`)
        this.fly()
    }
    infoUpdate(){
        this.name = "parrot"
        this.age = 4
        this.wingspan = 7
        console.log(`name: ${this.name}, age: ${this.age}, wingspan ${this.wingspan}`);
    }
}