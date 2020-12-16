// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function hasProperty(object, string) {
    for (let key in object){
        if (key === string) return true
    }
       return false
}
const y = {
    key0: 'value0'
}
const x = Object.create(y)
x.key1 = 'value1';

console.log(hasProperty (x, 'key0'));
console.log(hasProperty (x, 'key1'));
console.log(hasProperty (x, 'key2'));