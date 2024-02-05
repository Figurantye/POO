"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mammal = void 0;
var Animal_1 = require("./Animal");
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, weight) {
        return _super.call(this, name, weight) || this;
    }
    Mammal.prototype.breastfood = function () {
        console.log("the ".concat(this.getName, " is beastfeeding"));
    };
    return Mammal;
}(Animal_1.Animal));
exports.Mammal = Mammal;
var mam = new Mammal("bear", 150);
mam.emitSound("uuuhr");
