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

const soldiersStark = 2000
const soldiersLanninster = 1800
const soldiersBaratheon = 2500
const soldiersTyrell = 1300
const soldiersTargaryen = 1800

function BattleOfTheHouses(house1: NobleHouse, soldiers1: number, house2: NobleHouse, soldiers2: number): string {
  console.log(`Batalha entre ${house1.name} e ${house2.name}`);
  console.log(house1.HouseInfo());
  console.log(' ');
  console.log(house2.HouseInfo());
  
  if (soldiers1 > soldiers2) {
    return `o vencedor é ${house1.name}`;
  } else if (soldiers2 > soldiers1) {
    return `o vencedor é ${house2.name}`;
  } else {
    return 'Empate';
  }
}

console.log(BattleOfTheHouses(stark, soldiersStark, lannister, soldiersLanninster));
