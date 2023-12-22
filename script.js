//!Topics
//* What is JS Modules
//* How to do import an export
//* What is named(Aliases) export and default export
//* how to Combine modules together
//* What is namespace
//* How to do Dynamic import using Promises

//* Read more about -Tree Shaking-


//import { pro, sum as add, mul } from "./script2.js";  //sum as add is called as Aliases

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

//Combine

// import * as com from "./combine.js";

// console.log(com.file1.square(10));
// console.log(com.addNumbers(1,2));
// console.log(com.isEven(2));
// console.log(com.file1.capitalizeString("modules"));

//dynamic
// const pro = await import("./combine.js");

// console.log(pro.addNumbers(1,2));
// console.log(pro.file1.generateRandomNumber(3,4));
// console.log(pro.file1.greet("JS"));

const pro2 = Promise.all([await import("./file1.js"), await import("./file2.js")]);

pro2.then(
   (res)=>{
     console.log(res[1].greetInSpanish("Amigos"));
     console.log(res[0].square(5));
   }
)