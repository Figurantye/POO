import { Warrior } from "./Warrior"
export class Monster {
    strenght: number
    name: string
    health: number

    constructor(name: string) {
        this.name = name
        this.health = 10
        this.strenght = 50
    }
    info():void{
        console.log(`Monster info \nname: ${this.name}; \nstrenght: ${this.strenght} \nhealth: ${this.health}`);
    }

    attack(theWarrior:Warrior):void{
        const damage = this.strenght
        theWarrior.reciveDamage(damage)
        console.log(`o perigoso ${this.name} atacou ${theWarrior.name} e causou ${damage} de dano`);

    }

    reciveDamage(damage:number){
        this.health -= damage
        console.log(`o perigoso ${this.name} recebeu ${damage} de dano, restando somente ${this.health} de saude`);
    }


}