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