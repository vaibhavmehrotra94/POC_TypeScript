let greetings: string = "Hi Maverick";

console.log(greetings);

let flag = false;

// flag = "hello" -> wrong (type inference)

// let hero; // type inference -> type any by default
// hero = 123
// hero = "asd" 

let hero: string;

function getHero(){
    return "SpiderMan";
    // return 123; // creates issue in line 20 as hero variable type is string
}

hero = getHero();

console.log(hero);


