function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Creating objects using the constructor function
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Accessing object properties
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: 25

// Calling object methods
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.