"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(sabor, preco, tamanho) {
        this.sabor = sabor;
        this.preco = preco;
        this.tamanho = tamanho;
    }
    Pizza.prototype.descricao = function () {
        console.log("Pizza: ".concat(this.sabor, " \nPre\u00E7o: R$").concat(this.preco, " \nTamanho: ").concat(this.tamanho.toFixed(2), "cm"));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
