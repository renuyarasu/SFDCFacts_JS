// JavaScript: Object Literals
const mystery = 'test';
const obj = {
    p1: 10,
    p2: 20,
    f1() { },
    f2: () => { },
    [mystery]: 42,
}

console.log(obj.mystery); // undefined