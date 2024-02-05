"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bird_1 = require("./Bird");
var Mammal_1 = require("./Mammal");
var mam = new Mammal_1.Mammal("bear", 20, "cinza");
console.log("nome: ".concat(mam.getName(), ", idade: ").concat(mam.getAge(), ", pelo: ").concat(mam.getCoat()));
mam.emitSound("uuugrhh");
mam.breastfood();
var bird = new Bird_1.Bird("Arara", 2, 10);
console.log("nome: ".concat(bird.getName(), ", idade: ").concat(bird.getAge(), ", envergadura: ").concat(bird.getWingspan()));
bird.emitSound("piupiu");
bird.fly();
