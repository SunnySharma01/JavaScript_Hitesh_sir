//A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. In other words, it operates on functions, either by taking them as arguments or by returning them.

// 1 WAY

// Higher-order function that takes a function as an argument
function higherOrderFunction(callback) {
    console.log("Inside the higher-order function");
    callback(); // Invoke the callback function
}

// Callback function passed to the higher-order function
function callbackFunction() {
    console.log("Inside the callback function");
}

// Call the higher-order function and pass the callback function as an argument
higherOrderFunction(callbackFunction);


//2 WAY

// Higher-order function that returns a function
function higherOrderFunction() {
    console.log("Inside the higher-order function");
    return function() {
        console.log("Inside the returned function");
    };
}

// Call the higher-order function to get the returned function
const returnedFunction = higherOrderFunction();

// Call the returned function
returnedFunction();
