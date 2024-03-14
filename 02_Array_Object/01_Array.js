// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr[1]);
 console.log(myArr2[0]);
 console.log(myHeors);

 //Array methods

 myArr.push(6)         //Add element in last of Array
 myArr.push(7)
 myArr.pop()           //Remove last element from Array

 myArr.unshift(9)      //Adding in first index(it's time taking process)
 myArr.shift()         //Remove First index value in array

 console.log(myArr.includes(9));   //It's find the value in array gives the result in true or false
 console.log(myArr.indexOf(3));    //It's gives the index position in array

const newArr = myArr.join()        //It's join the array but it's return string value

 console.log(myArr);
 console.log( newArr);           //String input
 console.log(typeof newArr); 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //it's return the result between the 1-3;

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //Change the original data in aaray
console.log("C ", myArr);
console.log(myn2);