// example 1 destructing
// dessctruct from objects

// const { } = objectName;

//example 2

// const person = {
//     firstName: "Fariad",
//     lastName: "Yousef",
//     country: "Mars"
// }

// const firstName = person.firstName;
// const lastName = person.lastName;
// person.country = person.country;


// const gretting = `hello im ${person.firstName} ${person.lastName} and im from ${person.country} `

// console.log(gretting);

// here use f destructing 

// const person = {
//     firstName: "Fariad",
//     lastName: "Yousef",
//     country: "Mars"
// }

// const {firtName, lastName,country} = person;
// const greeting = `hello i am ${firtName} ${lastName} and i am from ${country}`
// console.log(greeting);

// function greetUsers(userObject){
//     const{firstName,country} = userObject
//     console.log(`helo ${firstName} from ${country} welcome`);
// }

// const  user = {
//     firstName: "Fariad",
//     country: "Mars",
//     age: "31",
//     email: "farida@hotmail.com"
//  }

//  greetUsers(user);



// new way

//  function greetUsers(firstName, country){
//     const{firstName,country} = 
//     console.log(`helo ${firstName} from ${country} welcome`);
// }
//__________


// destructing in arrays

const people =[
    {
        name: "Fariad",
        age: "31",
        score: 10
    },

    {
        name: "Chris",
        age: "31",
        score: 3
    },

    {
        name: "Christina",
        age: "31",
        score: 9
    },
    {
        name: "Hesham",
        age: "31",
        score: 19
    }

]

// rule condition score >= 5

// const winners = people.filter((currentItem) => {
//     if(currentItem.score >= 5){
//         return true;
//     }
// });

// console.log(winners);

//destructing way

const winners = people.filter(({score}) => {
    if(score >= 5){
        return true;
    }
});

console.log(winners);


// destruc from array

// const [
//     // values here
// ] = arrayName;

// const [value1, value2] = arrayName;

// example  destructing arrays 
  //                    0   1  2    3   4   5  indexes
// const streetNumbers = [12, 30, 40, 50 ,1, 54];

// // `x` it will be the index of 0
// // `y` it will be the index of 1

// const [x, y] = streetNumbers;
// console.log(x, y);

// create a string array of names which contains 4 names and then desctruct of first three names

// const names = ["Fariad", "Hesh", "kevin", "Uzo", " Yasmin", " Aladdin"]

// const [x, y,t, ...others] = names;
// console.log(x, y, t);
// console.log(others);
//__________

// destructing skip

// const values = [3, 4 , 56, 7, 2];

// const[value0, , value2, , value5] = values

// console.log(value0,  value2, value5);

//__________


const myCat = {
    name: "pet",
    age: "10",
    typerr: "Egyptian mav"
}

const {name, age, typerr:breed} = myCat;
console.log(`my cat nameis ${name} nd the age ofmy cat is ${age} and type is ${breed}`);
