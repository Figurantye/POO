"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.emitSound = function (sound) {
        console.log("the ".concat(this.name, "'s sound is ").concat(sound));
    };
    return Animal;
}());
exports.Animal = Animal;
