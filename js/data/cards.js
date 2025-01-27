import { Card } from "../classes/Card.js";
import { answers }  from './answers.js';

export const cards = [

    new Card(1,'What expression will return if 1. let shape = { x:10, y:20 } and\n' +
        'shape2 = { x:10, y:20 } have the same property values?',
        1, answers.filter(answer => answer.cardId === 1)),

    new Card(2,'What is the output of the following JavaScript code?\n ' +
        'let num = 5;\n ' +
        'let str = "5";\n' +
        'console.log(num === str);',
        1, answers.filter(answer => answer.cardId === 2)),

    new Card(3,'How can you list all the keys of the object "point"?\n',
        1, answers.filter(answer => answer.cardId === 3)),

    new Card(4,'What will be the result of executing the following code: \n' +
        'let obj1 = {a: 1};\n' +
        'let obj2 = {b: 2};\n' +
        'let obj3 = Object.assign({c: 3}, obj1, obj2);\n' +
        'console.log(obj3);\n',
        1, answers.filter(answer => answer.cardId === 4)),

    new Card(5,'What will appear on the console after executing the following code?\n' +
        'let book = { title: "To Kill a Mockingbird", author: "Harper Lee" };\n' +
        'let library = 0bject.assign({}, book, {pages: 324}); book.author = "John Doe";\n' +
        'console.log(`${library.title} by ${library.author}, ${library.pages} pages`);\n',
        1, answers.filter(answer => answer.cardId === 5)),

    new Card(6,'let shape = {x: 100, y: 100} //insert line here shape.show();' +
        'What is the correct missing line in order for the console to show the following after running the whole code: 100 100,',
        1, answers.filter(answer => answer.cardId === 6)),

    new Card(7,'What is the correct way to access the height property in the\n'+
        'building object { name: "Empire State Building", height: 443.2 }',
        1, answers.filter(answer => answer.cardId === 7)),

    new Card(8, 'What is the correct way to check if a number is an integer in JavaScript?',
        1, answers.filter(answer => answer.cardId === 8)),

    new Card(9, 'What will appear on the console after executing the following code?\n' +
        'let shape1 = {x: 100, y: 200};\n' +
        'let shape2 = shape1;\n ' +
        'shape2.x = 0;\n ' +
        'console.log(`${shape1.x} ${shape2.y}`);\n',
        1, answers.filter(answer => answer.cardId === 9)),

    new Card(10, 'What will be the value of foo after executing the following code:\n' +
        'let obj = {a: 1};\n' +
        'let foo = obj;\n ' +
        'obj.a = 2;\n',
        1, answers.filter(answer => answer.cardId === 10)),

    new Card(11, 'What is the correct way to define an object "person" \n' +
        'with properties "firstName", "lastName", and "age"?\n',
        1, answers.filter(answer => answer.cardId === 11)),

    new Card(12, 'What will appear on the console after executing the following code?\n ' +
        'let car = { model: "Tesla", year: 2022 };\n ' +
        'let vehicle = {...car, color: "red"};\n ' +
        'car.year = 2021;\n ' +
        'console.log(`${vehicle.model} ${vehicle.year} ${vehicle.color}`);\n',
        1, answers.filter(answer => answer.cardId === 12)),

    new Card(13,'What will be the value of "point.x" after executing the following code?\n'+
        'let point = {x: 100, y: 200};\n'+
        'let point2 = point;\n' +
        'point2.x = 0;\n',
        1, answers.filter(answer => answer.cardId === 13)),

    new Card(14,'How can you list the values assigned to all properties\n'+
        'of the person object { name: "Emily", age: 25, city: "New York" }?\n',
        1, answers.filter(answer => answer.cardId === 14)),

    new Card(15,'What is the correct way to access the name property\n'+
        'in the person object { "name": "Jane Doe" }?\n',
        1, answers.filter(answer => answer.cardId === 15)),

    new Card(16,'What will appear on the console after executing the following code?\n'+
        'let point = {x: 100, y: 200};\n'+
        'let point2 = {...point, z: 300};\n'+
        'delete point.x;\n'+
        'console.log(${point.x} ${point2.x});\n',
        1, answers.filter(answer => answer.cardId === 16)),

    new Card(17,'What is the expression that will add a new property color \n' +
        'with a value of "red" to the car object { model: "Tesla", year: 2022 }?\n',
        1, answers.filter(answer => answer.cardId === 17)),

    new Card(18,`What is the output of the following code:\n' +
        'let numbers = [1, 2, 3, 4];\n' +
        'let newNumbers = numbers.map(function(number) { return number * 2; });\n' +
        'console.log(newNumbers);`,
        1, answers.filter(answer => answer.cardId === 18)),

    new Card(19,'What will appear on the console after executing the following code?\n' +
        'let animal = { species: "dog", breed: "Labrador" };\n' +
        'let pet = { ...animal, name: "Buddy" };\n' +
        'animal.species = "cat";\n' +
        'console.log("\${pet.species} \${pet.breed} \${pet.name}");',
        1, answers.filter(answer => answer.cardId === 19)),

    new Card(20,'What is the correct way to access the value of property "brand" in object "phone"?\n',
        1, answers.filter(answer => answer.cardId === 20)),

    new Card(21,'Which of the following expressions returns true if the object "point" has a property "x"?\n',
        1,answers.filter(answer => answer.cardId === 21)),

    new Card(22,'What will be the value of x after the following code is executed? let x = 10;\n' +
        'function add5(num) { num += 5;\n' +
        'return num;\n' +
        '}\n' +
        'x = add5(x);\n',
        1, answers.filter(answer => answer.cardId === 22)),

    new Card(23,'What is the output of the following code?\n'+
        'let object1 = { prop1: "value1"};\n'+
        'let object2 = Object.create(object1);\n'+
        'object2.prop2 = "value2";\n'+
        'delete object2.prop1;\n'+
        'console.log(object2.prop1);',
        1, answers.filter(answer => answer.cardId === 23)),

    new Card(24,'What is the output of the following code?\n'+
        'let obj1 = {a: 10, b: 20};\n' +
        'let obj2 = Object.create(obj1);\n'+
        'obj2.c = 30;\n'+
        'console.log(obj2.a+""+obj2.b+""+obj2.c);',
        1, answers.filter(answer => answer.cardId === 24)),

    new Card(25,'What will be the output of the following JavaScript code?\n'+
        'let x = 10;\n' +
        'let y = 20;\n' +
        'let z = 30;\n' +
        'let obj = {x, y, z};\n'+
        'console.log(Object.keys(obj));',
    1, answers.filter(answer => answer.cardId === 25)),

    new Card(26, 'What will be the output of the following code?\n' +
        'let arr = [1, 2, 3, 4];\n' +
        'let arr2 = arr;\n' +
        'arr2.push(5);\n' +
        'console.log(arr);',
        1, answers.filter(answer => answer.cardId === 26)),

    new Card(27,'What is the value of property "z" after executing the following code?\n' +
        'let obj = {x: 100, y: 200};\n'+
        'let obj2 = Object.create(obj);\n' +
        'obj2.z = 300;\n',
        1, answers.filter(answer => answer.cardId === 27)),

    new Card (28, 'What will be the value of obj.property after the following code \n' +
        'is executed? \n' +
        'let obj = {property: 10};\n ' +
        'function add5(o) { \n' +
        'o.property += 5;\n ' +
        'return o;\n }\n' +
        'obj = add5(obj);\n',
        1, answers.filter(answer => answer.cardId === 28)),

    new Card (29, 'What is the output of the following JavaScript code?\n ' +
        'let obj = {a: 1, b: 2};\n' +
        'let clone = Object.assign({}, obj); clone.a = 3;\n' +
        'console.log(obj.a, clone.a);\n',
        1, answers.filter(answer => answer.cardId === 29)),

    new Card (30, 'What is the expression that will check if the key age is present in the person object\n ' +
        '{ name: "John Smith", age: 32 };\n',
        1, answers.filter(answer => answer.cardId === 30)),

    new Card (31, 'What is the value of "z" after executing the following code? \n' +
        'let point = {x: 100, y: 200};\n ' +
        'let point2 = Object.create(point); \n' +
        'point2.z = 300;', 1, answers.filter(answer => answer.cardId === 31)),

    new Card (32, 'What is the correct way to add property "z" to object "point" with value 300?\n',
        1, answers.filter(answer => answer.cardId === 32)),

    new Card(33, 'What is the value of property "y" in object "point2" ' +
        'after the following code is executed? \n let point = {x: 100, y: 200};\n' +
        'let point2 = {...point};\n point2.y = 300;',
        1, answers.filter(answer => answer.cardId === 33)),

    new Card(34, 'What should be the declaration of the "point" object ' +
        'so that when you call "console.log(point.x)", the value of x appears in the console?',
        1, answers.filter(answer => answer.cardId === 34)),

    new Card(35, 'What will appear on the console after executing the following code? let phone = { brand: "Apple", model: "iPhone" };\n' +
        'let cell = phone; cell.model = "Samsung";\n' +
        'console.log(`${phone.brand} ${phone.model}`);\n',
        1, answers.filter(answer => answer.cardId === 35)),

    new Card(36, 'How can you check if the object "point" is frozen?',
        1, answers.filter(answer => answer.cardId === 36)),

    new Card(37, 'What will be the output of the following code? let point = {x: 100, y: 100};\n' +
        'let point2 = Object.assign({}, point, {x: 0, z: 300}); console.log(${point2.x} ${point2.y} ${point2.z});\n',
        1, answers.filter(answer => answer.cardId === 37)),

    new Card(38, 'What will appear on the console after executing the following code?\n' +
        'let point = {x: 100, y: 200};\n' +
        'let point2 = Object.assign({}, point);\n' +
        'point2.x = 0;\n' +
        'console.log(${point.x} ${point2.x});\n',
        1, answers.filter(answer => answer.cardId === 38)),

    new Card(39, 'What will appear on the console after executing the following code?\n' +
        'let shape = {x: 100, y: 100};\n' +
        'let shape2 = object.assign({}, shape, {x: 0, z: 200});\n' +
        'shape.y = 0;\n' +
        'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);\n',
        1,  answers.filter(answer => answer.cardId === 39)),

    new Card(40, 'What will appear on the console after executing the following code?\n' +
        'let shape = {x: 100, y: 100};\n' +
        'let shape2 = {...shape, z: 300};\n' +
        'shape.x = 0;\n' +
        'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);\n',
        1,  answers.filter(answer => answer.cardId === 40)),

    new Card(41, 'What will appear in the console as a result of executing the following code snippet?\n' +
        'class Person{}\n' +
        'class Employee extends Person{} class Manager extends Employee{} let manager = new Manager();\n' +
        'console.log(`${manager instanceof Person} ${manager instanceof Employee} ${manager instanceof Manager}`);\n',
        1,  answers.filter(answer => answer.cardId === 41)),

    new Card(42, 'What is the output of the following code snippet?\n' +
        'class Animal {};\n' +
        'class Dog extends Animal {}; let dog = new Dog();\n' +
        'console.log(dog instanceof Animal);\n',
        1,  answers.filter(answer => answer.cardId === 42))

];