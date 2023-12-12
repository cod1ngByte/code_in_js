/*
1. variable is a tag name given to a memory location where you can store a value(data)
   and use it as a part of any experssion(expression is nothing but piece of code that 
                                          produces value).
2. We can define variable in js by using any of 3 keyword --> var || let || const
      eg.   const accountId = 134325232;
            let accountEmail = 'abc@xyz.com'
            var accountPass = ' 235kjfljs'

3. we can create  varaible without using any keyword but make sure it is not strict mode.
      eg.
            accountCity = 'Bokaro'

4. VARIABLE CONFIGURATION IN JS COMPRISES OF 3 PHASES:-
   1 Declaraion          --> var x;
   2 Assignment          --> x = 20;       
   3 Initialization      --> var y = 10; (declaration + assignment)

5. variable naming rule :--
      variable should contain only uppercase or lowercase alphabet, digit, underscore and $.
      it should not start with digit.
      should not use reserved keyword as variable name (like let const var )
6. variable naming convention :--
      variable name must be meaningful  --> const x = 10 better way--> const age = 10;
      use camelcase                     --> const firstName = 'spiderman'
      avoid underscore at starting        
      for constant use uppercase only.  --> const PI = 3.145;
*/

const accountId = 13432;
let accountEmail = "abc@sc.com";
var accountPass = "dfjs324";
accountCity = "Bokaro";

//will assign new value to variable.

// accountId = 234;
// console.log(accountId); --> error assignment to constant not possible

accountEmail = "spider@abc.com";
accountPass = "ladjkf";
accountCity = "Delhi";
console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);

//we can also display in tabular format
console.table([accountId, accountEmail, accountPass, accountCity]);
