function createUser({name, age}:{name: string, age: number}){
    return `${name} is ${age} years old`
}
console.log(createUser({name: "vaibhav", age: 28}))


function createTrip({_id, truck_number}: {_id: string, truck_number?:string}):{_id:string, truck_number:any}{
    return {
        _id, truck_number
    }
}

console.log(createTrip({_id: "3216547"}))

const testObj = {
    _id:"123",
    extra: "field is extra"
}

createTrip(testObj); // when passing object in this fashion ts will accept extra fields even when not defined in arg definition

// creating custom types ( type alias )
type User = {
    readonly _id?: string;
    name: string;
    age: number;
};

function userMsg(user: User): string{
    return `${user.name} is ${user.age} years old`
}

userMsg({name: "KP", age: 24})


let user1: User = {
    _id: "321654",
    name: "Vab",
    age: 21
} 

// user1._id = "231"  // can't modify readonly property

console.log(user1);



type cardNumber = {
    cardnumber: string;
}
type cardExpiry = {
    expiry: string
}
type cardDetails = cardNumber & cardExpiry & {
    cvv: number
}

const card1: cardDetails = {
    cvv: 321,
    cardnumber: "3214 9878 6545 3212",
    expiry: "12/29"
}
console.log(card1);