
let arr = [ 'name1 10', 'name2 20', 'name3 30'];
const lookupKey = "name2";
let find = 0;
// console.log(arr, lookupKey)
for (const element of arr) {
    // console.log(element);
    const lookupValue = element.split(" ");
    // console.log(lookupValue[1]);
    if(lookupValue[0] === lookupKey){
        find ++;
        console.log(lookupValue[1] );
    }  
}
if(find === 0){
    console.log("Not Found");
}
