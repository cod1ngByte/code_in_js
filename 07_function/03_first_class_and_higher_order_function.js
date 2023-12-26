/*
     --> first class function enables us to write the higher order function
     --> in js function are simply values, ie.
          1. function are just another type of non-primitive values.

          2. function can be store in variables or in properties
               
               const add = (a,b) => a+b;
               const counter = {
                         val : 23;
                         inc : function(){
                                   this.value++;
                         }
               }


          3. function can be passed as argument to other function

               const greet = function(){
                    console.log('hi');
               }
               btnClick.addEventListener('click',greet);


          4. function can return from another function

               

*/

/*
     Higher order function are function that receives another functions as argument,
     that returns a new function or both.

     const greet = ()=>{
          console.log('hi');
     }
     btnClick.addEventListener('click',greet);
     
     here addEventListener() is a higher order function
     greet is a call back function, this greet function is executed once btn is clicked note before that

     
     const  count = function(){ //higher order function
          let counter = 0;
          return function(){ //returned function
               counter++;
          }
     }
     const f1 = count();
     f1();
*/
