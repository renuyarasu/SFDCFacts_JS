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

students.forEach(function (student) {
  console.log(student.name);
});
