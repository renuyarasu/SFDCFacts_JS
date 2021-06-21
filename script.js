// JavaScript: Object Literals

const mystery = 'answer';
const inversePI = 1 / Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() { },
    f2: () => { },
    [mystery]: 42,
    inversePI,
}

console.log(obj.inversePI); // 42