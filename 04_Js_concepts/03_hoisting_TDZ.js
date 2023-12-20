/*
     hoisting --> variable are move to top of their scope and accessed before its declartaion line
  
                                       HOISTED       INITIAL VALUE               SCOPE
     function declaration -------->      yes           actual function         function | block(in strict mode)
     var variables---------------->      yes           undefined               function
     let and const variables------>      no            TDZ                     block
     function exprsn and arrow --->     -------------depend if used var or let or const----------------


     TEMPORAL DEAD ZONE (TDZ)------------------------------------


      const myName = 'cod1ng'
      if(myaName === 'cod1ng'){
          console.log(`${myName} is a ${job}`); --> ref error cannot access job before initialization.
          const age = 2032 - 1947;              -->  line 14,15,16 is TDZ for job variable.
          console.log(age);
          const job = 'developer';
          console.log(x);               --> ref error x is not defined.
      }

*/

// -------------------------------variables

console.log(me); // undefined
// console.log(job);   TDZ can not access job before initialization
// console.log(year);   TDZ can not access year before initialization

var me = "cod1ng";
let job = "developer";
const year = 2032;

//---------------------------------function

fnDeclaration(); // hoisting in fn declaration
// fnExpression(); // can not access before initialization
// fnArrow(); //can not access before initialization
console.log(fnArrow2); // undefined
// console.log(fnArrow2()); // error fnArrow2 is not a function ---> undefined() -- undefined is not a function.
function fnDeclaration() {
    console.log("hoisting in fn declaration");
}
const fnExpression = function () {
    console.log("fn expressn");
};

const fnArrow = () => {
    console.log("fn arrow");
};

var fnArrow2 = () => {
    console.log("fn arrow2");
};

//--------------------------------------------------------------------------------------------------
/*
variable declared using var can be accessed in browser using global object window as a property 
but let and const cannot 



var x = 10;
let y = 20;
const z = 30;
console.log(x === window.x); // true
console.log(y === window.y); //false
console.log(z === window.z); // false

check in browser not in nodejs environment

*/
