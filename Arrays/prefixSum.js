function prefixSum(array){
    let prefix= new Array(array) 
    prefix[0]=array[0]
    for (let i = 1; i < array.length; i++) {
        prefix[i] = prefix[i-1]+array[i];   
    }
    return prefix
}

function rangeSum(array, left, right){
    return left===0 ? prefix[right]: prefix[right] - prefix[left-1]
}

console.log(prefixSum([1,3,5,7,9]))

let prefix=prefixSum([1,3,5,7,9])

console.log(rangeSum(prefix, 1,3));

