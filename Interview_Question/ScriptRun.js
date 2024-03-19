//How does javascript execute code + call stack

let val1 = 50;
let val2 = 5;
function addnum(num1,num2){
    let total =num1+num2;
    return total;
}
let result1 = addnum(val1,val2);
let result2= addnum(12,5);
console.log(result1);
console.log(result2);


//L-25
/*
JavaScript is a synchronous (Moves to the next line only when the execution of the current line is completed) and single-threaded (Executes one command at a time in a specific order one after another serially) language.

JavaScript code gets executed internally, we have to know something called Execution Context and its role in the execution of JavaScript code.

an Execution Context has two components and JavaScript code gets executed in two phases.

Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder.
            val1=undefined;
            val2-undefined;
            addnum=defination;
            result1=undefined;
            result2=undefined;

Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context. 


Call Stack: When a program starts execution JavaScript pushes the whole program as global context into a stack which is known as Call Stack and continues execution. Whenever JavaScript executes a new context and just follows the same process and pushes to the stack. When the context finishes, JavaScript just pops the top of the stack accordingly.(LIFO)last in first out


Call Stack

When JavaScript completes the execution of the entire code, the Global Execution Context gets deleted and popped out from the Call Stack making the Call stack empty.


//https://www.geeksforgeeks.org/javascript-code-execution/

*/

// run this program in chrome

function one(){
console.log("one");
two();
}
function two (){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}
one();
two();
three();

