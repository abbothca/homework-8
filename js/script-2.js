"use strict";


//Приклади роботи функції
console.log("multiply(5)(5) = ", multiply(5)(5))		              // 25
console.log("multiply(2)(-2) = ", multiply(2)(-2))	                  // -4
console.log("multiply(4)(3) = ", multiply(4)(3))		              // 12
console.log("multiply(4)(3) = ", multiply(4)(3))		              // 12
console.log("multiply(4)(null) = ", multiply(4)(null))		          // 0
console.log("multiply(4)(NaN) = ", multiply(4)(NaN))		          // NaN
console.log("multiply(4)(undefined) = ", multiply(4)(undefined))	  // NaN
console.log("multiply(4)() = ", multiply(4)())		                  // NaN
console.log("multiply()(3) = ", multiply()(3))		                  // NaN
           

//лишила назви агрументів a, b - бо так було в умові завдання. Взагалі б написала firstNumber, secondNumber
//якби планували працювати з аргументом - можна було б його запам'яати (const product = a;), але в цьому випадку, це зайве
//повернемо функцію, яка очікує аргумент b і поверне добуток a * b
function multiply (a) {
    return (b) => a * b;
}
