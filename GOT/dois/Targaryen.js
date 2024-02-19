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
exports.Targaryen = void 0;
var NobleHouse_1 = require("../um/NobleHouse");
var Targaryen = /** @class */ (function (_super) {
    __extends(Targaryen, _super);
    function Targaryen(name, motto, religiao, localizacao) {
        var _this = _super.call(this, name, motto) || this;
        _this.religiao = religiao;
        _this.localizacao = localizacao;
        return _this;
    }
    Targaryen.prototype.guerrear = function () {
        console.log("a casa ".concat(this.name, " esta guerreando"));
    };
    Targaryen.prototype.politicar = function () {
        console.log("o rei ".concat(this.name, " est\u00E1 gerindo o reino"));
    };
    Targaryen.prototype.explorar = function () {
        console.log("a casa ".concat(this.name, " est\u00E1 explorando as fraquezas dos adversarios"));
    };
    Targaryen.prototype.cultuar = function () {
        console.log("a casa ".concat(this.name, " est\u00E1 cultuando ").concat(this.religiao));
    };
    Targaryen.prototype.mottoo = function () {
        console.log("o motto da casa ".concat(this.name, " \u00E9 ").concat(this.motto));
    };
    Targaryen.prototype.lugar = function () {
        console.log("a casa ".concat(this.name, " esta localizada em ").concat(this.localizacao));
    };
    //exclusivo
    Targaryen.prototype.dragao = function () {
        console.log("os membros da casa ".concat(this.name, " podem montar em dragoes"));
    };
    return Targaryen;
}(NobleHouse_1.NobleHouse));
exports.Targaryen = Targaryen;
