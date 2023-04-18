"use strict";
let b = 5;
const c = 'Строка';
const d = true;
// const e = b + d; // В typescript сложить цифры у boolean значение не получится
let e = ['ASDF', 'HRT', 'XC']; // Массив строк (число передать не получится)
let f = 3; // Тип, которому можно присвоить любое значение. Использовать не рекомендуется
f = ['asdf', 'af'];
// Типизация функции
function test(a) {
    // Тип аргумента внутри скобок, после скобок показано, что она должна вернуть, если вернуть должно что-то ещё,
    // можно добавить проверку |
    return '';
}
const test2 = (a) => {
    return a * 2;
};
e = e.map((x) => x.toLowerCase()); // Если данные в массиве строк были не типизированы неявно, можно типизировать
// прямо в аргументе функции map
// Работа с объектами
function countCoord(coord) {
    // ? - короткая запись | undefined
}
// Юнион - типы
// Они означают, что входной аргумент может быть разным типом данных
function printIt(id) {
    // console.log(b.toLowerCase()); // Так не получится, потому что надо явно получить тип
    // Делается это через условие c typeof
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        id.toUpperCase();
    }
}
// Работа с массивами
function getSum(a) {
    if (Array.isArray(a)) {
        // В данном куске кода мы проверяем, что a будет массив
    }
}
// Если функция ничего не возвращает, есть тип void
function voidF(a) {
    // Тогда функция ничего не вернет
}
// Или так
const test3 = (a) => {
    return;
};
// Undefined
const u = undefined;
// null
const n = null;
