// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку.
// Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
// 1.Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// 2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// 3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// 4. Создать экземпляры каждого прибора;
// 5. Вывести в консоль и посмотреть результаты работы, гордиться собой :)

// Общие требования:
// 1. Имена функций, свойств и методов должны быть информативными
// 2. Соблюдать best practices:
//      использование camelCase нотации для переменных и методов,
//      PascalCase для названия функций-конструкторов и классов;
//      информативные имена (а не a, b);
//      четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//      использование синтаксиса es6 (кроме функции-конструкторов) и т.д.


function ElectricalAppliance() {
    this._power = 0;
    this.isOn = false;
    this.on = function () {
        this.isOn = true;
    }
    this.off = function () {
        this.isOn = false;
    }
}

ElectricalAppliance.prototype.power = function () {
    if (this.isOn) return this._power
    else return 0
}


function Lamp(power) {
    this._power = power;
    this.brightness = function (brightness) {
        if (brightness >= 0 && brightness <= 1) this._power = power * brightness;
    }
}

Lamp.prototype = new ElectricalAppliance();


function Computer(power, monitorPower) {
    this._power = power;
    this.monitorPower = monitorPower;
}

Computer.prototype = new ElectricalAppliance();

Computer.prototype.power = function () {
    if (this.isOn) return this._power + this.monitorPower;
    else return 0;
}

let computer = new Computer(120, 150);
computer.on();

let lamp = new Lamp(60);
lamp.brightness(0.5)
lamp.on();

let sumPow = lamp.power() + computer.power();

console.log(sumPow)

