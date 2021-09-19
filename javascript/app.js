// let arr2 = arr.map((item) => item * 2);
// console.log(arr2);
// Array.prototype.map
// Implement array.map
Array.prototype.mapArray = function (fn) {
  let newArr = this;
  for (let index = 0; index < newArr.length; index++) {
    newArr[index] = fn(newArr[index]);
  }
  return newArr;
};
let arr = [1, 2, 3, 4, 5];
const b = arr.mapArray((item) => item * 5);
console.log("arr", arr);
console.log(b);
