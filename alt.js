// Objekte erstellen

const answer149 = new Answer(149, '0 0',false, 38);
const answer150 = new Answer(150, '0 100', false, 38);
const answer151 = new Answer(151, '100 100', false, 38);
const answer152 = new Answer(152, '100 0', true, 38);
const card38 = new Card(38, 'What will appear on the console after executing the following code?' +
    'let point = {x: 100, y: 200};' +
    'let point2 = object.assign({}, point);' +
    'point2.x = 0;' +
    'console.log(${point.x} ${point2.x});', 1, [answer149, answer150, answer151, answer152]);

const answer153 = new Answer(153, '100 100 200',false, 39);
const answer154 = new Answer(154, '0 0 200', false, 39);
const answer155 = new Answer(155, '0 100 200', true, 39);
const answer156 = new Answer(156, '100 0 200', false, 39);
const card39 = new Card(39, 'What will appear on the console after executing the following code?' +
    'let shape = {x: 100, y: 100};' +
    'let shape2 = object.assign({}, shape, {x: 0, z: 200});' +
    'shape.y = 0;' +
    'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);', 1, [answer153, answer154, answer155, answer156]);

const answer157 = new Answer(153, '100 100 300',true, 40);
const answer158 = new Answer(154, '0 100 300', false, 40);
const answer159 = new Answer(155, '200 100 300', false, 40);
const answer160 = new Answer(156, '300 100 300', false, 40);
const card40 = new Card(40, 'What will appear on the console after executing the following code?' +
    'let shape = {x: 100, y: 100};' +
    'let shape2 = {...shape, z: 300};' +
    'shape.x = 0;' +
    'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);', 1, [answer157, answer158, answer159, answer160]);

const answer161 = new Answer(161, 'true true true',true, 41);
const answer162 = new Answer(162, 'false true false', false, 41);
const answer163 = new Answer(163, 'true false false', false, 41);
const answer164 = new Answer(164, 'false false false', false, 41);
const card41 = new Card(41, 'What will appear in the console as a result of executing the following code snippet?' +
    'class Person{}' +
    'class Employee extends Person{} class Manager extends Employee{} let manager = new Manager();' +
    'console.log(`${manager instanceof Person} ${manager instanceof Employee} ${manager instanceof Manager}`);',
    1, [answer161, answer162, answer163, answer164]);

const answer165 = new Answer(165, 'Dog',false, 42);
const answer166 = new Answer(166, 'Animal', false, 42);
const answer167 = new Answer(167, 'true', true, 42);
const answer168 = new Answer(168, 'false', false, 42);
const card42 = new Card(42, 'What is the output of the following code snippet?' +
    'class Animal {};' +
    'class Dog extends Animal {}; let dog = new Dog();' +
    'console.log(dog instanceof Animal);', 1, [answer165, answer166, answer167, answer168]);



const cardPool = new CardPool();
cardPool.loadCard(card1);
cardPool.loadCard(card2);
cardPool.loadCard(card38);
cardPool.loadCard(card39);
cardPool.loadCard(card40);
cardPool.loadCard(card41);
cardPool.loadCard(card42);

const cardBox1 = new CardBox(1);
cardBox1.loadCards(cardPool);

console.log(cardBox1);