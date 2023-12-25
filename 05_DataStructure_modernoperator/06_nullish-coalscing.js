/*
the right-hand side expression is not evaluated
if the left-hand side proves to be neither null nor undefined.

*/

console.log("" ?? "js"); // '' , treat '' string as true
console.log(0 ?? "js"); // 0, treat 0 as true
console.log(NaN ?? "js"); //NaN, treat NaN as true
console.log(undefined ?? "js"); // js
console.log(null ?? "js"); // js
