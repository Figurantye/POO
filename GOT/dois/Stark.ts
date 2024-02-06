import { NobleHouse } from "../um/NobleHouse";
import { HouseRules } from "./HouseRules";

export class Stark extends NobleHouse implements HouseRules{
    exercito:string
    religiao:string

    guerra():void{

    }
    hereditariedade():void{

    }
    politica():void{
        console.log();
        
    }
}
