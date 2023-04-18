class PointClass {
	// private x: number; // Поле будет приватным (ключ private), можем использовать внутри объекта и конструктора, но снаружи оно не будет доступно
	readonly x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	// private func() {
	// 	this.x = 10
	// }

	// Ключ protected защищает внутренний метод класса от
	protected a() {

	}
}

// При компиляции будет выпадать ошибка, что x и y не инициализированы
// чтобы class работал как interface, надо в tsconfig.json сделать false строчку `"strictPropertyInitialization": false,`
// Либо поставить после x (или y) и перед : - знак !

// const point = new Point(0, 0);
// point.x = 1;

// console.log(point.y); // 0

// Как экстендить один класс от другого

class D3PointClass extends PointClass {
	z: number;
	constructor(x: number, y: number, z: number) {
		super(x, y);
		this.z = z;
		this.a
	}

	// Мы можем переопределять методы 
}

const point = new D3PointClass(1, 1, 1);
point.