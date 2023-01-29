/*
what is variable?
    variable is simply the name of a storage location.

type of variable?
   variable 2 type
      1. global
      2. local or functional
*/

let welcome = () => {
   console.log('Hello World!');
};

let functionName = "welcome";



// let number1 = 42;
// let number2 = 58;
// let number3 = 38;

// if (number1 > number2 || number1 > number3) {
//    console.log("number1 is lergest number");
// }
// else if (number2 > number3) {
//    console.log("number2 bro songkah");
// }
// else {
//    console.log("number3 hobe bro")
// }


// const array2 = ["a", "b", "c"];
// for (const str of array2.reverse()) {
//   console.log(str)
// }

// let array = [ "a", "b", "c" ];
// // print each element in the array
// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// var arr = ["adnan", "hassan", "joy", "mahadi"];
 
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

var arr = ["nokia", "mi", "redmi", "vivo"];
//  while loop
 let i= 0;
 while(i < arr.length)
 {
     console.log(arr[i]);
     i++;
 }