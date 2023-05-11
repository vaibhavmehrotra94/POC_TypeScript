// const heros: string[] = [];
const heros: Array<string> = [];

heros.push("spider-man");

type User = {
    name: string;
    age: number
}

const allUsers: User[] = [];
allUsers.push({name:"vab", age:22})

console.log(allUsers);

// for array of array

const colorPalet: number[][] = [
    [225,255,255],
    [0,0,0],
    [255, 0, 0]
];
console.log(colorPalet);