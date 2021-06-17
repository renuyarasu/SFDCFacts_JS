// JavaScript: MDN - Destructuring
// For of iteration and destructuring
const people = [
  {
    name: "VedaGna",
    family: {
      father: "Renu",
      mother: "Hindu",
      sister: "Gnapika",
    },
    age: 4
  },
  {
    name: "Renu",
    family: {
      father: "Subbarao",
      mother: "Venkateswaramma",
      sister: "Tejaswi",
    },
    age: 35
  },
];

for( const {name:n, family: {father: f}} of people){
  console.log('Name: ' + n + ', Father: '+ f);
}
// Name: VedaGna, Father: Renu
// Name: Renu, Father: Subbarao