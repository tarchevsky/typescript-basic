"use strict";
// Литеральный тип - кастомный тип, позволяющий ограничить содержание переменной до конкретного значения
let some = 'Some';
function performAction(action) {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
