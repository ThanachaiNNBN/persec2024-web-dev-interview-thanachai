
import { Color } from "./point-1";
import { Sort } from "./point-2";
import { ReverseEncoder } from "./point-3";
import { Autocomplete } from "./point-4";


// ข้อที่ 1;
console.log(Color.HexToRgb("#FF9933")); // => { r: 255, g: 153, b: 51 }
console.log(Color.HexToRgb("#ff9933")); // =>{ r: 255, g: 153, b: 51 }
console.log(Color.HexToRgb("#FFF"));    // =>{ r: 255, g: 255, b: 255 }
console.log(Color.HexToRgb("#000"));    // =>{ r: 0, g: 0, b: 0 }


// ข้อที่ 2;
console.log(Sort.ascending(["TH19", "SG20" , "TH2" ]))
// ["TH19", "SG20" , "TH2"] => [ "SG20" , "TH2", "TH19",]
console.log(Sort.descending(["TH10", "TH3Netflix" , "TH1", "TH7"]))
//  ["TH10", "TH3Netflix" , "TH1", "TH7"] => [ "TH1", "TH3Netflix" , "TH7", "TH10"]


// ข้อที่ 3;
const reverseEncoder = new ReverseEncoder()
console.log(reverseEncoder.encode("Hello world")) //=> "dliow Svool"
console.log(reverseEncoder.decode("dliow Svool"))  //=> "Hello world


// ข้อที่ 4;
console.log(Autocomplete.autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2));
// => [ 'Mother', 'Think' ]