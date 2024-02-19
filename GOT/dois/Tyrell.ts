import { NobleHouse } from "../um/NobleHouse";
import { HouseRules } from "./HouseRules";

export class Tyrell extends NobleHouse implements HouseRules{
    religiao:string
    localizacao:string

        constructor(name:string, motto:string, religiao:string, localizacao:string){
        super(name,motto)
        this.religiao = religiao
        this.localizacao = localizacao
    }
    guerrear():void{
        console.log(`a casa ${this.name} esta guerreando`);
        
    }
    explorar():void{
        console.log(`a casa ${this.name} está explorando as fraquezas dos adversarios`);    
    }

    cultuar():void{
        console.log(`a casa ${this.name} está cultuando ${this.religiao}`);
    }

    mottoo():void{
        console.log(`o motto da casa ${this.name} é ${this.motto}`);
    }
     lugar():void{
        console.log(`a casa ${this.name} esta localizada em ${this.localizacao}`);  
     }

    //exclusivo
    natureza(){
        console.log(`a casa ${this.name} tem conexão a natureza`);   
    }
}
