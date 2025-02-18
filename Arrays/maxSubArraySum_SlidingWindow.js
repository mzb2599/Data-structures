//Find the maximum sum of k contiguous elements
// Also known as Sliding window problem

function maxSumArray(array, k) {
  let windowSum = 0;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += array[i];
  }
  for (let i = k; i < array.length; i++) {
    windowSum += array[i] - array[i - k];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum;
}


let maximum = maxSumArray([5, 1, 7, 9, 3, 2, 8, 1, 2], 3);
console.log(maximum);
