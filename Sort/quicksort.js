//

function quicksort(array){
    if(array.length <= 1){
        return array;
    }
    var pivot = array[array.length - 1];

    var left=[];
    var right =[];
    for(let i=0; i<array.length-1; i++){
        if(array[i]<pivot){
            left.push(array[i]);
        }
        else{
            right.push(array[i]);
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
}

let a=[ 5, 3, 8, 4, 2];
console.log(quicksort(a)); 