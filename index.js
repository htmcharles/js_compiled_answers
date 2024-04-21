const arr=[6,6,2,3,6,8];
const arr2=[5,2,4,8];
const arr3=arr.filter((value)=> arr2.includes(value));
// for (let index = 0; index < arr.length; index++) {
//     if (arr2.includes(arr[index])) {
//         arr3.push(arr[index]); // Add the common element to arr3
//     }
    
// }

console.log(arr3);