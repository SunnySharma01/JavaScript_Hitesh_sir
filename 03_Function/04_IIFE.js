// Immediately Invoked Function Expressions (IIFE)
//Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.


/*(function (){ 
    // Function Logic Here. 
    })();

    ()()     //iife
*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   // NORMAL function in IIFE
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   //Arrow function in IIFE
} )('hitesh')



var result = (function() {
	var x = 10;
	var y = 20;
    console.log(x);
	return x + y;
})();
//console.log(x);   //we will not access the data after IIFE it's safe the data by globel polluting
console.log(result); // Output: 30