import { pro, sum, mul } from "./script2.js";

const text = document.querySelector('.comming-text');

let API = 'https://jsonplaceholder.typicode.com/todos/1';

pro(API)
.then((res) => 
   text.addEventListener("click", function(){
   console.log(res.title);
}
))
.catch((error)=>
console.log(error));


console.log(sum());
console.log(mul());