const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){           //callback function
//     console.log(val);
// } )



// coding.forEach( (item) => {              //Arrow function
//     console.log(item);
// } )



// function printMe(item){
//     console.log(item);
// }                                       // Write a function and call as reference than it's also work
// coding.forEach(printMe)



// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);          //handle object in forEach loop
} )