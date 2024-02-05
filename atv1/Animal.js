"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Animal.prototype.emitSound = function (sound) {
        return sound;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.Animal = Animal;
