import { incremental } from "./ex";

export class Survivor{
    protected level:incremental //propriedade do tipo incremental

    constructor(level:incremental = incremental.blue){
        this.level = level
    }
    
    getLevel():incremental{
        return this.level;
    }

    levelUp():incremental | null{
        const nextLevel = this.getNextLevel();
        
        if(nextLevel !== null){
            this.level = nextLevel;
            return this.level;
        } else {
            console.log('nao ha proximo nivel disponivel');
            return null;
        }
    };

    //metodo para obter o level do sobrevivente
    private getNextLevel():incremental | null {
        switch(this.level){
            case incremental.blue:
                return incremental.yellow;
            case incremental.yellow:
                return incremental.orange;
            case incremental.orange:
                return incremental.red;
            case incremental.red:
                return null;
        }
    }
}