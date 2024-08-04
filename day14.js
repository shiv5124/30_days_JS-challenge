// Task 1
/*
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const person1 = new Person('lol', 30)

person1.greet()

// Task 2

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    updateAge(newAge) {
        this.age = newAge
        console.log(`Updated age: ${this.age}`)
    }
}

const person1 = new Person('lol', 30)

person1.updateAge(35)

// Task 3

class Person {
    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    constructor(name, studentId) {
        super(name)
        this.studentId = studentId
    }

    getStudentId() {
        return this.studentId
    }
}

const student1 = new Student("john doe", 12345)

console.log("Student ID:", student1.getStudentId())


// Task 4

class Person {
    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    constructor(name, studentId) {
        super(name)
        this.studentId = studentId
    }

    greeting() {
        return `I'm ${this.name}, and my student ID is ${this.studentId}.`
    }
}

const student1 = new Student("john doe", 12345)

console.log(student1.greeting())


// Task 5

class Person {
    constructor(name) {
        this.name = name;
    }

    static getGenericGreeting() {
        return "Hello"
    }
}

console.log(Person.getGenericGreeting())


// Task 6

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
        Student.studentCount++
    }

    getStudentId() {
        return this.studentId;
    }
}

const studen1 = new Student("1", 1);
const student2 = new Student("2", 2);
const student3 = new Student("3", 3);
const student4 = new Student("4", 4);

console.log("Total students:", Student.studentCount);

// Task 7

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }
}

const fname = new Person('hi', 'bye');
console.log(fname.fullName)


// Task 8

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName
        this._lastName = lastName
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`
    }

    set fullName(value) {
        const [newFirstName, newLastName] = value.split(' ')
        this._firstName = newFirstName
        this._lastName = newLastName
    }
}

const name = new Person('hi', 'bye');
console.log(name.fullName)

name.fullName = 'bye hi'
console.log(name.fullName)
*/