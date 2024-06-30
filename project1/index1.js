//Take 10 numbers as input and print whether each number is positive or neg.

let array  = [25,-65,13,-99,1.1,-5,0.001,-.258,55]

// array.map((num) => {
//     if (num > 0){console.log(`${num} is positive`)}

//     else {console.log(`${num} is negative`)}
// })

const positiveNum = array.filter(num => num > 0)
console.log(positiveNum)
console.log(positiveNum.length)

const negativeNum = array.filter (num => num < 0)
console.log(negativeNum)
console.log(negativeNum.length)