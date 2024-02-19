"use strict";

//Приклади роботи функції
console.log("addThemAll(2,4) = ", addThemAll(2,4)); // 6
console.log("addThemAll(1,2,3,4) = ", addThemAll(1,2,3,4)); // 10
console.log("addThemAll(5,5,10) = ", addThemAll(5,5,10)); // 20
console.log("addThemAll(5,5,10, 1, 4, 6, 1) = ", addThemAll(5,5,10, 1, 4, 6, 1)); // 32
console.log("addThemAll(5) = ", addThemAll(5)); // 5
console.log("addThemAll() = ", addThemAll()); // 0
console.log("addThemAll(null) = ", addThemAll(null)); // 0
console.log("addThemAll(undefined) = ", addThemAll(undefined)); // NaN
console.log("addThemAll(NaN) = ", addThemAll(NaN)); // NaN

function addThemAll (...numbers) {    //оголошуємо функцію, усі аргументи передаємо як залишкові параметри
    return numbers.reduce((accumulator, currentNumber) => accumulator += currentNumber, 0) //повернемо результат застосування до масиву вхідних даних методу .reduce (в акумуляторі накопичимо суму)
}