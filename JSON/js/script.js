// JSOn

// 1. JAVAScript to JSON

// JSON.stringify()

// example 1 

// const userDetails = {
//     name: "Fariad",
//     id: 1234,
//     isStudent: true,
//     section: "Front -end Deevelopment"
// };

// // console.log("userDetails JS format", userDetails);

// const userDataJSON = JSON.stringify(userDetails);

// console.log("userDataJSON JSON format", userDataJSON);

// //JSON.parse() convert data to JS  format

// const userDataBackToJS = JSON.parse(userDataJSON);

// console.log("userDataBackToJS", userDataBackToJS);

// // create a JSON data object it to JS

const myObjectJSON = 
    `{"name": "Farida", "id": 1234, "isStudent": false}`;

    const myObecjtJS = JSON.parse(myObjectJSON);
    console.log("myObecjtJS", myObecjtJS);