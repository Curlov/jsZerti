import { Answer } from "../classes/Answer.js";

export const answers = [

    new Answer(1, 'shape1.x == shape2.y', false, 1),
    new Answer(2, `(shape1.x == shape2.x) && (shape1.y == shape2.y)`, true, 1),
    new Answer(3, 'shape1 == shape2', false, 1),
    new Answer(4, 'Object.keys(shape1) === Object.keys(shape2)', false, 1),

    new Answer(5, 'False', true, 2),
    new Answer(6, 'True', false, 2),
    new Answer(7, '5', false, 2),
    new Answer(8, '"5"', false, 2),

    new Answer(9, 'Object.keys(point)', true, 3),
    new Answer(10, 'point.listKeys()', false, 3),
    new Answer(11, 'point.list()', false, 3),
    new Answer(12, 'Not possible', false, 3),

    new Answer(13, '{a: 1, b: 2, c: 3}', false, 4),
    new Answer(14, '{c: 3}', false, 4),
    new Answer(15, '{c:3, a: 1, b: 2}', true, 4),
    new Answer(16, '{a: 1}', false, 4),

    new Answer(17, 'To Kill a Mockingbird by Harper Lee, 324 pages', true, 5),
    new Answer(18, 'undefined by John Doe, 324 pages', false, 5),
    new Answer(19, '100 100 undefined', false, 5),
    new Answer(20, 'To Kill a Mockingbird by John Doe, 324 pages', false, 5),

    new Answer(21, 'shape.show = function() { console.log(`${this.x} ${this.y}`); };', true, 6),
    new Answer(22, 'point.show = () => console.log(${shape.x} ${shape.y});', false, 6),
    new Answer(23, 'shape.show = () => console.log(${this.x} ${this.y});', false, 6),
    new Answer(24, 'point.show = function(){console.log(${this.x} ${this.y})};', false, 6),

    new Answer(25, 'building("height")', false, 7),
    new Answer(26, 'building.height', true, 7),
    new Answer(27, 'building["height"]', true, 7),
    new Answer(28, 'building.height();', false, 7),

    new Answer(29, 'Number.isNaN(number)', false, 8),
    new Answer(30, 'number.isInteger()', false, 8),
    new Answer(31, 'Math.ceil(number) === number', true, 8),
    new Answer(32, 'number % 1 === 0', true, 8),

    new Answer(33, '200 100', false, 9),
    new Answer(34, '0 100', false, 9),
    new Answer(35, '100 200', false, 9),
    new Answer(36, '0 200', true, 9),

    new Answer(37, '{a: 1}', false, 10),
    new Answer(38, 'undefined', false, 10),
    new Answer(39, 'null', false, 10),
    new Answer(40, '{a: 2}', true, 10),

    new Answer(41, "const person = {firstName: 'Jane', lastName: 'Doe', age: 30};", true, 11),
    new Answer(42, "const person = new Object('firstName' = 'Jane', 'lastName' = 'Doe', 'age' = 30);", false, 11),
    new Answer(43, "const person = {'firstName': 'Jane', 'lastName': 'Doe', 'age': 30};", true, 11),
    new Answer(44, "const person('firstName' = 'Jane', 'lastName' = 'Doe', 'age' = 30);", false, 11),

    new Answer(45, 'Tesla 2021 red', false, 12),
    new Answer(46, 'Tesla 2022 red', true, 12),
    new Answer(47, 'Tesla 2021 blue', false, 12),
    new Answer(48, 'Tesla 2022 black', false, 12),

    new Answer(49, '0', true, 13),
    new Answer(50, '100', false, 13),
    new Answer(51, 'undefined', false, 13),
    new Answer(52, '200', false, 13),

    new Answer(53, 'Object.values(person)', true, 14),
    new Answer(54, 'person.entries()', false, 14),
    new Answer(55, 'person.values()', false, 14),
    new Answer(56, 'person.keys()', false, 14),

    new Answer(57, 'person[name]', false, 15),
    new Answer(58, 'person->name', false, 15),
    new Answer(59, 'name', false, 15),
    new Answer(60, 'person["name"]', true, 15),

    new Answer(61, 'null 100', false, 16),
    new Answer(62, 'undefined 100', true, 16),
    new Answer(63, 'undefined undefined', false, 16),
    new Answer(64, '100 undefined', false, 16),

    new Answer(65, 'car.color = "red"', true, 17),
    new Answer(66, 'car["color"]["red"]', false, 17),
    new Answer(67, 'car.property = "color", "red"', false, 17),
    new Answer(68, 'car.new("color", "red")', false, 17),

    new Answer(69, '[0, 2, 4, 6]', false, 18),
    new Answer(70, '[1, 4, 9, 16]', false, 18),
    new Answer(71, '[1, 2, 3, 4]', false, 18),
    new Answer(72, '[2, 4, 6, 8]', true, 18),

    new Answer(73, 'dog Labrador undefined', false, 19),
    new Answer(74, 'cat Labrador undefined', false, 19),
    new Answer(75, 'cat Labrador Buddy', false, 19),
    new Answer(76, 'dog Labrador Buddy', true, 19),

    new Answer(77, 'phone->"brand";', false, 20),
    new Answer(78, 'phone.getBrand();', false, 20),
    new Answer(79, 'phone[brand];', false, 20),
    new Answer(80, 'phone.brand;', true, 20),

    new Answer(81, 'x in point', false, 21),
    new Answer(82, '"x" in point', true, 21),
    new Answer(83, 'point.contains(x)', false, 21),
    new Answer(84, 'point.exists(x)', false, 21),

    new Answer(85, 'None of the Above', false, 22),
    new Answer(86, '10', false, 22),
    new Answer(87, '15', true, 22),
    new Answer(88, '5', false, 22),

    new Answer(89, 'ReferenceError: prop1 is not defined', false, 23),
    new Answer(90, 'undefined', true, 23),
    new Answer(91, 'null', false, 23),
    new Answer(92, '"value1"', false, 23),

    new Answer(93, 'undefined undefined 30', false, 24),
    new Answer(94, '10 20 undefined', false, 24),
    new Answer(95, '10 20 30', true, 24),
    new Answer(96, 'undefined 20 30', false, 24),

    new Answer(97, '["x", "y", "z"]', true, 25),
    new Answer(98, '["10", "20", "30"]', false, 25),
    new Answer(99, '[x, y, z]', false, 25),
    new Answer(100, '[10, 20, 30]', false, 25),

    new Answer(101, '[1, 2, 3, 4, 5, 5]', false, 26),
    new Answer(102, '[5, 1, 2, 3, 4]', false, 26),
    new Answer(103, '[1, 2, 3, 4]', false, 26),
    new Answer(104, '[1, 2, 3, 4, 5]', true, 26),

    new Answer(105, '100', false, 27),
    new Answer(106, '200', false, 27),
    new Answer(107, 'undefined', false, 27),
    new Answer(108, '300', true, 27),

    new Answer(109, '15', true, 28),
    new Answer(110, 'None of the above', false, 28),
    new Answer(111, '5', false, 28),
    new Answer(112, '10', false, 28),

    new Answer(113, '13', true, 29),
    new Answer(114, '31', false, 29),
    new Answer(115, '11', false, 29),
    new Answer(116, '33', false, 29),

    new Answer(117, 'age in person', false, 30),
    new Answer(118, 'person.contains(age)', false, 30),
    new Answer(119, 'age.in(person)', false, 30),
    new Answer(120, '"age" in person', true, 30),

    new Answer(121, '300', true, 31),
    new Answer(122, '100', false, 31),
    new Answer(123, 'null', false, 31),
    new Answer(124, 'undefined', false, 31),

    new Answer(125, 'point.push({z: 300});', false, 32),
    new Answer(126, 'point.z = 300', true, 32),
    new Answer(127, 'point += {z: 300};', false, 32),
    new Answer(128, '0bject.defineProperties(point, {z: 300});', false, 32),

    new Answer(129, 'undefined', false, 33),
    new Answer(130, '100', false, 33),
    new Answer(131, '300', true, 33),
    new Answer(132, '200', false, 33),

    new Answer(133, 'let x = 10;', false, 34),
    new Answer(134, 'let point.add(x, 10)', false, 34),
    new Answer(135, 'let point = (x: 10);', false, 34),
    new Answer(136, 'let point = {x: 10};', true, 34),

    new Answer(137, 'Apple IPhone', false, 35),
    new Answer(138, 'Samsung Samsung', false, 35),
    new Answer(139, 'Samsung IPhone', false, 35),
    new Answer(140, 'Apple Samsung', true, 35),

    new Answer(141, 'Object.freeze(point) === true', false, 36),
    new Answer(142, 'point.isFreeze()', false, 36),
    new Answer(143, 'point.isFrozen()', false, 36),
    new Answer(144, 'Object.isFrozen(point)', true, 36),

    new Answer(145, '100 0 300', false, 37),
    new Answer(146, '0 100 300', true, 37),
    new Answer(147, '100 200 undefined', false, 37),
    new Answer(148, '100 200 300', false, 37),

    new Answer(149, '0 0',false, 38),
    new Answer(150, '0 100', false, 38),
    new Answer(151, '100 100', false, 38),
    new Answer(152, '100 0', true, 38),

    new Answer(153, '100 100 200',false, 39),
    new Answer(154, '0 0 200', false, 39),
    new Answer(155, '0 100 200', true, 39),
    new Answer(156, '100 0 200', false, 39),

    new Answer(153, '100 100 300',true, 40),
    new Answer(154, '0 100 300', false, 40),
    new Answer(155, '200 100 300', false, 40),
    new Answer(156, '300 100 300', false, 40),

    new Answer(161, 'true true true',true, 41),
    new Answer(162, 'false true false', false, 41),
    new Answer(163, 'true false false', false, 41),
    new Answer(164, 'false false false', false, 41),

    new Answer(165, 'Dog',false, 42),
    new Answer(166, 'Animal', false, 42),
    new Answer(167, 'true', true, 42),
    new Answer(168, 'false', false, 42),

    new Answer(169, 'true true true', true, 43),
    new Answer(170, 'false false true', false, 43),
    new Answer(171, 'true false true', false, 43),
    new Answer(172, 'false false false', false, 43),

    new Answer(173, 'x() { return this._x; }', false, 44),
    new Answer(174, 'get x() { return this._x; }', false, 44),
    new Answer(175, 'this.x = function() { return this._x; }', false, 44),
    new Answer(176, 'set x(value) { this._x = value; }', true, 44),

    new Answer(177, 'User = new User("John", "Admin");', false, 45),
    new Answer(178, 'new User("John", "Admin");', false, 45),
    new Answer(179, 'User("John", "Admin");', false, 45),
    new Answer(180, 'let User = {name: "John", role: "Admin"}', true, 45),

    new Answer(181, 'class Shape { constructor(sides) { sides = sides; } calculateArea() { // implementation } }', false, 46),
    new Answer(182, 'class Shape { constructor(sides) { this.sides = sides; } calculateArea() { // implementation } }', false, 46),
    new Answer(183, 'class Shape { calculateArea() { // implementation } constructor(sides) { _sides = sides; } }', false, 46),
    new Answer(184, 'class Shape { constructor(sides) { this._sides = sides; } calculateArea() { // implementation } }', true, 46),

    new Answer(185, 'constructor', true, 47),
    new Answer(186, 'Name of the class', false, 47),
    new Answer(187, 'constructor "name"', false, 47),
    new Answer(188, 'this', false, 47),

    new Answer(189, 'test = 10;', true, 48),
    new Answer(190, 'this.test = 10;', false, 48),
    new Answer(191, 'var test = 10;', false, 48),
    new Answer(192, 'let test = 10;', false, 48),

    new Answer(193, 'Is available only in class instances', false, 49),
    new Answer(194, 'Is bound to the class only will not be available in any objects which are instances from it.', true, 49),
    new Answer(195, 'Available for both the class and instances of the class', false, 49),
    new Answer(196, 'Is only available within the class', false, 49),

    new Answer(197, 'Classes take memory priority', false, 50),
    new Answer(198, 'Classes must be declared at the beginning of the code', false, 50),
    new Answer(199, 'Classes are the most important components of the language', false, 50),
    new Answer(200, 'Classes can be written to variables, among other things.', true, 50),

    new Answer(201, 'function Rectangle(width, height) { this.width = width; this.height = height; this.calcArea = function() { return this.width * this.height; } }', false, 51),
    new Answer(202, 'class Rectangle(width, height) { this.width = width; this.height = height; this.calcArea = function() {  return this.width * this.height; } }', false, 51),
    new Answer(203, 'class Rectangle { constructor(width, height); this.width = width; this.height = height; calcArea() {  return width * height; } }', false, 51),
    new Answer(204, 'class Rectangle { constructor(width, height) { this.width = width;  this.height = height; } calcArea() { return this.width * this.height; }}', true, 51),

    new Answer(205, 'greet: function() { console.log(Hello, I am ${this.name}); }', false, 52),
    new Answer(206, 'greet() { console.log(Hello, I am ${this.name}); }', false, 52),
    new Answer(207, 'this.greet = function() { console.log(Hello, I am ${this.name}); }', true, 52),
    new Answer(208, 'function greet() { console.log(Hello, I am ${this.name}); }', false, 52),

    new Answer(209, 'Vehicle car = new Vehicle("Toyota");', false, 53),
    new Answer(210, 'Vehicle("Toyota");', false, 53),
    new Answer(211, 'let car = new Vehicle; car.make = "Toyota";', true, 53),
    new Answer(212, 'let car = new Vehicle("Toyota");', false, 53),

    new Answer(213, 'price: 0;', false, 54),
    new Answer(214, 'this.price = 0;', true, 54),
    new Answer(215, 'var price = 0;', false, 54),
    new Answer(216, 'let price = 0;', false, 54),

    new Answer(217, 'showInfo = function() {console.log("Hi");};', false, 55),
    new Answer(218, 'this.showInfo = function() {console.log("Hi");};', true, 55),
    new Answer(219, 'static showInfo() {console.log("Hi");};', false, 55),
    new Answer(220, 'function showInfo() {console.log("Hi");};', false, 55),

    new Answer(221, '[]', false, 56),
    new Answer(222, '["x", "y"]', false, 56),
    new Answer(223, '["sides"]', true, 56),
    new Answer(224, '["x", "y", "sides"]', false, 56),

    new Answer(225, 'ReferenceError: a is not defined', false, 57),
    new Answer(226, 'Error: a.test is not a function', false, 57),
    new Answer(227, '10', true, 57),
    new Answer(228, 'undefined', false, 57),

    new Answer(229, 'showInfo: function() { console.log("Hi"); };', false, 58),
    new Answer(230, 'showInfo() { console.log("Hi"); };', true, 58),
    new Answer(231, 'function showInfo() { console.log("Hi"); };', false, 58),
    new Answer(232, 'showInfo = function() { console("Hi"); };', false, 58),

    new Answer(233, '10', true, 59),
    new Answer(234, 'undefined', false, 59),
    new Answer(235, 'NaN', false, 59),
    new Answer(236, 'null', false, 59),

    new Answer(237, 'false', false, 60),
    new Answer(238, 'Magazine', false, 60),
    new Answer(239, 'true', true, 60),
    new Answer(240, 'Book', false, 60),

    new Answer(241, '50', true, 61),
    new Answer(242, '5', false, 61),
    new Answer(243, '10', false, 61),
    new Answer(244, '0', false, 61),

    new Answer(245, 'true', true, 62),
    new Answer(246, 'Rectangle', false, 62),
    new Answer(247, 'square', false, 62),
    new Answer(248, 'false', false, 62),

    new Answer(249, 'function drive() { console.log(`Driving ${this.make} ${this.model}`); }', false, 63),
    new Answer(250, 'drive() { console.log(`Driving ${this.make} ${this.model}`); }', false, 63),
    new Answer(251, 'this.drive = function() { console.log(`Driving ${this.make} ${this.model}`); }', true, 63),
    new Answer(252, 'drive: function() { console.log(`Driving ${this.make} ${this.model}`); }', false, 63),

    new Answer(253, 'color', false, 64),
    new Answer(254, 'x, y, color', true, 64),
    new Answer(255, 'x, y', false, 64),
    new Answer(256, 'None of the above', false, 64),

    new Answer(257, 'let showInfo = function() { console.log("Hi"); }', false, 65),
    new Answer(258, 'showInfo = function() { return "Hi"; }', true, 65),
    new Answer(259, 'showInfo() { return "Hi"; }', true, 65),
    new Answer(260, 'function showInfo() { return "Hi"; }', false, 65),

    new Answer(261, 'class B inherits A', false, 66),
    new Answer(262, 'class B extends A', true, 66),
    new Answer(263, 'class A inherits A', false, 66),
    new Answer(264, 'class A inherits B', false, 66),

    new Answer(265, '0', false, 67),
    new Answer(266, 'undefined', false, 67),
    new Answer(267, 'null', false, 67),
    new Answer(268, '5', true, 67),

    new Answer(269, '_name = 30;', true, 68),
    new Answer(270, 'constructor() { this._name = 30 }', true, 68),
    new Answer(271, 'var _name = 30;', false, 68),
    new Answer(272, 'let _name = 30;', false, 68),

    new Answer(273, 'var _age = 0;', false, 69),
    new Answer(274, '_age = 0;', true, 69),
    new Answer(275, 'let _age = 0;', false, 69),
    new Answer(276, 'this._age = 0;', false, 69),

    new Answer(277, 'let _x = 0;', false, 70),
    new Answer(278, 'this._x = 0;', false, 70),
    new Answer(279, 'var _x = 0;', false, 70),
    new Answer(280, '_x = 0;', true, 70),

    new Answer(281, 'User true', false, 71),
    new Answer(282, 'object true', true, 71),
    new Answer(283, 'object false', false, 71),
    new Answer(284, 'User false', false, 71),

    new Answer(285, 'undefined', false, 72),
    new Answer(286, '10', true, 72),
    new Answer(287, '0', false, 72),
    new Answer(288, 'TypeError', false, 72),

    new Answer(289, 'Shape Circle', false, 73),
    new Answer(290, 'Shape Shape', false, 73),
    new Answer(291, 'Circle Shape', true, 73),
    new Answer(292, 'Circle Circle', false, 73),

    new Answer(293, 'undefined Camry', false, 74),
    new Answer(294, 'Toyota Camry', true, 74),
    new Answer(295, 'Toyota undefined', false, 74),
    new Answer(296, 'Camry Toyota', false, 74),

    new Answer(297, 'Toyota', true, 75),
    new Answer(298, 'undefined Toyota', false, 75),
    new Answer(299, 'null', false, 75),
    new Answer(300, 'undefined', false, 75),

    new Answer(301, 'class Circle { constructor(radius) { this.radius = radius; } setRadius(radius) { this.radius = radius; } calculateArea() { return Math.PI * this.radius * this.radius; } }', true, 76),
    new Answer(302, 'class Circle { constructor(r) { this.r = r; } setRadius(radius) { this.r = radius; } calculateArea() { return Math.PI * this.r * this.r; } }', false, 76),
    new Answer(303, 'class Circle { setRadius(radius) { this.radius = radius; } calculateArea() { return Math.PI * this.radius * this.radius; } constructor(radius) { this.radius = radius; } }', false, 76),
    new Answer(304, 'class Circle { constructor(radius) { this.radius = radius; } setRadius(r) { this.radius = r; } calculateArea(radius) { return Math.PI * radius * radius; } }', false, 76),

    new Answer(305, 'Incorrect, should instead be class Shape {};', false, 77),
    new Answer(306, 'Incorrect, the class definition cannot be empty.', false, 77),
    new Answer(307, 'Incorrect, class definition should not be followed with a semi-colon', false, 77),
    new Answer(308, 'Correct', true, 77),

    new Answer(309, 'class Point { constructor(x, y) {  this.x = x; this.y = y; } } Point.prototype.setColor = function(color) { this.color = color; }', true, 78),
    new Answer(310, 'class Point { constructor(x, y); setColor(color) { this.color = color; }}', false, 78),
    new Answer(311, 'class Point { constructor(x, y) {  this.x = x;  this.y = y; } setColor = function(color) {  this.color = color; }}', true, 78),
    new Answer(312, 'function Point(x, y) { this.x = x; this.y = y; } Point.prototype.setColor = function(color) { this.color = color; }', false, 78),

    new Answer(313, 'Error', false, 79),
    new Answer(314, 'Hello from Child', false, 79),
    new Answer(315, 'undefined', false, 79),
    new Answer(316, 'Hello from Base', true, 79),

    new Answer(317, 'User true', false, 80),
    new Answer(318, 'string false', false, 80),
    new Answer(319, 'object false', false, 80),
    new Answer(320, 'object true', true, 80),

    new Answer(321, 'true true 0 NaN', true, 81),
    new Answer(322, 'false true 0 1', false, 81),
    new Answer(323, 'false false 0 NaN', false, 81),
    new Answer(324, 'true false 0 NaN', false, 81),

    new Answer(325, 'false false 0 NaN', false, 82),
    new Answer(326, 'true true 1 0', false, 82),
    new Answer(327, 'false true 0 NaN', true, 82),
    new Answer(328, 'false true 0 0', false, 82),

    new Answer(329, 'number', false, 83),
    new Answer(330, 'object', true, 83),
    new Answer(331, 'undefined', false, 83),
    new Answer(332, 'null', false, 83),

    new Answer(333, '8', false, 84),
    new Answer(334, '53', false, 84),
    new Answer(335, '"53"', true, 84),
    new Answer(336, 'TypeError', false, 84),

    new Answer(337, '10', false, 85),
    new Answer(338, '20', false, 85),
    new Answer(339, '"y is greater than x"', true, 85),
    new Answer(340, '"y is not greater than x"', false, 85),

    new Answer(341, '10', false, 86),
    new Answer(342, '20', false, 86),
    new Answer(343, '"yes"', true, 86),
    new Answer(344, '"no"', false, 86),

    new Answer(345, 'The number of milliseconds since 00:00:00 on 1 January 1970', true, 87),
    new Answer(346, 'The number of seconds since 00:00:00 on 1 January 1970', false, 87),
    new Answer(347, 'The current Date as a DateTime object', false, 87),
    new Answer(348, 'The number of milliseconds since 00:00:00 on 1 January 2000', false, 87),

    new Answer(349, '"John"', false, 88),
    new Answer(350, 'true', true, 88),
    new Answer(351, 'false', false, 88),
    new Answer(352, '"string"', false, 88),

    new Answer(353, '10', false, 89),
    new Answer(354, '20', false, 89),
    new Answer(355, 'true', true, 89),
    new Answer(356, 'false', false, 89),

    new Answer(357, 'slice', false,90),
    new Answer(358, 'splice', true, 90),
    new Answer(359, 'set', false, 90),
    new Answer(360, 'replace', false, 90),

    new Answer(361, 'console.log(points[2].y);', false, 91),
    new Answer(362, 'console.log(points[1].y);', true, 91),
    new Answer(363, 'console.log(points.y[1]);', false, 91),
    new Answer(364, 'console.log(points.x[1]);', false, 91),

    new Answer(365, '"John" true 100', false, 92),
    new Answer(366, 'true true 30', true, 92),
    new Answer(367, '"string" false 100', false, 92),
    new Answer(368, 'true true 20', false, 92),

    new Answer(369, '10', false, 93),
    new Answer(370, '"Greater or Equal to 10"', true, 93),
    new Answer(371, '"Less than 10"', false, 93),
    new Answer(372, 'true', false, 93),

    new Answer(373, '1,2,3,4,5', false, 94),
    new Answer(374, '[1, 2, 3, 4, 5]', false, 94),
    new Answer(375, '5', true, 94),
    new Answer(376, '0', false, 94),

    new Answer(377, 'The Set class does exist in javascript', false, 95),
    new Answer(378, 'Order of data in a Set does not matter', false, 95),
    new Answer(379, 'Each element of an object of the Set class consists of a key and a value', true, 95),
    new Answer(380, 'Set has an add method to insert elements', false, 95),

    new Answer(381, 'Elements with the same key can be repeated in a Map object, provided they have different values', true, 96),
    new Answer(382, 'You can use the spread operator on the Map class', false, 96),
    new Answer(383, 'The set method is used to insert a new element into a Map object', false, 96),
    new Answer(384, 'Map objects do exist in JavaScript', false, 96),

    new Answer(385, 'JSON.parse(shape);', false, 97),
    new Answer(386, 'JSON.stringify(shape);', true, 97),
    new Answer(387, 'JSON(shape);', false, 97),
    new Answer(388, 'shape.toJSON();', false, 97),

    new Answer(389, '6 2 3', false, 98),
    new Answer(390, '6 1 2', false, 98),
    new Answer(391, '5 1 3', false, 98),
    new Answer(392, '5 2 3', true, 98),

    new Answer(393, 'false', false, 99),
    new Answer(394, 'null', true, 99),
    new Answer(395, '-1', false, 99),
    new Answer(396, '0', false, 99),

    new Answer(397, '"hello world!"', false, 100),
    new Answer(398, '"Hello World!"', false, 100),
    new Answer(399, '"HELLO WORLD!"', true, 100),
    new Answer(400, '11', false, 100),

    new Answer(401, 'true 0 7', true, 101),
    new Answer(402, 'true 0 8', false, 101),
    new Answer(403, 'true 1 8', false, 101),
    new Answer(404, '1 1 8', false, 101),

    new Answer(405, 'new Date(Date.now()).getFullYear();', true, 102),
    new Answer(406, 'new Date.now().getFullYear();', false, 102),
    new Answer(407, 'Date.now().getYear();', false, 102),
    new Answer(408, 'Date().getFullYear();', false, 102),

    new Answer(409, 'let result = x.reduce((x, y) => x + 1000, y)', false, 103),
    new Answer(410, 'let result = x.reduce((x, y) => x, 1000 + y)', false, 103),
    new Answer(411, 'let result = x.reduce((x, y) => x + y, 1000)', true, 103),
    new Answer(412, 'let result = x.reduce((x, y) => x - y, 1000)', false, 103),

    new Answer(413, '[1, 2, 3, 4, 5]', false, 104),
    new Answer(414, '[2, 3, 4]', true, 104),
    new Answer(415, '[1, 2, 3, 4]', false, 104),
    new Answer(416, '[4, 5]', false, 104),

    new Answer(417, '"Hello"', true, 105),
    new Answer(418, '"Hello World"', false, 105),
    new Answer(419, '" World!"', false, 105),
    new Answer(420, '"llo W"', false, 105),

    new Answer(421, '[1, 2, 3, 4, 5]', false, 106),
    new Answer(422, '[3, 4, 5]', false, 106),
    new Answer(423, '[4, 5]', true, 106),
    new Answer(424, '[1, 2, 3]', false, 106),

    new Answer(425, '[1, 2, 3, 4, 5]', false, 107),
    new Answer(426, '[1, 2, 5]', false, 107),
    new Answer(427, '[3, 4]', true, 107),
    new Answer(428, '[1, 2, 3, 4, 5, 3, 4]', false, 107),

    new Answer(429, '[1, 2, 3, 4, 5]', false, 108),
    new Answer(430, '[6, 7, 8]', false, 108),
    new Answer(431, '[1, 2, 3, 4, 5, 6, 7, 8]', false, 108),
    new Answer(432, '[1, 2, 6, 7, 8, 3, 4, 5]', true, 108),

    new Answer(433, '[1, 2, 6, 7, 8, 4, 5]', true, 109),
    new Answer(434, '[1, 2, 3, 4, 5]', false, 109),
    new Answer(435, '[1, 2, 6, 7, 8, 3, 4, 5]', false, 109),
    new Answer(436, '[1, 2, 6, 7, 8, 5]', false, 109),

    new Answer(437, '[1, 2, 3, 4, 5]', false, 110),
    new Answer(438, '"1,2,3,4,5"', false, 110),
    new Answer(439, '"1-2-3-4-5"', true, 110),
    new Answer(440, '"5-4-3-2-1"', false, 110),

    new Answer(441, '["apple", "banana", "cherry"]', false, 111),
    new Answer(442, '"apple,banana,cherry"', false, 111),
    new Answer(443, '"apple-banana-cherry"', true, 111),
    new Answer(444, '"cherry-banana-apple"', false, 111),

    new Answer(445, '[1, 2, 3, 4, 5]', false, 112),
    new Answer(446, '[4]', false, 112),
    new Answer(447, '[4, 2]', false, 112),
    new Answer(448, '[2, 4]', true, 112),

    new Answer(449, '[3, 1, 4, 2, 5]', false, 113),
    new Answer(450, '[1, 2, 3, 4, 5]', true, 113),
    new Answer(451, '[5, 4, 3, 2, 1]', false, 113),
    new Answer(452, '[1, 2, 4, 5, 3]', false, 113),

    new Answer(453, '[1, 2, 3, 4, 5]', false, 114),
    new Answer(454, '[10, 8, 6, 4, 2]', false, 114),
    new Answer(455, '[2, 4, 6, 8, 10]', true, 114),
    new Answer(456, '[1, 4, 9, 16, 25]', false, 114),

    new Answer(457, '[20, 25, 30]', false, 115),
    new Answer(458, '[{name: \'Jane\', age: 25}, {name: \'Jim\', age: 30}]', false, 115),
    new Answer(459, '[25, 30]', true, 115),
    new Answer(460, '[20]', false, 115),

    new Answer(461, '{John: 20, Jane: 25, Jim: 30}', true, 116),
    new Answer(462, '[{name: \'Jane\', age: 25}, {name: \'Jim\', age: 30}]', false, 116),
    new Answer(463, '[20, 25, 30]', false, 116),
    new Answer(464, '{20, 25, 30}', false, 116),

    new Answer(465, '[5, 12, 8, 130, 44]', false, 117),
    new Answer(466, '[12, 130, 44]', false, 117),
    new Answer(467, '12', true, 117),
    new Answer(468, 'undefined', false, 117),

    new Answer(469, '"Th* qck brwn fx"', false, 118),
    new Answer(470, '"Th* quck brwn fx"', false, 118),
    new Answer(471, '"Th qck brwn fx."', false, 118),
    new Answer(472, '"Th* q**ck br*wn f*x"', true, 118),

    new Answer(473, '["Hello", "World"]', false, 119),
    new Answer(474, '["H", "W"]', true, 119),
    new Answer(475, '["H", "E", "L", "L", "0", "W", "0", "R", "L", "D"]', false, 119),
    new Answer(476, 'null', false, 119),

    new Answer(477, 'Animal', false, 120),
    new Answer(478, 'Lion', true, 120),
    new Answer(479, 'undefined', false, 120),
    new Answer(480, 'ReferenceError', false, 120),

    new Answer(481, 'The car is a undefined undefined.', false, 121),
    new Answer(482, 'The car is a Ford F-150.', true, 121),
    new Answer(483, 'TypeError: car.displayMakeAndModel.bind is not a function.', false, 121),
    new Answer(484, 'The car is a Tesla Model S.', false, 121),

    new Answer(485, '"Hello, my name is John" "Hello, my name is undefined"', false, 122),
    new Answer(486, '"Hello, my name is John" "Hello, my name is John"', false, 122),
    new Answer(487, '"Hello, my name is John" "Hello, my name is Jane"', true, 122),
    new Answer(488, '"Hello, my name is undefined" "Hello, my name is undefined"', false, 122),

    new Answer(489, 'Hello, I am John Doe', true, 123),
    new Answer(490, 'ReferenceError: person is not defined', false, 123),
    new Answer(491, 'TypeError: greetFriend is not a function', false, 123),
    new Answer(492, 'Hello, I am undefined', false, 123),

    new Answer(493, 'fetch(\'https://api.example.com/data\').then((response) => response.json().text()).then((json) => console.log(json));', false, 124),
    new Answer(494, 'fetch(\'https://api.example.com/data\',{ method: \'GET\', headers: { \'Content-Type\': \'application/json\' }, }).then((response) => response.json()) .then((json) => console.log(json));', true, 124),
    new Answer(495, 'fetch(\'https://api.example.com/data\').then((response) => response.json()).then((json) => console.log(json));', true, 124),
    new Answer(496, 'fetch(\'https://api.example.com/data\').then((response) => response.text()).then((data) => JSON.parse(data)).then((json) => console.log(json));', true, 124),

    new Answer(497, 'function outerFunction() { var outerVariable = "outer"; return function innerFunction() { return outerVariable; }}', true, 125),
    new Answer(498, 'var outerVariable = "outer";function outerFunction() { return function innerFunction() { return outerVariable; }}', false, 125),
    new Answer(499, 'var outerVariable = "outer";function outerFunction() { var innerFunction = function() { return outerVariable; } return innerFunction;}', false, 125),
    new Answer(500, 'function outerFunction() { var outerVariable = "outer"; function innerFunction() { return outerVariable; } innerFunction(); }', false, 125),

    new Answer(501, '[3, 42, Promise { \'foo\' }]', false, 126),
    new Answer(502, '[Promise { 3 }, 42, Promise { \'foo\' }]', false, 126),
    new Answer(503, '[3, 42, \'foo\']', true, 126),
    new Answer(504, '[Promise { 3 }, Promise { 42 }, Promise { \'foo\' }]', false, 126),

    new Answer(505, 'NaN, because undefined is not a valid value for a number.', false, 127),
    new Answer(506, '5, because a is defined as undefined and is therefore treated as the default value', true, 127),
    new Answer(507, 'NaN, because a is not defined', false, 127),
    new Answer(508, '5, because both a and b are defined as default parameters', false, 127),

    new Answer(509, '1, 2, undefined, false', false, 128),
    new Answer(510, '1, 2, 3, false', false, 128),
    new Answer(511, '1, 2, undefined, true', false, 128),
    new Answer(512, '1, 2, 3, true', true, 128),

    new Answer(513, '{ x: 1, y: 2, z: 3}', false, 129),
    new Answer(514, '{ y: 2 }', false, 129),
    new Answer(515, '{x: 1, b: { y: 2 }, z: 3}', true, 129),
    new Answer(516, 'undefined', false, 129),

    new Answer(517, '12', false, 130),
    new Answer(518, '-1', false, 130),
    new Answer(519, '7', true, 130),
    new Answer(520, '1', false, 130),

    new Answer(521, 'NaN, because add is not a valid function for the reduce method to use.', false, 131),
    new Answer(522, '10, because the reduce function will sum up all elements in the numbers array and return the result', true, 131),
    new Answer(523, 'undefined, because reduce is not a method of the Array object in JavaScript', false, 131),
    new Answer(524, '0, because the second argument 0 passed to reduce will override any values in the numbers array', false, 131),

    new Answer(525, 'Uncaught TypeError: Cannot read property \'name\' of undefined', false, 132),
    new Answer(526, 'Hello, John', false, 132),
    new Answer(527, 'Hello, Jane', true, 132),
    new Answer(528, '[Function: greet]', false, 132),

    new Answer(529, 'My name is Jane', true, 133),
    new Answer(530, 'ReferenceError', false, 133),
    new Answer(531, 'My name is John', false, 133),
    new Answer(532, 'TypeError', false, 133),

    new Answer(533, 'async/await is the old way of doing asynchronous programming in JavaScript, and Promises are the new way.', false, 134),
    new Answer(534, 'async/await is faster than Promises.', false, 134),
    new Answer(535, 'async/await is easier to read and write than Promises.', true, 134),
    new Answer(536, 'There is no difference, they are the same thing.', false, 134),

    new Answer(537, 'function add(a = 0, b = 0) {return a + b;}', true, 135),
    new Answer(538, 'function add(a = 0; b = 0) {return a + b;}', false, 135),
    new Answer(539, 'function add(a = 0, b) {return a + b;}', false, 135),
    new Answer(540, 'function add(a, b) = 0 {return a + b;}', false, 135),

    new Answer(541, 'TypeError: Cannot read property \'name\' of undefined', false, 136),
    new Answer(542, 'Hello, my name is John and I know undefined, undefined, undefined', false, 136),
    new Answer(543, 'Hello, my name is undefined and I know JavaScript, HTML, CSS', false, 136),
    new Answer(544, 'Hello, my name is John and I know JavaScript, HTML and CSS', true, 136),

    new Answer(545, '{ x: 1 }', false, 137),
    new Answer(546, '{ y: 2 }', false, 137),
    new Answer(547, '{ x: 1, y: 2 }', true, 137),
    new Answer(548, 'undefined', false, 137),

    new Answer(549, '10', false, 138),
    new Answer(550, '20', false, 138),
    new Answer(551, '15', true, 138),
    new Answer(552, '5', false, 138),

    new Answer(553, '10 10 false', false, 139),
    new Answer(554, '10 undefined false', false, 139),
    new Answer(555, '10 10 true', true, 139),
    new Answer(556, 'undefined 10 false', false, 139),

    new Answer(557, 'gen() => {}', false, 140),
    new Answer(558, 'function gen() {}', false, 140),
    new Answer(559, '*gen() {}', false, 140),
    new Answer(560, 'function *gen() {}', true, 140),

    new Answer(561, 'None of the above', false, 141),
    new Answer(562, 'Both methods can be used to handle resolved and rejected values interchangeably.', false, 141),
    new Answer(563, '.then() is used to handle resolved values, while .catch() is used to handle rejected values.', true, 141),
    new Answer(564, '.catch() is used to handle resolved values, while .then() is used to handle rejected values.', false, 141),

    new Answer(565, 'A generator function can pause and resume its execution, while a regular function runs to completion every time it is called', true, 142),
    new Answer(566, 'A generator function is always asynchronous, while a regular function can be either asynchronous or synchronous.', false, 142),
    new Answer(567, 'A generator function returns a generator object, while a regular function returns an array', false, 142),
    new Answer(568, 'A generator function can only be used once, while a regular function can be called multiple times', false, 142),

    new Answer(569, '[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]', true, 143),
    new Answer(570, '[0, 2, 3, 5, 8, 13, 21, 34, 55, 89]', false, 143),
    new Answer(571, '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', false, 143),
    new Answer(572, '[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', false, 143),

    new Answer(573, 'Error', false,  144),
    new Answer(574, 'Nothing', false,144),
    new Answer(575, 'Finished "Promise Resolved"', true, 144),
    new Answer(576, '"Promise Resolved" "Finished"', false, 144),

    new Answer(577, '1, 2, 3, true', true, 145),
    new Answer(578, '1, 2, undefined, true', false, 145),
    new Answer(579, '1, 2, 3, false', false, 145),
    new Answer(580, '1, 2, undefined, false', false, 145),

    new Answer(581, 'Jane Doe', false,146),
    new Answer(582, 'Jane Smith', true, 146),
    new Answer(583, 'undefined undefined', false, 146),
    new Answer(584, 'John Doe', false, 146),

    new Answer(585, '{ name: \'John\', age: 30 }', true, 147),
    new Answer(586, '{ age: 30 }', false, 147),
    new Answer(587, '{ age: 30, name: \'John\'}', false, 147),
    new Answer(588, '[object Object]', false, 147),

    new Answer(589, '10', false, 148),
    new Answer(590, '15', true, 148),
    new Answer(591, '5', false, 148),
    new Answer(592, 'NaN', false, 148),

    new Answer(593, '1 2 3 Error', false, 149),
    new Answer(594, 'undefined undefined undefined undefined', false, 149),
    new Answer(595, '1 2 3 undefined', true, 149),
    new Answer(596, '1 2 3 null', false, 149),

    new Answer(597, '6', true, 150),
    new Answer(598, '9', false, 150),
    new Answer(599, '12', false, 150),
    new Answer(600, '15', false, 150),

    new Answer(601, 'Use a .then() block to handle the resolved value.', true, 151),
    new Answer(602, 'Wrap the Promise in a setTimeout() call.', false, 151),
    new Answer(603, 'None of the above.', false, 151),
    new Answer(604, 'Use the await keyword before the Promise.', true, 151),

    new Answer(605, '1 undefined', false, 152),
    new Answer(606, 'undefined undefined', false, 152),
    new Answer(607, '2 3', false, 152),
    new Answer(608, '1 2', true, 152),

    new Answer(609, '-Infinity 0.30102999566398114 1 -Infinity', true, 153),
    new Answer(610, 'NaN NaN NaN NaN', false, 153),
    new Answer(611, '0 0.6931471805599453 1 NaN',false, 153),
    new Answer(612, '0 NaN 1 NaN', false, 153),

    new Answer(613, 'Error', false, 154),
    new Answer(614, 'Promise 2', false, 154),
    new Answer(615, 'Promise 1', true, 154),
    new Answer(616, '[Promise 2, Promise 1]', false, 154),

    new Answer(617, 'undefined', false, 155),
    new Answer(618, '3', false, 155),
    new Answer(619, '8', true, 155),
    new Answer(620, '5', false, 155),

    new Answer(621, 'NaN NaN NaN', false, 156),
    new Answer(622, '0 1 2', true, 156),
    new Answer(623, 'null null null', false, 156),
    new Answer(624, 'undefined undefined undefined', false, 156),

    new Answer(625, 'undefined', false, 157),
    new Answer(626, '30', true, 157),
    new Answer(627, '10', false, 157),
    new Answer(628, '20', false, 157),

    new Answer(629, 'An error message', false, 158),
    new Answer(630, 'Resolved!', false, 158),
    new Answer(631, 'Resolved! Then Called', true, 158),
    new Answer(632, 'Then Called', false, 158),

    new Answer(633, 'None of the above', false, 159),
    new Answer(634, '"done2"', false, 159),
    new Answer(635, '"done" "done2"', true, 159),
    new Answer(636, '"done"', false, 159),

    new Answer(637, 'TypeError: this.fullName is not a function', false, 160),
    new Answer(638, 'Hello John Doe', true, 160),
    new Answer(639, 'Hello undefined undefined', false, 160),
    new Answer(640, 'undefined Hello John Doe', false, 160),


];