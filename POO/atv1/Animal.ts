export class Animal{
    private name:string
    private age:number

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    emitSound(sound:string):void{
        console.log(`the ${this.name}'s sound is ${sound}`)
    }

    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}