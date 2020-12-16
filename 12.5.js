// Переписать консольное приложение из предыдущего юнита на классы.
//
// Общие требования:
//      Имена классов, свойств и методов должны быть информативными;
//      Соблюдать best practices;
//      Использовать синтаксис ES6.


class ElectricalAppliance {
    constructor() {
        this._power = 0;
        this.isOn = false;
    }

    on() {
        this.isOn = true;
    }

    off() {
        this.isOn = false;
    }


    power() {
        if (this.isOn) return this._power
        else return 0
    }
}

class Lamp extends ElectricalAppliance {
    constructor(power) {
        super();
        this._power = power;
        this.maxPower = power;
    }

    brightness(brightness) {
        if (brightness >= 0 && brightness <= 1) this._power = this.maxPower * brightness;
    }

}


class Computer extends ElectricalAppliance {
    constructor(power, monitorPower) {
        super();
        this._power = power;
        this.monitorPower = monitorPower;
    }

    power() {
        if (this.isOn) return this._power + this.monitorPower;
        else return 0;
    }
}

let computer = new Computer(120, 150);
computer.on();

let lamp = new Lamp(60);
lamp.brightness(0.5)
lamp.on();

let sumPow = lamp.power() + computer.power();
console.log(sumPow)

