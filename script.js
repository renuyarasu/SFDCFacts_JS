// JavaScript: Destructuring and RestSpread
console.clear();

// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'circleX',
    radius: 2,
};
const circleArea = ({ radius }, { precision = 2 } = {}) =>
    (PI * radius * radius).toFixed(precision);

console.log(circleArea(circle)); // 12.57
console.log(circleArea(circle, { precision: 5 })); // 12.56637