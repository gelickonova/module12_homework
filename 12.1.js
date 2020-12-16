// Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

function keysAndValues(object) {
    for (let key in object)
        if (object.hasOwnProperty(key)) {
            console.log(`${key} : ${object[key]}`)
        }
    // for (let key of Object.keys(object)) {
    //     console.log(`${key} : ${object[key]}`)
    // }
}

let x = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

keysAndValues(x)