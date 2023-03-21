// given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6

function binary(arr,target){
let leftIndex = 0;
let rightIndex = arr.length-1;
console.log("leftx",leftIndex);
console.log("righty",rightIndex);

while(leftIndex <= rightIndex){
    console.log("leftx",leftIndex);
    console.log("righty",rightIndex);
   let middle = Math.floor((leftIndex+rightIndex)/2);
   if (arr[middle] === target){
    return middle;
   }
   else if(arr[middle]>target){
    rightIndex = middle - 1

   }
   else{
    leftIndex = middle + 1
   }
}
return null

}
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    let middle = Math.floor(arr.length / 2);
    let leftIndex = arr.slice(0, middle);
    let rightIndex = arr.slice(middle);
  
    return merge(mergeSort(leftIndex), mergeSort(rightIndex));
  }

let num = [45,12,6,89,2,5];
let target = 6;
console.log(binary(num,target));


// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
  
    while (left.length && right.length) {
      if (left[0] >= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return [...result, ...left, ...right];
  }
  
  let arr = [123, 89, 5, 23, 9, 56];
  arr = mergeSort(arr);
  console.log(arr); 
  



//   Given the following array, search for the following target
//   let target = 34
//   let arr2 = [1,4,78,2,67,3];


    function findTarget(arr, target) {
        arr = mergeSort(arr);
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) {
            return mid;
          } else if (arr[mid] < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return null;
      }
      
      function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
      
        return merge(mergeSort(left), mergeSort(right));
      }
      
      function merge(left, right) {
        let result = [];
      
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            result.push(left.shift());
          } else {
            result.push(right.shift());
          }
        }
      
        return [...result, ...left, ...right];
      }
      
      let target2 = 34;
      let arr2 = [1, 4, 78, 2, 67, 3];
      let index = findTarget(arr2, target);
      console.log(index); 

