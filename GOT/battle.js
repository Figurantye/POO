"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stark_1 = require("./dois/Stark");
var BAratheon_1 = require("./dois/BAratheon");
var Lannister_1 = require("./dois/Lannister");
var Targaryen_1 = require("./dois/Targaryen");
var Tyrell_1 = require("./dois/Tyrell");
var Heir_1 = require("./um/Heir");
var stark = new Stark_1.Stark('Stark', 'O inverno está chegando', 'Deuses Antigos', 'Winterfell');
var lannister = new Lannister_1.Lannister('Lannister', 'Ouça-me Rugir', 'Sete Deuses', 'Casterly');
var baratheon = new BAratheon_1.Baratheon('Baratheon', 'Nossa é a Fúria', 'Sete Deuses', 'Stormlands');
var tyrell = new Tyrell_1.Tyrell('Tyrell', 'Crescendo Fortes', 'Sete Deuses', 'Reach');
var targaryen = new Targaryen_1.Targaryen('Targaryen', 'Fogo e Sangue', 'Sete Deuses', 'Dragonstone');
var heir1 = new Heir_1.Heir('Jon Snow', 30, 1);
var heir2 = new Heir_1.Heir('Renly Baratheon', 28, 1);
var heir3 = new Heir_1.Heir('Margaery Tyrell', 23, 1);
var heir4 = new Heir_1.Heir('Daenerys Targaryen', 25, 1);
var heir5 = new Heir_1.Heir('Tyrion Lannister', 35, 1);
stark.addHeir(heir1);
baratheon.addHeir(heir2);
tyrell.addHeir(heir3);
targaryen.addHeir(heir4);
lannister.addHeir(heir5);
var soldiersStark = 2000;
var soldiersLanninster = 1800;
var soldiersBaratheon = 2500;
var soldiersTyrell = 1300;
var soldiersTargaryen = 1800;
var got = [];
got.push(soldiersBaratheon, soldiersLanninster, soldiersStark, soldiersTargaryen, soldiersTyrell);
if (Math.max.apply(Math, got) == soldiersBaratheon) {
    console.log("o vencedor \u00E9: ".concat(baratheon.name));
}
else if (Math.max.apply(Math, got) == soldiersLanninster) {
    console.log("o vencedor \u00E9: ".concat(lannister.name));
}
else if (Math.max.apply(Math, got) == soldiersStark) {
    console.log("o vencedor \u00E9: ".concat(stark.name));
}
else if (Math.max.apply(Math, got) == soldiersTargaryen) {
    console.log("o vencedor \u00E9: ".concat(targaryen.name));
}
else if (Math.max.apply(Math, got) == soldiersTyrell) {
    console.log("o vencedor \u00E9: ".concat(tyrell.name));
}
else {
    console.log("empate entre duas casas");
}
baratheon.HouseInfo();
