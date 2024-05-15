"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Name = void 0;
var Name = /** @class */ (function () {
    function Name() {
    }
    Name.prototype.sentData = function (data) {
        return data;
    };
    return Name;
}());
exports.Name = Name;
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.sentData = function (data) {
        return data;
    };
    return Cat;
}());
exports.Cat = Cat;
var name = new Name();
var cat = new Cat();
console.log(name.sentData("ddd"));
console.log(cat.sentData("ddd"));
