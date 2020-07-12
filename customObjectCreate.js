const cat = {
    makeSound: function () {
        console.log(this.sound);
    }
};

function objectCreate(proto) {
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj;
}

const customMark = objectCreate(cat);
customMark.sound = "Meow";
customMark.makeSound();

const mark = Object.create(cat);
mark.sound = "Bow";
mark.makeSound();

console.log(
    "Is customMark a prototype of cat:  " + cat.isPrototypeOf(customMark)
);
console.log("Is mark a prototype of cat:" + cat.isPrototypeOf(mark));
