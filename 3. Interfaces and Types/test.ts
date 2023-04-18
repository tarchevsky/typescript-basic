// Types разгружают функции. Это очень похоже на переменные
// Также types и interfaces помогают работать с большим количеством данных и объектами
type Point = {
	x: number;
	y: number;
};

type StringOrNumber = string | number;

function print(coors: Point, coors2: StringOrNumber) {
	console.log(0);
}

// Interface очень похожи
// В большинстве случаев рекомендуют использовать interface.
// type рекомендуют использовать с простыми типами, типа StringOrNumber (или) и в литеральных типах из следующих материалов

interface IPoint {
	x: number;
	y: number;
}

// Interface могут extend других интерфейсов

interface I3DPoint extends IPoint {
	z: number;
}

function print2(coors: IPoint) {
	console.log(0);
}

// Types могут так только при использовании intersection

type D3Point = Point & {
	z: number;
};

// Types не могут добавлять свойства
interface Test {
	a: number;
}

interface Test {
	b: number;
}

// В итоге в имплементированном interface будут оба эти значения a и b

// А type так не могут и выдают ошибку

// type TTest = {
// 	a: number;
// };

// type TTest = {
// 	b: number;
// };

// Каст типов

const cast = (point: IPoint) => {
	const d: I3DPoint = point as I3DPoint;
};

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;
