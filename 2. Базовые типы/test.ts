let b: number = 5;
const c: string = 'Строка';
const d = true;

// const e = b + d; // В typescript сложить цифры у boolean значение не получится

let e: string[] = ['ASDF', 'HRT', 'XC']; // Массив строк (число передать не получится)

let f: any = 3; // Тип, которому можно присвоить любое значение. Использовать не рекомендуется
f = ['asdf', 'af'];

// Типизация функции
function test(a: string): string | number {
	// Тип аргумента внутри скобок, после скобок показано, что она должна вернуть, если вернуть должно что-то ещё,
	// можно добавить проверку |
	return '';
}

const test2 = (a: number): number => {
	return a * 2;
};

e = e.map((x: string) => x.toLowerCase()); // Если данные в массиве строк были не типизированы неявно, можно типизировать
// прямо в аргументе функции map

// Работа с объектами

function countCoord(coord: { lat: number; long?: number }) {
	// ? - короткая запись | undefined
}

// Юнион - типы
// Они означают, что входной аргумент может быть разным типом данных
function printIt(id: number | string) {
	// console.log(b.toLowerCase()); // Так не получится, потому что надо явно получить тип
	// Делается это через условие c typeof
	if (typeof id === 'number') {
		console.log(id.toString());
	} else if (typeof id === 'string') {
		id.toUpperCase();
	}
}

// Работа с массивами
function getSum(a: number | number[]) {
	if (Array.isArray(a)) {
		// В данном куске кода мы проверяем, что a будет массив
	}
}

// Если функция ничего не возвращает, есть тип void
function voidF(a: number): void {
	// Тогда функция ничего не вернет
}

// Или так
const test3 = (a: number): void => {
	return;
};

// Undefined
const u: undefined = undefined;

// null
const n: null = null;
