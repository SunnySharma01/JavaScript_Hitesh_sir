/*
Stack Memory(Primitive data types)(call By Value)(Copy of value)
1.String
2.Number
3.boolean
4.Null
5.Undefined
6.Symbol
7.BigInt


Heap Memory(Non-Primitve)(call By Reference)(change in original value)
1.Array
2.Object
3.Function
*/

//(Primitive data types Example)

let myname = "sunny"
let Fullname = myname
Fullname ="sunny_kumar"
console.log(myname);
console.log(Fullname);


//(Non-Primitve) Example

let userOne ={
    email : "sunny.kumar@google.com",
    upi : "user@ybl"
}                    
let userTwo=userOne
userTwo.email="sunny@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);