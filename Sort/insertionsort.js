//Insertion sort

function insertionSort(arr){
    //start from the second element
    //the first element is considered sorted
    var i, len = arr.length, el, j;
    //loop through the array
    for(i = 1; i<len; i++){
    //store the current element
    //this will be inserted into the correct position
      el = arr[i];
      j = i;
      //loop through the sorted part of the array
      //and insert the element in the correct position
      while(j>0 && arr[j-1]>el){
          arr[j] = arr[j-1];
          j--;
       }
       //insert the element
       arr[j] = el;
    }
    return arr;
}

console.log(insertionSort([5,3,8,4,2]));