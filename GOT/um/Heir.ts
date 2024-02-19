import { HouseHeir } from "./HouseHeir";

export class Heir implements HouseHeir{
    public heir: string;
    public age: number;
    public rank: number;

    constructor(heir:string, age:number, rank:number){
        this.heir = heir
        this.age = age
        this.rank = rank
    }
}   