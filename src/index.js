import { xhr } from './json.js';
import { xhr1 } from './weather';

let start = '{"favColor":"Orange", "favSeason":"Fall"}';
let theData1 = '{"first":"Einars", "last":"Vilnis", ' +  
  '"city":{"county":{"area":"midlands", "region":"east"}, "country":"UK"}}';
let myObject = JSON.parse(theData1);
console.log(myObject);

let names = document.querySelectorAll('.placeholder');
for(let value of names){
  value.innerHTML = myObject.city.county.area;
}

var myString = JSON.stringify(myObject);
console.log(myString);


