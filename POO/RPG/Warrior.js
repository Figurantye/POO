"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(name, type, strenght) {
        this.name = name;
        this.type = type;
        this.strenght = strenght;
        this.health = 100;
    }
    Warrior.prototype.info = function () {
        console.log("Warrior info \nname".concat(this.name, "; \nType: ").concat(this.type, " \nstrenght: ").concat(this.strenght, " \nhealth: ").concat(this.health));
    };
    Warrior.prototype.attack = function (moonster) {
        var damage = this.strenght;
        console.log("o poderoso ".concat(this.type, " de nome ").concat(this.name, " atacou o maldito ").concat(moonster.name, " e causou ").concat(damage, " de dano"));
        moonster.reciveDamage(damage);
    };
    Warrior.prototype.reciveDamage = function (damage) {
        this.health -= damage;
        console.log("o poderoso ".concat(this.name, " recebeu ").concat(damage, ", restando somente ").concat(this.health, " de saude"));
    };
    return Warrior;
}());
exports.Warrior = Warrior;
