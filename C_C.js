// "use strict";

// function soundMaker(sound, times) {
//   //closure
//   function makeSound() {
//     console.log('${sound}');
//   }
//   for(let i = 0; i < times; i++) {
//     makeSound();
//   }
// }

// soundMaker("woof", 5);



function summation(arr) {
  let sum = 1;
  //closure
  function summer() {
    for(let i = 0; i < arr.length; i++){
      sum*= arr[i];
    }
  }

  summer();

  return sum;
}

console.log(summation([1,2,3,4]));
