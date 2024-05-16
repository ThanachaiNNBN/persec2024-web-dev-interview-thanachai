"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1_1 = require("./point-1");
var point_2_1 = require("./point-2");
var point_3_1 = require("./point-3");
var point_4_1 = require("./point-4");
// ข้อที่ 1;
console.log(point_1_1.Color.HexToRgb("#FF9933")); // => { r: 255, g: 153, b: 51 }
console.log(point_1_1.Color.HexToRgb("#ff9933")); // =>{ r: 255, g: 153, b: 51 }
console.log(point_1_1.Color.HexToRgb("#FFF")); // =>{ r: 255, g: 255, b: 255 }
console.log(point_1_1.Color.HexToRgb("#000")); // =>{ r: 0, g: 0, b: 0 }
// ข้อที่ 2;
console.log(point_2_1.Sort.descending(["TH19", "SG20", "TH2"]));
// ["TH19", "SG20" , "TH2"] => [ "SG20" , "TH2", "TH19",]
console.log(point_2_1.Sort.ascending(["TH10", "TH3Netflix", "TH1", "TH7"]));
//  ["TH10", "TH3Netflix" , "TH1", "TH7"] => [ "TH1", "TH3Netflix" , "TH7", "TH10"]
// ข้อที่ 3;
var reverseEncoder = new point_3_1.ReverseEncoder();
console.log(reverseEncoder.encode("Hello world")); //=> "dliow Svool"
console.log(reverseEncoder.decode("dliow Svool")); //=> "Hello world
// ข้อที่ 4;
console.log(point_4_1.Autocomplete.autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2));
// => [ 'Mother', 'Think' ]
