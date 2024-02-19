import { NobleHouse } from "../um/NobleHouse";
import { HouseRules } from "./HouseRules";

export class Targaryen extends NobleHouse implements HouseRules{
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
    politicar():void{
        console.log(`o rei ${this.name} está gerindo o reino`);
        
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
    dragao(){
        console.log(`os membros da casa ${this.name} podem montar em dragoes`);   
    }
}
