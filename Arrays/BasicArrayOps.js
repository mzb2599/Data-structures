//Basic array operations include insert update delete, search

//Insert in array
let array = [1, 3, 5, 7, 9, 11];

//Insert at the start of the array
array.unshift(13);
console.log(array);
//Output: [13,1,3,5,7,9,11]

//Insert at the end of the array
array.push(15);
console.log(array);
//Output: [13,1,3,5,7,9,11,15]

//Insert at specific position
array.splice(3, 0, 99); // Insert 99 at index 3
console.log(array);
//Output: [  13, 1,  3, 99, 5,7, 9, 11, 15]

//Delete from an array

//Delete from beginning
array.shift();
console.log(array);
//Output: [ 1, 3, 99, 5, 7, 9, 11, 15 ]

//Delete from end
array.pop();
console.log(array);
//Output: [ 1, 3, 99, 5, 7, 9, 11 ]

//Delete from specific position- First parameter is index of position
//Second parameter is number of elements to delete
array.splice(2, 2);
console.log(array);
//Output: [ 1, 3, 7, 9, 11 ]

//Linear search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(array, 5));
console.log(linearSearch(array, 7));

//Binary Search
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === array[mid]) return mid;
    else if (target < array[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
console.log("Binary Search");

console.log(binarySearch(array, 5));
console.log(binarySearch(array, 7));
