export class Animal{
    protected name:string
    protected age:number

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    emitSound(sound:string):void{
        console.log(`the ${this.name}'s sound is ${sound}`)
    }
    
}