function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function () {
    console.log("I am saying: " + this.saying);
};

function customNew(constructor) {
    let obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    let argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

let person = customNew(Person, "Hello world");
person.talk();
