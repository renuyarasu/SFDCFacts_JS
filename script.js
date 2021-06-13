// JavaScript: Loops - For Loop

// forEach loop
const students = [
  {
    name: "Veda",
    age: 25,
    isPresent: true,
  },
  {
    name: "Gnapika",
    age: 22,
    isPresent: false,
  },
  {
    name: "Hindu",
    age: 26,
    isPresent: true,
  },
  {
    name: "Renu",
    age: 35,
    isPresent: false,
  },
  {
    name: "Yarasu",
    age: 25,
    isPresent: true,
  },
  {
    name: "Sai",
    age: 19,
    isPresent: false,
  },
];

/* const newArray = students.map(function (student) {
  // return student.name; //All names if students
  // return student.name[0]; // name: first lettes
  // return student.name[0].toLowerCase(); name: first lettes in toLowerCase
}); */

const newArray = students
  .filter((student) => {
    return student.isPresent === false;
  })
  .map((student) => student.name);
console.log(newArray);
