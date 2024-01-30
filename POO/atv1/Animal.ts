export class Animal{
    private name:string
    private weight:number

    constructor(name:string, weight:number){
        this.name = name
        this.weight = weight
    }

    emitSound(sound:string):string{
        return sound      
    }

    getName(){
        return this.name
    }
}