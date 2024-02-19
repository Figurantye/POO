import { Stark } from "./dois/Stark";
import { NobleHouse } from "./um/NobleHouse";
import { Baratheon } from "./dois/BAratheon";
import { Lannister } from "./dois/Lannister";
import { Targaryen } from "./dois/Targaryen";
import { Tyrell } from "./dois/Tyrell";
import { Heir } from "./um/Heir";

const stark = new Stark('Stark', 'O inverno está chegando', 'Deuses Antigos', 'Winterfell');
const lannister = new Lannister('Lannister', 'Ouça-me Rugir', 'Sete Deuses', 'Casterly');
const baratheon = new Baratheon('Baratheon', 'Nossa é a Fúria', 'Sete Deuses', 'Stormlands');
const tyrell = new Tyrell('Tyrell', 'Crescendo Fortes', 'Sete Deuses', 'Reach');
const targaryen = new Targaryen('Targaryen', 'Fogo e Sangue', 'Sete Deuses', 'Dragonstone');

const heir1 = new Heir('Jon Snow', 30, 1);
const heir2 = new Heir('Renly Baratheon', 28, 1);
const heir3 = new Heir('Margaery Tyrell', 23, 1);
const heir4 = new Heir('Daenerys Targaryen', 25, 1);
const heir5 = new Heir('Tyrion Lannister', 35, 1);

stark.addHeir(heir1);
baratheon.addHeir(heir2);
tyrell.addHeir(heir3)
targaryen.addHeir(heir4)
lannister.addHeir(heir5)

const soldiersStark:number = 2000
const soldiersLanninster:number = 1800
const soldiersBaratheon:number = 2500
const soldiersTyrell:number = 1300
const soldiersTargaryen:number = 1800

const got:number[] = []

got.push(soldiersBaratheon, soldiersLanninster, soldiersStark, soldiersTargaryen, soldiersTyrell)

if(Math.max(...got) == soldiersBaratheon){
    console.log(`o vencedor é: ${baratheon.name}`);
}   else if(Math.max(...got) == soldiersLanninster){
        console.log(`o vencedor é: ${lannister.name}`);
    }
    else if(Math.max(...got) == soldiersStark){
        console.log(`o vencedor é: ${stark.name}`);
    }
    else if(Math.max(...got) == soldiersTargaryen){
        console.log(`o vencedor é: ${targaryen.name}`);
    }
    else if(Math.max(...got) == soldiersTyrell){
        console.log(`o vencedor é: ${tyrell.name}`);
    }
    else {
        console.log("empate entre duas casas");
    }

    baratheon.HouseInfo();
    