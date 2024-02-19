"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
var NobleHouse = /** @class */ (function () {
    function NobleHouse(name, motto) {
        this.name = name;
        this.motto = motto;
        this.heirs = [];
    }
    NobleHouse.prototype.addHeir = function (heir) {
        this.heirs.push(heir);
    };
    NobleHouse.prototype.HouseInfo = function () {
        console.log("casa: ".concat(this.name));
        console.log("lema: ".concat(this.motto));
        this.heirs.forEach(function (heir) {
            console.log("herdeiro: ".concat(heir.heir, ", idade: ").concat(heir.age, ", posi\u00E7\u00E3o: ").concat(heir.rank));
        });
    };
    return NobleHouse;
}());
exports.NobleHouse = NobleHouse;
