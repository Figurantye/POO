import { HouseHeir } from "./HouseHeir"

export class NobleHouse{
    name:string
    motto:string
    heirs: HouseHeir[]

    constructor(name:string, motto:string){
        this.name = name
        this.motto = motto
        this.heirs = []
    }

    addHeir(heir:HouseHeir):void{
        this.heirs.push(heir)   
    }

    HouseInfo():void{
    console.log(`House: ${this.name}`);
    console.log(`Motto: ${this.motto}`); 
    this.heirs.forEach((heir) => {
      console.log(`herdeiro: ${heir.heir}, idade: ${heir.age}, posição: ${heir.rank}`);
    });
  }
}