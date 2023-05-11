"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser({ name, age }) {
    return `${name} is ${age} years old`;
}
console.log(createUser({ name: "vaibhav", age: 28 }));
function createTrip({ _id, truck_number }) {
    return {
        _id, truck_number
    };
}
console.log(createTrip({ _id: "3216547" }));
const testObj = {
    _id: "123",
    extra: "field is extra"
};
createTrip(testObj);
function userMsg(user) {
    return `${user.name} is ${user.age} years old`;
}
userMsg({ name: "KP", age: 24 });
