//import { pro, sum as add, mul } from "./script2.js";  //sum as add if you want to change name

import welcome from "./script3.js";  //from default here you can change name or it can be original name no matter.

//namespaces
import * as calc from "./script2.js"; //use this when in that file many functions are used.

const text = document.querySelector('.comming-text');

let API = 'https://jsonplaceholder.typicode.com/todos/1';

calc.pro(API)
.then((res) => 
   text.addEventListener("click", function(){
   console.log(res.title);
}
))
.catch((error)=>
console.log(error));


// console.log(add());
console.log(calc.mul());

console.log(welcome());