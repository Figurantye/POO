var Dog = /** @class */ (function () {
    function Dog(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Dog.prototype.bark = function () {
        console.log("au au");
    };
    Dog.prototype.eat = function (quantity) {
        console.log("the dog has eaten ".concat(quantity));
    };
    return Dog;
}());
var myDog = new Dog("Mel", 30);
