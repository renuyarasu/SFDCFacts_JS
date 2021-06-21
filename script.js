// JavaScript: Destructuring and RestSpread

// RestSpread in Array
const [first, ...restItems] = [1, 2, 3, 4, 5, 6];
console.log(first); 1
console.log(restItems); // [ 2, 3, 4, 5, 6 ]


// RestSpread in Object
const data = {
    num_01: '001',
    num_02: '002',
    fName: 'VedaGna',
    lName: 'Yarasu',
}
const { num_01, num_02, ...person } = data;
const newObject = { ...person }
console.log(newObject);