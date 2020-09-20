// instance method - called on objects
// class method / static method - called on constructor function / classes

const numbers = new Array()
// numbers is an object
numbers.push() // push is a instance method
numbers.pop() // pop is an instance method

const city = 'bangalore'
city.toUpperCase() // UpperCase() - an instance method // calling it on a city variable

const person = {
    name: 'arjun'
}

person.hasOwnProperty('name') // an instance method

Array.isArray(numbers) // Static method - called on function/ class/ model

// class Person() {

// }

person.details() // static method