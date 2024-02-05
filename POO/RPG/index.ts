import { Monster } from "./Monster";
import { Warrior } from "./Warrior";

const theWarrior:Warrior = new Warrior("Arthur", "lancer", 35);
const moonster:Monster = new Monster("Demonio");

moonster.info()
theWarrior.attack(moonster);
moonster.info()
