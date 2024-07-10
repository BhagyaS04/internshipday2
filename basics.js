let names=['bhagya','adish',3];
console.log(names);
console.log('length of list names is: ',names.length);
console.log(names[1]);

//console.log(typeof names[1])

names.push('afrina')
console.log(names)

names.unshift('Amritha',0)
console.log(names)

console.log(names.pop())

//objects and array of objects
let person={
    name: "Bhagya",
    age: 19
}

console.log(person)

let ppl=[
    {
        name: 'A',
        age:  10
    },

    {
        name: 'B',
        age:15
    },

    {
        name: 'C',
        age:20
    }

]

console.log(ppl)
console.log(ppl[1])
console.log(ppl[2].name)

//functions
