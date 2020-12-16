// Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj() {
    return Object.create(null)
}

const y = emptyObj();
console.log(Object.getPrototypeOf(y));
