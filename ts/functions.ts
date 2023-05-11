function add2(x: number){  // type inference to any in case type not defined
    return (x + 2).toString();
}

console.log(typeof add2(10));


let user_details = (name: string, age: number, blood_group: string = "A+", flag: boolean = false) => {
    // const data = {
    //     name,
    //     age,
    //     blood_group
    // };

    // return data;
}

user_details("Vaibhav", 28)


// return different data types based on some condition with type check

const testFunc = (phone: string): boolean | string => {
    if(phone === "123456789"){
        return "200 OK"
    }
    return false;
}

testFunc("321");


const people = ["Raj", "Ram", "Rakesh"];

let messages = people.map((name):string => {
    return `Hello ${name}`
});

console.log(messages);


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

consoleError("phat gaya re baba");

function errorHandler(errmsg: string): never{
    // console.log(errmsg);  //issue as for never type the code should either throw error or just crashes all together
    throw new Error(errmsg);
}