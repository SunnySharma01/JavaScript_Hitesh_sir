const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`${name} ${repoCount}`);  // adding string new way

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));   //find the character in sentence
console.log(gameName.indexOf('t'));  //find the position in sentence

const newString = gameName.substring(-8, 4) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

console.log(newString);
const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"

console.log(str.substring(-5, 2)); // "Mo"
console.log(str.substring(-5, -2)); // ""



const anotherString = gameName.slice(0, 4) //slice(indexStart, indexEnd) last index is not included
console.log(anotherString);
/*
              indexStart        indexEnd
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| T | h | e |   | m | i | r | r | o | r |

                  m   i   r   r
                 _______________
                      ↑
                    Result
                    
*/

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  //delete the white space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // replace the first word with another word

console.log(url.includes('sundar'))  //find the words is available aur not

console.log(gameName.split('-'));    //remove this symbol and break in words
let str1="A phrase is a group of words that works together in a sentence but does not contain a subject or a verb or words."
console.log(str1.indexOf('words',30));  //find the position in sentance after 30 index
console.log(str1.lastIndexOf('a'));  ////find the position in sentance from last

const a="sunny"
const b="kumar"
console.log(a+" "+b);
 console.log(a.concat(" "+b)); //adding two string



