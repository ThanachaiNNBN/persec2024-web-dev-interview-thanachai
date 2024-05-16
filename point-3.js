"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseEncoder = void 0;
var TextCompare;
(function (TextCompare) {
    TextCompare["a"] = "z";
    TextCompare["b"] = "y";
    TextCompare["c"] = "x";
    TextCompare["d"] = "w";
    TextCompare["e"] = "v";
    TextCompare["f"] = "u";
    TextCompare["g"] = "t";
    TextCompare["h"] = "s";
    TextCompare["i"] = "r";
    TextCompare["j"] = "q";
    TextCompare["k"] = "p";
    TextCompare["l"] = "o";
    TextCompare["m"] = "n";
    TextCompare["n"] = "m";
    TextCompare["o"] = "l";
    TextCompare["p"] = "k";
    TextCompare["q"] = "j";
    TextCompare["r"] = "i";
    TextCompare["s"] = "h";
    TextCompare["t"] = "g";
    TextCompare["u"] = "f";
    TextCompare["v"] = "e";
    TextCompare["w"] = "d";
    TextCompare["x"] = "c";
    TextCompare["y"] = "b";
    TextCompare["z"] = "a";
})(TextCompare || (TextCompare = {}));
var ReverseEncoder = /** @class */ (function () {
    function ReverseEncoder() {
    }
    ReverseEncoder.prototype.encode = function (data) {
        var charList = data.split('');
        var mapText = charList.reduce(function (prev, curr) {
            var text = (TextCompare[curr.toLowerCase()]) ? TextCompare[curr.toLowerCase()] : ",";
            var toUpper = (curr == curr.toUpperCase()) ? text.toUpperCase() : text;
            return prev + toUpper;
        }, '');
        var alternate = mapText.split(',').sort(function (a, b) { return a.localeCompare(b); });
        return alternate.toString().replace(/,/g, ' ');
    };
    ReverseEncoder.prototype.decode = function (data) {
        var charList = data.split(' ').sort(function (a, b) { return b.localeCompare(a); });
        var text = charList.toString().replace(/,/g, ' ');
        return text.split('').reduce(function (prev, curr) {
            var text = (TextCompare[curr.toLowerCase()]) ? TextCompare[curr.toLowerCase()] : " ";
            var toUpper = (curr == curr.toUpperCase()) ? text.toUpperCase() : text;
            return prev + toUpper;
        }, '');
    };
    return ReverseEncoder;
}());
exports.ReverseEncoder = ReverseEncoder;
