import { Monster } from "./Monster"

export class Warrior{
    private name:string
    private type:string
    private strenght:number
    private health:number

    constructor(name:string, type:string, strenght:number){
        this.name = name
        this.type = type
        this.strenght = strenght
        this.health = 100
    }
    private info():void{
        console.log(`Warrior info \nname${this.name}; \nType: ${this.type} \nstrenght: ${this.strenght} \nhealth: ${this.health}`);}

    public attack(moonster:Monster):void{
        const damage = this.strenght
        console.log(`o poderoso ${this.type} de nome ${this.name} atacou o maldito ${moonster.getName} e causou ${damage} de dano`);
        moonster.reciveDamage(damage)
    }

    public reciveDamage(damage:number):void{
        this.health -= damage
        console.log(`o poderoso ${this.name} recebeu ${damage}, restando somente ${this.health} de saude`);
    }
    public getName(){
        return this.name
    }
}
