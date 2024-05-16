"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.HexToRgb = function (hex) {
        var hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
        if (!hexRegex.test(hex))
            return "Format Error";
        hex = hex.replace(/^#/, '');
        var rgb = {
            r: 0,
            g: 0,
            b: 0
        };
        if (hex.length === 3) {
            rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16);
            rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16);
            rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16);
        }
        else {
            rgb.r = parseInt(hex.substring(0, 2), 16);
            rgb.g = parseInt(hex.substring(2, 4), 16);
            rgb.b = parseInt(hex.substring(4, 6), 16);
        }
        return rgb;
    };
    return Color;
}());
exports.Color = Color;
