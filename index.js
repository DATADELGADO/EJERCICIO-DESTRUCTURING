const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Mongolia", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        age: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        age: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        age: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        age: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        age: 20,
    },
];




// *******************Ejercicios: Nivel 1************************



// ********************* #1 **************************

// let [e, pi, gravedad, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravedad, humanBodyTemp, waterBoilingTemp);



// ********************* #2 **************************


// let [fin, est, sw, den, nor] = countries;
// console.log(fin, est, sw, den, nor);



// ********************* #3 **************************

// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);


// *******************Ejercicios: Nivel 2************************


// ********************* #1 **************************


// for (let { name, scores, skills, age } of users) {
//     console.log(name, scores, skills, age);
// }


// ********************* #2 **************************

// let names = [];
// for (let { name, skills } of users) {
//     skills.length < 2 ? names.push(name) : console.log();
// }
// console.log(names);



// *******************Ejercicios: Nivel 3************************

import { countries_obj } from "./countries_data.js";


// ********************* #1 **************************

// for (let { name, capital, population, languages } of countries_obj) {
//     console.table(name, capital, population, ...languages);
// }


// ********************* #2 **************************

// const student = ["David", ["HTMT", "CSS", "JS", "React"], [98, 85, 90, 95]];

// let [name, [...skills], [, , jsScore, reactScore]] = student;
// console.log(name, skills, jsScore, reactScore);


// ********************* #3 **************************

// const students = [
//     ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//     ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]]
// ];
// const convertArrayToObject = (array) => {
//     let array2 = []
//     for (let [name, skills, score] of array) {
//         array2.push({ name: name, "skills": skills, "score": score })
//     }
//     return Object.assign({}, array2);
// }
// console.log(convertArrayToObject(students));



// ********************* #4 **************************


// const student = {
//     name: "David",
//     age: 25,
//     skills: {
//         frontEnd: [
//             { skill: "HTML", level: 10 },
//             { skill: "CSS", level: 8 },
//             { skill: "JS", level: 8 },
//             { skill: "React", level: 9 },
//         ],
//         backEnd: [
//             { skill: "Node", level: 7 },
//             { skill: "GraphQL", level: 8 },
//         ],
//         dataBase: [{ skill: "MongoDB", level: 7.5 }],
//         dataScience: ["Python", "R", "D3.js"],
//     },
// };

// let newStudent = { ...student };
// newStudent.skills.frontEnd.push({ skill: 'BootStrap', level: 8 });
// newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
// newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
// newStudent.skills.dataScience.push("SQL");
// console.log(newStudent);






