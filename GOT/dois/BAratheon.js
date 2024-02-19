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
exports.Baratheon = void 0;
var NobleHouse_1 = require("../um/NobleHouse");
var Baratheon = /** @class */ (function (_super) {
    __extends(Baratheon, _super);
    function Baratheon(name, motto, religiao, localizacao) {
        var _this = _super.call(this, name, motto) || this;
        _this.religiao = religiao;
        _this.localizacao = localizacao;
        return _this;
    }
    Baratheon.prototype.guerrear = function () {
        console.log("a casa ".concat(this.name, " est\u00E1 guerreando"));
    };
    Baratheon.prototype.explorar = function () {
        console.log("a casa ".concat(this.name, " est\u00E1 explorando as fraquezas dos adversarios"));
    };
    Baratheon.prototype.cultuar = function () {
        console.log("a casa ".concat(this.name, " est\u00E1 cultuando ").concat(this.religiao));
    };
    Baratheon.prototype.mottoo = function () {
        console.log("o motto da casa ".concat(this.name, " \u00E9 ").concat(this.motto));
    };
    Baratheon.prototype.lugar = function () {
        console.log("a casa ".concat(this.name, " est\u00E1 localizada em ").concat(this.localizacao));
    };
    //exclusivo
    Baratheon.prototype.forca = function () {
        console.log("a casa ".concat(this.name, " \u00E9 reconhecida por sua for\u00E7a militar"));
    };
    return Baratheon;
}(NobleHouse_1.NobleHouse));
exports.Baratheon = Baratheon;
