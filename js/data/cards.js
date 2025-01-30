import { Card } from "../classes/Card.js";
import { answers }  from './answers.js';

export const cards = [

    new Card(1,"What expression will return if 1. let shape = { x:10, y:20 } and<br>" +
        'shape2 = { x:10, y:20 } have the same property values?',
        1, answers.filter(answer => answer.cardId === 1)),

    new Card(2,'What is the output of the following JavaScript code?<br> ' +
        'let num = 5;<br> ' +
        'let str = "5";<br>' +
        'console.log(num === str);',
        1, answers.filter(answer => answer.cardId === 2)),

    new Card(3,'How can you list all the keys of the object "point"?<br>',
        1, answers.filter(answer => answer.cardId === 3)),

    new Card(4,'What will be the result of executing the following code: <br>' +
        'let obj1 = {a: 1};<br>' +
        'let obj2 = {b: 2};<br>' +
        'let obj3 = Object.assign({c: 3}, obj1, obj2);<br>' +
        'console.log(obj3);<br>',
        1, answers.filter(answer => answer.cardId === 4)),

    new Card(5,'What will appear on the console after executing the following code?<br>' +
        'let book = { title: "To Kill a Mockingbird", author: "Harper Lee" };<br>' +
        'let library = 0bject.assign({}, book, {pages: 324}); book.author = "John Doe";<br>' +
        'console.log(`${library.title} by ${library.author}, ${library.pages} pages`);<br>',
        1, answers.filter(answer => answer.cardId === 5)),

    new Card(6,'let shape = {x: 100, y: 100} //insert line here shape.show();<br>' +
        'What is the correct missing line in order for the console to show the following after running the whole code: 100 100,',
        1, answers.filter(answer => answer.cardId === 6)),

    new Card(7,'What is the correct way to access the height property in the<br>'+
        'building object { name: "Empire State Building", height: 443.2 }',
        1, answers.filter(answer => answer.cardId === 7)),

    new Card(8, 'What is the correct way to check if a number is an integer in JavaScript?',
        1, answers.filter(answer => answer.cardId === 8)),

    new Card(9, 'What will appear on the console after executing the following code?<br>' +
        'let shape1 = {x: 100, y: 200};<br>' +
        'let shape2 = shape1;<br> ' +
        'shape2.x = 0;<br> ' +
        'console.log(`${shape1.x} ${shape2.y}`);<br>',
        1, answers.filter(answer => answer.cardId === 9)),

    new Card(10, 'What will be the value of foo after executing the following code:<br>' +
        'let obj = {a: 1};<br>' +
        'let foo = obj;<br>' +
        'obj.a = 2;',
        1, answers.filter(answer => answer.cardId === 10)),

    new Card(11, 'What is the correct way to define an object "person" <br>' +
        'with properties "firstName", "lastName", and "age"?<br>',
        1, answers.filter(answer => answer.cardId === 11)),

    new Card(12, 'What will appear on the console after executing the following code?<br> ' +
        'let car = { model: "Tesla", year: 2022 };<br> ' +
        'let vehicle = {...car, color: "red"};<br> ' +
        'car.year = 2021;<br> ' +
        'console.log(`${vehicle.model} ${vehicle.year} ${vehicle.color}`);<br>',
        1, answers.filter(answer => answer.cardId === 12)),

    new Card(13,'What will be the value of "point.x" after executing the following code?<br>'+
        'let point = {x: 100, y: 200};<br>'+
        'let point2 = point;<br>' +
        'point2.x = 0;<br>',
        1, answers.filter(answer => answer.cardId === 13)),

    new Card(14,'How can you list the values assigned to all properties<br>'+
        'of the person object { name: "Emily", age: 25, city: "New York" }?<br>',
        1, answers.filter(answer => answer.cardId === 14)),

    new Card(15,'What is the correct way to access the name property<br>'+
        'in the person object { "name": "Jane Doe" }?<br>',
        1, answers.filter(answer => answer.cardId === 15)),

    new Card(16,'What will appear on the console after executing the following code?<br>'+
        'let point = {x: 100, y: 200};<br>'+
        'let point2 = {...point, z: 300};<br>'+
        'delete point.x;<br>'+
        'console.log(${point.x} ${point2.x});<br>',
        1, answers.filter(answer => answer.cardId === 16)),

    new Card(17,'What is the expression that will add a new property color <br>' +
        'with a value of "red" to the car object { model: "Tesla", year: 2022 }?<br>',
        1, answers.filter(answer => answer.cardId === 17)),

    new Card(18,'What is the output of the following code:<br>' +
        'let numbers = [1, 2, 3, 4];<br>' +
        'let newNumbers = numbers.map(function(number) { return number * 2; });<br>' +
        'console.log(newNumbers);',
        1, answers.filter(answer => answer.cardId === 18)),

    new Card(19,'What will appear on the console after executing the following code?<br>' +
        'let animal = { species: "dog", breed: "Labrador" };<br>' +
        'let pet = { ...animal, name: "Buddy" };<br>' +
        'animal.species = "cat";<br>' +
        'console.log("\${pet.species} \${pet.breed} \${pet.name}");',
        1, answers.filter(answer => answer.cardId === 19)),

    new Card(20,'What is the correct way to access the value of property "brand" in object "phone"?<br>',
        1, answers.filter(answer => answer.cardId === 20)),

    new Card(21,'Which of the following expressions returns true if the object "point" has a property "x"?<br>',
        1,answers.filter(answer => answer.cardId === 21)),

    new Card(22,'What will be the value of x after the following code is executed? <br> let x = 10;<br>' +
        'function add5(num) { num += 5;<br>' +
        'return num; ' +
        '}<br>' +
        'x = add5(x);<br>',
        1, answers.filter(answer => answer.cardId === 22)),

    new Card(23,'What is the output of the following code?<br>'+
        'let object1 = { prop1: "value1"}; '+
        'let object2 = Object.create(object1);<br>'+
        'object2.prop2 = "value2";<br>'+
        'delete object2.prop1;<br>'+
        'console.log(object2.prop1);',
        1, answers.filter(answer => answer.cardId === 23)),

    new Card(24,'What is the output of the following code?<br>'+
        'let obj1 = {a: 10, b: 20};<br>' +
        'let obj2 = Object.create(obj1);<br>'+
        'obj2.c = 30;<br>'+
        'console.log(obj2.a+""+obj2.b+""+obj2.c);',
        1, answers.filter(answer => answer.cardId === 24)),

    new Card(25,'What will be the output of the following JavaScript code?<br>'+
        'let x = 10; ' +
        'let y = 20; ' +
        'let z = 30;<br>' +
        'let obj = {x, y, z};<br>'+
        'console.log(Object.keys(obj));',
    1, answers.filter(answer => answer.cardId === 25)),

    new Card(26, 'What will be the output of the following code?<br>' +
        'let arr = [1, 2, 3, 4];<br>' +
        'let arr2 = arr;<br>' +
        'arr2.push(5);<br>' +
        'console.log(arr);',
        1, answers.filter(answer => answer.cardId === 26)),

    new Card(27,'What is the value of property "z" after executing the following code?<br>' +
        'let obj = {x: 100, y: 200};<br>'+
        'let obj2 = Object.create(obj);<br>' +
        'obj2.z = 300;<br>',
        1, answers.filter(answer => answer.cardId === 27)),

    new Card (28, 'What will be the value of obj.property after the following code is executed? <br>' +
        'let obj = { property: 10 };<br> ' +
        'function add5(o) { o.property += 5; return o; }<br>' +
        'obj = add5(obj);<br>',
        1, answers.filter(answer => answer.cardId === 28)),

    new Card (29, 'What is the output of the following JavaScript code?<br> ' +
        'let obj = {a: 1, b: 2};<br>' +
        'let clone = Object.assign({}, obj); clone.a = 3;<br>' +
        'console.log(obj.a, clone.a);<br>',
        1, answers.filter(answer => answer.cardId === 29)),

    new Card (30, 'What is the expression that will check if the key age is present in the person object<br> ' +
        '{ name: "John Smith", age: 32 };<br>',
        1, answers.filter(answer => answer.cardId === 30)),

    new Card (31, 'What is the value of "z" after executing the following code? <br>' +
        'let point = {x: 100, y: 200};<br> ' +
        'let point2 = Object.create(point); <br>' +
        'point2.z = 300;', 1, answers.filter(answer => answer.cardId === 31)),

    new Card (32, 'What is the correct way to add property "z" to object "point" with value 300?<br>',
        1, answers.filter(answer => answer.cardId === 32)),

    new Card(33, 'What is the value of property "y" in object "point2" ' +
        'after the following code is executed? <br> let point = {x: 100, y: 200};<br>' +
        'let point2 = {...point};<br> point2.y = 300;',
        1, answers.filter(answer => answer.cardId === 33)),

    new Card(34, 'What should be the declaration of the "point" object<br>' +
        'so that when you call "console.log(point.x)", the value of x appears in the console?',
        1, answers.filter(answer => answer.cardId === 34)),

    new Card(35, 'What will appear on the console after executing the following code? let phone = { brand: "Apple", model: "iPhone" };<br>' +
        'let cell = phone; cell.model = "Samsung";<br>' +
        'console.log(`${phone.brand} ${phone.model}`);<br>',
        1, answers.filter(answer => answer.cardId === 35)),

    new Card(36, 'How can you check if the object "point" is frozen?',
        1, answers.filter(answer => answer.cardId === 36)),

    new Card(37, 'What will be the output of the following code? let point = {x: 100, y: 100};<br>' +
        'let point2 = Object.assign({}, point, {x: 0, z: 300}); console.log(${point2.x} ${point2.y} ${point2.z});<br>',
        1, answers.filter(answer => answer.cardId === 37)),

    new Card(38, 'What will appear on the console after executing the following code?<br>' +
        'let point = {x: 100, y: 200};<br>' +
        'let point2 = Object.assign({}, point);<br>' +
        'point2.x = 0;<br>' +
        'console.log(${point.x} ${point2.x});<br>',
        1, answers.filter(answer => answer.cardId === 38)),

    new Card(39, 'What will appear on the console after executing the following code?<br>' +
        'let shape = {x: 100, y: 100};<br>' +
        'let shape2 = object.assign({}, shape, {x: 0, z: 200});<br>' +
        'shape.y = 0;<br>' +
        'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);<br>',
        1,  answers.filter(answer => answer.cardId === 39)),

    new Card(40, 'What will appear on the console after executing the following code?<br>' +
        'let shape = {x: 100, y: 100};<br>' +
        'let shape2 = {...shape, z: 300};<br>' +
        'shape.x = 0;<br>' +
        'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);<br>',
        1,  answers.filter(answer => answer.cardId === 40)),

    new Card(41, 'What will appear in the console as a result of executing the following code snippet?<br>' +
        'class Person{} class Employee extends Person{} class Manager extends Employee{}<br> let manager = new Manager();<br>' +
        'console.log(`${manager instanceof Person} ${manager instanceof Employee} ${manager instanceof Manager}`);<br>',
        1,  answers.filter(answer => answer.cardId === 41)),

    new Card(42, 'What is the output of the following code snippet?<br>' +
        'class Animal {};<br>' +
        'class Dog extends Animal {}; let dog = new Dog();<br>' +
        'console.log(dog instanceof Animal);<br>',
        1,  answers.filter(answer => answer.cardId === 42))

];