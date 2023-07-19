
// 6. get data from another file
/*
var fileone = require('./fileone');
//console.log(fileone);
//console.log(fileone.x);
console.log(fileone.c());
*/


// 1. First print data
//console.log('subcribe');

// 2. Assign the value and sum the values
/*
var int_a = '10';
var int_b = 20;
var int_c = 30;
console.warn(int_a + int_b + int_c);
*/


// 3. Const variable and if and else condition
/*
const int_x = 30;
int_x = 90;
console.log(int_x);
if(int_a === 10){
    console.log('value match');
}else{
    console.log("value does not match");

}
*/

// 4. Loop 

/*
for(i=0;i<=10;i++){
    console.log(i);
}
*/

// 5. Array make 

/*
var arraymake = [1,2,3,4,5,67,7,11,];
console.log(arraymake);
console.log(arraymake[4]);
*/

// 7. Filter function
/*
const makearray = [1,2,3,4,5,6,6,78,23,];
//console.log(makearray);

//const anotherArray = makearray.filter(value => value > 4);
//console.log(anotherArray);

var checksix = makearray.filter((item) => {
    //console.log(item);
   // return item == 6;
   return item > 4;
});

console.log(checksix);
*/

// const newarray = [1,2,3,4,5,6,7];
// var importnew = newarray.filter


// 8. Package 

// console.log("node file run");

const color = require('colors');

// console.log("hello".red); // only text colorfull 
console.log("package.json".green);


