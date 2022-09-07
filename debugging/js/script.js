// console.log();

//2. 

// console.clear();

// console.warn();
// console.error();
// consonle.table();

//console.time and consone.timeEnd


// 1

//  console.log("Hello im here");

//  const name = "hesh";

//  console.log(name);

//  const responseDateOne = [
//     {
//         name: "name",
//         age: "31"
//     },
//     {   name: "email",
//         age:  "29"

//     }
//  ]

//  const responseDateOtwo = [
//     {
//         name: "name",
//         age: "31"
//     },
//     {   name: "email",
//         age:  "29"

//     }
//  ]

//  console.log("responseDateOne",responseDateOne);
//  console.log("responseDatetwo",responseDateOtwo);

//  console.log(1+2);

//  const sum = 2+1;
//  console.log("my " + "name " + "is " +  sum + "Fariad");

//  console.log(`my name is  Fariad ${sum} `);

//  // 2 clear()

//  // console.clear();

//  // 3 console.table();

//  console.log(responseDateOne);
//  console.table(responseDateOne);



// console.time

// console.time(); // this starts the timer
// console.timeEnd(); // this ends the timer 

// function counter(){
//     for(let i = 0; i < 3; i++){
//         console.log(i);
//     }
// }

// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");

// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");

// console.time("myTimer");
// counter();
// console.timeEnd("myTimer");

// 1. 

// function sum(num1 , num2){
//     return num1 + num2;
// }


// let number1 = 10;
// console.log(number1);
// let number2 = 20;


// const total = sum(number1,number2);

// console.log("total:", total);

// create a function which calculate the average of given 3 numbers 
// please name this function getAverage

// function getAverg(num1,num2, num3){
//     return(num1 + num2 + num3) /3;

// }

// let myAverage = getAverg(2, 4, 5);

// console.log("myAvergae: ", myAverage);


// const myArray = [1, 3, 4, 5];

// // creare a function which gets the average of the numbers in this array

// function getArrAverage(arr){
    
//     var total = 0;
//     for(let i = 0; i < arr.lenght; i++){
//         total += arr[i];
//     }

//     const numberOfItemInArr = arr.lenght;
   
//     return total / numberOfItemInArr;
// }
// const resultaverage = getArrAverage(myArray);

// console.log("resultaverage", resultaverage);


// when you mke an API call

// https://catfact.ninja/fact


// function getCatFacts(){
//     fetch("https://catfact.ninja/facts")
//     .then(response  => {
//        return response.json();
        
//     })
//     .then(jsonResponse => {
//         console.log(jsonResponse);
//         console.log(jsonResponse.data);
//         console.log(jsonResponse.links);
//     })
//     .catch(error => {

//     }

//     )
// }

// getCatFacts();


//  async function getCatyFacts(){
//     const response = await fetch("https://catfact.ninja/facts")
//     console.log("response", response);
//     const catFacts = await response.json();
//     console.log(catFacts);
//     console.log(catFacts.data);
//     return response;
    

// }

// getCatyFacts();






