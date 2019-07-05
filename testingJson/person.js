const fs =require('fs')

const person ={
    name: "Dylan",
    age:23
}

const personJson = JSON.stringify(person)
console.log(personJson)
fs.writeFileSync('person.json', personJson)
const dataBuffer = fs.readFileSync('person.json')
console.log(dataBuffer)
// const dataJson = dataBuffer.toString();
const data =JSON.parse(dataBuffer)
console.log(data)