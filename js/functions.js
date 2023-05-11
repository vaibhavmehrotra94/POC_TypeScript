"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add2(x) {
    return (x + 2).toString();
}
console.log(typeof add2(10));
let user_details = (name, age, blood_group = "A+", flag = false) => {
};
user_details("Vaibhav", 28);
const testFunc = (phone) => {
    if (phone === "123456789") {
        return "200 OK";
    }
    return false;
};
testFunc("321");
const people = ["Raj", "Ram", "Rakesh"];
let messages = people.map((name) => {
    return `Hello ${name}`;
});
console.log(messages);
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("phat gaya re baba");
function errorHandler(errmsg) {
    throw new Error(errmsg);
}
