/*
In js we have   1. global scope
                2. functional scope
                3. block scope

--> Global scope :      outside of any function or block
                        variable declared in global scope are accessible everywhere.


    
    let accEmail = 'abc@xyz.com';
    let accCity = 'bokaro';
    var accPass = '24fsd3#2';

-------------------------------------------------------------------------------------------------------

--> Functional scope :  variable are accessible only within the function not outside


    function greeting(){
       const firstName = 'cod1ng';
       console.log(`hello ${firstName}, you live in ${accCity}`); //firstName -> function scope
                                                                 // accCity -> global scope 
    }
    // console.log(firstName); --> unable to access becoz of function scope
    // console.log(accCity); --> accessible, global scope

-------------------------------------------------------------------------------------------------------
/*

-->Block scope :        variable accessed only within block
                        however this only happen to only let and const
                        variable declared using var within block end up to the closest function scope.
                        function are block scope in strict mode.                        


    if(accEmail && accPass){
        let phone = 3123;
        var accId = 234234324;
        console.log(phone);
        console.log(accId);
    }                        
    console.log(phone); --> can not be access bocoz of block scope.
    console.log(accId);  --> can be access, var scope end up to  closest function scope. 

    if(true){
        cosnt isMillennial = false;
        const food = 'pizza';
        function sum(a,b){
            return a+b
        }
        sum(2,3); --> accessible
    }
    sum(2,3) --> not accessible in strict mode since it is inside block;
    
*/
// -----------------------------------------------------------------------------------------------------------
/*
const myName = "cod1ng";
function first() {
    const age = 18;
    if (age >= 18) {
        const decade = 3;
        var isMillennail = false;
    }
    //   console.log(isMillennail); //can be accessed here
    //   console.log(decade); -->can not be accessed here becoz of block scope.
    function second() {
        const job = "developer";
        console.log(`${myName} is a ${age} year old ${job}`);
        console.log(isMillennail); // can be accessed here too
    }
    second();
    //   console.log(job); //--> can be accessed only within second function
}
// console.log(isMillennail); //--> can not accessed here, var is function scope of first function
first();
//second(); -->can be accessed inside first funcion block only

*/
// --------------------------------------------------------------------------------------------------------

const a = 10;
f1();
function f1() {
    const b = 20;
    f2();
    function f2() {
        const c = 30;
        f3();
    }
}
function f3() {
    const d = 40;
    console.log(a); // accessible
    // console.log(b); // not accessible
    // console.log(c); // not accessible
    console.log(d); // accessible
}
