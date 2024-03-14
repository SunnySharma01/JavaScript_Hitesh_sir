// const tinderUser = new Object()            // singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)      //adding two array

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 74,
        email: "h@gmail.com"
    },
    {
        id: 45,
        email: "h1@gmail.com"
    },
    {
        id: 85,
        email: "h2@gmail.com"
    },
]

console.log(users[0].email); 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));               // it's return value of object
// console.log(Object.values(tinderUser));              // it's return value
// console.log(Object.entries(tinderUser));            //return entry in object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    //it's find the value and return true/false.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",                 //JSON FORMAT
//     "price": "free"
// }

[
    {},
    {},                                     //JSON return the value in array in this format
    {}
]


// JSON formatter
//https://randomuser.me/