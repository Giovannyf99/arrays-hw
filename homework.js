// 1. Sum the Numbers
// Find the sum of all elements in an array and print to the console.
// let sum = [11, 23, 34, 54, 57];

// let numbers = [11, 23, 34, 54, 57]
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
// console.log(sum) 

// 2. Largest Number
// Find the largest element in an array and print to the console.
// const largest = [5, 7, 2, 4, 9];

// var arr = [5, 7, 2, 4, 9];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);


// 3. Smallest Number
// Find the smallest element in an array and print to the console.
// const smallest = [5, 7, 2, 4, 9];

// let arr = [5, 7, 2, 4, 9];
// let smallest = arr[0];

// for ( i = 0; i < arr.length; i++) {
//     if (smallest > arr[i] ) {
//         smallest = arr[i];
//     }
// }
// console.log(smallest);



// 4. Even Numbers
// For the given array of numbers, print each number in the array that is even.
// const even = [34, 56, 43, 11, 87, 67, 55, 44, 12, 6, 4, 98, 83]

// let number = [34, 56, 43, 11, 87, 67, 55, 44, 12, 6, 4, 98, 83];
// let even =[];
// for(let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0)
//     even.push(number[i])
// }
// console.log(even)

// 5. Positive Numbers
// For the given array of numbers, print each number in the array that is greater than zero.
// const positive = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]

// let numbers = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44];
// let positive = []
 
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0)
//     positive.push(numbers[i])
//     }
// console.log(positive)
// 6. Positive Numbers II
// For the given array of numbers, create a new array which contains every number in the given array which is positive.
// const positive2 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]

// let numbers = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44];
// let p = [];

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] >= 0)
//     p.push(numbers[i])
// }
// console.log(p)

// 7. Given an array of strings, print the ones that start with the letter 'A'.
// const strings = ['Apple', 'Banana', 'Apricot', 'Cherry', 'Avocado'];

// let words = ['Apple', 'Banana', 'Apricot', 'Cherry', 'Avocado'];
// let first = words.charAt(0);
// console.log(first)

// im not sure and moving on to the next problem

// 8. Given an array of strings, print the longest one.
// const strings = ['short', 'longer', 'longest', 'medium'];

// const longestString = arr => arr.reduce((base,element) => element.length > base.length ? element : base);
// console.log(longestString(['short', 'longer', 'longest', 'medium']));
// definetly did not figure this out from https://www.youtube.com/watch?v=5JHeSAAyIS0 

// 9. Multiply a array
// For the given array of numbers, and a factor of 5, create a new array consisting of each of the numbers in the array multiplied by the factor. Print this array.
// const positive2 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]

// let first = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ];
// let second = first.map(x => x * 5);

// console.log(second)

// 10. Reverse a String
// Given a string, print the string reversed. For example, reverse the string "Hello World".



// 11. Multiply Vectors
// Given two arrays of numbers of the same length, create a new array by multiplying the pairs of numbers in corresponding positions in the two arrays. Example:
// [2, 4, 5] x [2, 3, 6] = [4, 12, 30]



// 12. Matrix Addition
// Given two two-dimensional arrays of numbers of the size 2x2 two dimensional array is represented as an array of arrays:
// [ [2, -2],
//    [5, 3] ]