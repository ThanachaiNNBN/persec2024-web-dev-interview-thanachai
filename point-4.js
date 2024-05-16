"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
var Autocomplete = /** @class */ (function () {
    function Autocomplete() {
    }
    Autocomplete.autocomplete = function (search, items, maxResult) {
        return items.filter(function (f) { return f.toLowerCase().includes(search.toLowerCase()); }).slice(0, maxResult);
    };
    return Autocomplete;
}());
exports.Autocomplete = Autocomplete;
