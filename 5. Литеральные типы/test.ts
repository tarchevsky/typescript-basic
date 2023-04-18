// Литеральный тип - кастомный тип, позволяющий ограничить содержание переменной до конкретного значения

let some: 'Some' = 'Some';

type actionType = 'up' | 'down';

// function performAction(action: actionType): -1 | 1 {
// 	switch (action) {
// 		case 'down':
// 			return -1;
// 		case 'up':
// 			return 1;
// 	}
// }

// Если работать с интерфейсами, можно так

interface ComplexAction {
	s: string;
}

function performAction(action: actionType | ComplexAction) {
	switch (action) {
		case 'down':
			return -1;
		case 'up':
			return 1;
	}
}
