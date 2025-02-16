
// const arr = [1, 5, 3, 9, 2];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);

const arr = [1, 5, 3, 9, 2];

const max = arr.reduce((max, current) => (current > max ? current : max), arr[0]);

console.log(max); 

