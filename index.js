'use strict';
const {MyMath} = require('./MyMath.js');


//const importedModule = require('./Phone.js');
const {Sum2, data} = require('./Phone');


console.log('test');

const result = MyMath.sum(10,15,74);

const resultSubtract = MyMath.subtract(48,95,13);

console.log(resultSubtract);

console.log(result);

console.log(data);

const resultSum = Sum2.func(2,3);
console.log(resultSum);
