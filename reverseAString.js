
const s = "hello"
// let reverseString = "";
// for (let i = s.length - 1; i >= 0; i--) {
//     reverseString += s[i];
// }
// console.log(reverseString);

const reverseString = [...s].reverse().join('');
console.log(reverseString);
