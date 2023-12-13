// IIFE function which is executed as soon it is defined and
// it also used  so that we can avoid polluting the global namespace
//two type of iife  1. named iife  2. unamed iife
//we can write more than one iife in same file by ending the first iife with semicolon
//we can even pass value in iife same as we do in normal function

/*
function dbConnect(){
    console.log('DB connected');
}
dbConnect(); // problem is global namespace or variable is polluted
*/

(function dbConnect() {
  console.log(`DB Connected`);
})();

(() => {
  console.log(`DB Connected`);
})();

((name) => console.log(`DB connected ${name}`))("cod1ngByte");

const fnName = (function (str) {
  console.log(`hello ${str}`);
})("hi");
