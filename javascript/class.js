'use strict';
// Objet-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over portotype-based inheritance

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //field
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const student = new Person('JeongJin', 54);
console.log(student.name);
console.log(student.age);
student.speak();

// 2. Getter and setter
class User {
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get age() {
        return this._age

    }
    set age(value){
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Jobs', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    pulicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.pulicField);
console.log(experiment.privateField);

// 4.Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    publisher_c = 'fieldClass ';

    static printPublisher() {
        console.log(Article.publisher);
    }
    printPublisher_c() {
        console.log(Article.publisher);
    }
}

const article1 = new Article;
const article2 = new Article;
console.log(article1.publisher_c);
console.log(article2.publisher_c);
article1.printPublisher_c();
article2.printPublisher_c();
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one classto extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`△ ■ ○ drawing ${this.color} color !!`);
    }
    getArray() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}  // extends is Inheritance
class Triangle extends Shape {    // extends is Inheritance
    draw() {
        super.draw();
        console.log('▲');
    }
    
    getArray() {                  // overriding
        return this.width * this.height / 2;
    }
}  

const rectangle = new Rectangle(20, 30, 'blue');
rectangle.draw();
console.log(`Rectangle Array is ${rectangle.getArray()}`);
const triangle = new Triangle(20, 30, 'blue');
triangle.draw()
console.log(`Trangle Array is ${triangle.getArray()}`);


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);