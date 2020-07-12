Array.prototype.customFilter = function (callback) {
    let array = this;
    let requiredArray = [];
    for (let i = 0; i < array.length; i++) {
        let resultFromCallback = callback.bind(null, array[i]);
        if (resultFromCallback()) {
            requiredArray.push(array[i]);
        }
    }
    return requiredArray;
};

let array = [1, 2, 3, 4, 5];
let objectArray = [
    {name: "sanjeet", age: 25},
    {name: "san", age: 20},
    {name: "sam", age: 26}
];

let arrayResult = array.customFilter(num => num % 2 == 0);
console.log(arrayResult);

let objectResult = objectArray.customFilter(obj => obj.age > 22);
console.log(objectResult);
