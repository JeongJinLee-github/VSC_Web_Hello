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

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(article2.publisher);
console.log(Article.publisher);
Article.printPublisher();