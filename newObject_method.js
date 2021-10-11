"use strict";

const obj = {
    a: 1,
    b: 2,
    c: 3
};

// const copyObj = {};


// Способ №1 через цикл for in

// function copyObject(box) {   
//     let key;
//     for (key in box) {
//         copyObj[key] = box[key];
//     }
//     return copyObj;
// }

// copyObject(obj);
// copyObj.a = 0;

// console.log(obj);
// console.log(copyObj);


// Способ №2 через метод .assign

// const copyObj = Object.assign({}, obj);

// copyObj.a = 0;

// console.log(obj);
// console.log(copyObj);

// Способ №3 через метод .slice


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'z';

// console.log(newArray);
// console.log(oldArray);

// Способ №4 через разворот (...)

// const objCopy = {...obj};