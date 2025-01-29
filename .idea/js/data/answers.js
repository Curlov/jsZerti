import { Answer } from "../classes/Answer.js";

export const answers = [

    new Answer(1, 'shape1.x == shape2.y', false, 1),
    new Answer(2, '(shape1.x == shape2.x) && (shape1.y == shape2.y)', true, 1),
    new Answer(3, 'shape1 == shape2', false, 1),
    new Answer(4, 'Object.key(shape1) === Object.keys(shape2)', false, 1),

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
    new Answer(27, 'building["height"]', false, 7),
    new Answer(28, 'building.height();', false, 7),

    new Answer(29, 'Number.isNaN(number)', false, 8),
    new Answer(30, 'number.isInteger()', false, 8),
    new Answer(31, 'Math.ceil(number) === number', false, 8),
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
    new Answer(43, "const person = {'firstName': 'Jane', 'lastName': 'Doe', 'age': 30};", false, 11),
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
    new Answer(168, 'false', false, 42)

];