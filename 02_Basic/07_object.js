const pubgUser = {};

pubgUser.name = "cod1ngByte";
pubgUser.score = 99;
pubgUser.isLoggedIn = false;
console.log(pubgUser);

//nested object

const user = {
  email: "raj@zy.com",
  fullname: {
    userfullname: {
      firstname: "John",
      lastname: "Doe",
    },
  },
};

console.log(user.fullname);
console.log(user.fullname.userfullname);
console.log(user.fullname.userfullname.firstname);

//merge two object

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = { obj1, obj2 }; //not correct way to merge obj same prob like array in arrayName.push(arryname)
console.log(obj3);

//using Object.assign method
const obj4 = Object.assign({}, obj1, obj2); // merge more than two obj--> Object.assign(target obj, sourceObje1,sourceObj2,..)
console.log(obj4);

//using spread operator

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

//object de-structuring

const course = {
  name: "javascript",
  fee: "free",
  courseInstructorName: "hitesh",
};

const { courseInstructorName: instructor } = course;

console.log(instructor);

/*JSON API 
1. key must be string with no object name
 {
    "key" : value,
    "key" : value
}

2. array of object

[
    {},
    {},
]
*/
