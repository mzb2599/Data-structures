//maximum sub Array sum

function maxSubArray(array) {
  let currentSum = array[0];
  let maxSum = array[0];
  for (let i = 1; i < array.length; i++) {
    currentSum = Math.max(array[i], currentSum + array[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
