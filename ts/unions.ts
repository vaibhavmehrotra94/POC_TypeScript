let id: string|number;
id = "321"
id = 321

const data1: string[] = ["as","at"]
const data2: number[] = [1, 2, 3.5]
// const data3: number | string[] = ["321", 321] 
const data3: (number | string)[] = ["321", 321, "Ajay"]

type Admin = {
    name: string,
    type: "Admin"
}

type CnF = {
    name: string,
    type: "CnF"
}

let user: Admin|CnF;

user = {
    name: "maverick",
    type: "Admin"
}
user = {
    name: "maverick",
    type: "CnF"
}


let pi:3.14;
// pi=45.2 cannot assigned as 3.14 value is defined against pi

let seatAllotment: "aisle" | "middle" | "window"   //this makes sure only these 3 values can be assigned to this variable