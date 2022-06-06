const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");

console.log(hobbies);

const person = { age: 32 };

function getAdultYears(p) {
    p.age -= 18;
    return p.age;
}

// console.log(getAdultYears(person));
// console.log(getAdultYears({ age: person.age }));
console.log(getAdultYears({ ...person }));

console.log(person);
