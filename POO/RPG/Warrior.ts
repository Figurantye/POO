import { Monster } from "./Monster"

export class Warrior{
    name:string
    type:string
    strenght:number
    health:number

    constructor(name:string, type:string, strenght:number){
        this.name = name
        this.type = type
        this.strenght = strenght
        this.health = 100
    }
    info():void{
        console.log(`Warrior info \nname${this.name}; \nType: ${this.type} \nstrenght: ${this.strenght} \nhealth: ${this.health}`);}

    attack(moonster:Monster):void{
        const damage = this.strenght

        console.log(`o poderoso ${this.type} de nome ${this.name} atacou o maldito ${moonster.name} e causou ${damage} de dano`);
        moonster.reciveDamage(damage)
    }

    reciveDamage(damage:number):void{
        this.health -= damage
        console.log(`o poderoso ${this.name} recebeu ${damage}, restando somente ${this.health} de saude`);

    }


}