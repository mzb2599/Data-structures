//Check if the given array has two elements that sum upto a number

function hasTargetSum(array, target){
    //Set first pointer to start of array and another to end of it
    let left=0;
    let right=array.length-1;
    while(left<right){
        let sum= array[left]+array[right];
        if(sum===target) return true
        else if(sum > target) right--
        else left++
    }
    return false
}

let test1=hasTargetSum([1,3,5,7,11],16)
console.log(test1);
let test2=hasTargetSum([2,3,6,7,11],10)
console.log(test2);

