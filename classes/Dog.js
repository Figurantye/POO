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
    Dog.prototype.getName = function () {
        return this.name;
    };
    Dog.prototype.setWeight = function (peso) {
        return this.weight = peso;
    };
    Dog.prototype.getWeight = function () {
        return this.weight;
    };
    return Dog;
}());
var myDog = new Dog("Mel", 30);
console.log(myDog.getName());
myDog.setWeight(43);
console.log(myDog.getWeight());
