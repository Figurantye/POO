var Owl = /** @class */ (function () {
    function Owl(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Owl.prototype.chirp = function () {
        console.log("hu hu");
    };
    Owl.prototype.eat = function (quantity) {
        console.log("the owl has eaten ".concat(quantity));
    };
    Owl.prototype.fly = function (quantity) {
        console.log("the owl has flown for ".concat(quantity, " minutes"));
    };
    return Owl;
}());
var myOwl = new Owl("Hoothoot", 12);
