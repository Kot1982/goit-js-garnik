// 1.
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// // Result: ["a", "b", "c", 0, 1, 2, 3];

// 1.1
// const result = a.concat(c, b[0], b[1]);
// console.log(result)

// 1.2
// const d = [b[0]].concat(b[1]);
// console.log(d)


// 2.
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// // Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// 2.1
// const x = ["a", "b", "c"];
// const y = ["g", "h"];
// const z = x.concat(x, y);
// console.log(z);

// 2.2
// const b = a.splice(0, 3);
// const c = a.splice(-2)
// const d = [...b, ...b, ...c]
// console.log(d);

// 2.3
// a.splice(3, 3, a[0], a[1], a[2]);
// console.log(a)

// 2.4
// const b = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];
// console.log(b)

// 2.5
// const b = a.copyWithin(3, 0, 3)
// console.log(b)


// 3.
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// 3.1
// a.splice(5, 3, 0, 0, 0);
// console.log(a)

// 3.2
// a.fill(0, 5, 8)
// console.log(a)


// 4.
// const a = [1, 2, [3, 4], [5, 6], 7];
// // Result: [1, 2, 3, 4, 5, 6, 7]

// function arraySpread(array) {
//     let newArray = [];
//     for (let number of array) {
//         let num = 0;
//         if (Array.isArray(number)) {
//             newArray.push(...number);
//             console.log(num);
//         } else {
//             newArray.push(number);
//         }
//     }
//     return newArray
// }

// console.log(arraySpread(a));


// 5.
// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.

// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// 5.1
// function convert(...array) {
//     let newArray = [];
//     for (let element of array) {
//         if (typeof element === "number") {
//             newArray.push(String(element));
//         }
//         else {
//             newArray.push(Number(element));
//         }

//     } return newArray;
// }
// console.log(convert('1', 2, 3, '4'));

// 5.2
// function convert(...array) {
//     let newArray = [];
//     for (let element of array) {
//         typeof element === "number" ? newArray.push(String(element)) : newArray.push(Number(element));

//     }
//     return newArray;
// }
// console.log(convert('1', 2, 3, '4'));

// 6.
// Write a function which creates an array from the given range of numbers
// // makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// // makeListFromRange([8, 5]) // [5, 6, 7, 8]
// Write a function which creates an array from the given range of number
// // makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// // makeListFromRange([8, 5]) // [5, 6, 7, 8]

// 6.1
// function makeListFromRange(array) {
//     let newArray = [];
//     if (array[0] > array[1]) {
//         for (let i = array[0]; i >= array[1]; i -= 1) {
//             newArray.push(i);
//         }
//     } else {
//         for (let i = array[0]; i <= array[1]; i += 1) {
//             newArray.push(i);
//     }
//     }
//     return newArray;
// }
// console.log(makeListFromRange([2, 7]));
// console.log(makeListFromRange([8, 5]));

// 6.2
// function makeListFromRange(array) {
//     let newArray = [];
//     const [a, b] = array[0] <= array[1] ? array : [array[1], array[0]];
//     for (let i = a; i <= b; i += 1) {
//         newArray.push(i);
//     }
//     return newArray;
// }

// console.log(makeListFromRange([2, 7]));
// console.log(makeListFromRange([8, 5]));

// 7.
// ---------------------------------------------------------------------------
// --------------------------------------------------------------------------
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// function userInfo(array) {
//   const allUser = {};
//   const keys = Object.keys(array[0]);
//   for (const key of keys) {
//     allUser[key] = [];
//   }
//   for (const key in allUser) {

//     for (const user of array) {
//       allUser[key].push(user[key]);
//   }
// }
//   console.log(allUser);
// }
// userInfo(users);

// в ключі записати пврвметри, щоб не аовторювались 