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
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.setAge = function (age) {
        this.age = age;
    };
    return Animal;
}());
exports.Animal = Animal;
