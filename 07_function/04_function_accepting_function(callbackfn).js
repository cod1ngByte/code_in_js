const oneWord = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
};
const upperFirstWord = function (str) {
    const [first, ...rest] = str.split(" ");
    return [first.toUpperCase(), ...rest].join(" ");
};

const transformation = function (str, fn) {
    console.log(`Before transformation : ${str}`);
    console.log(`After Transformation : ${fn(str)}`);
    console.log(`transformed by ${fn.name}`); //name of the function from which it has been called
};
transformation("Javascript is the programming lang", upperFirstWord);
transformation("Javascript is the programming lang", oneWord);

/*
     const greet = function(){
          console.log('hi);
     }
     document.body.addEventListener('click',greet);
     //greet function is executed only when click happend in body of document page.

     
*/
