


// Learing String IN Javascript :

let name = "Mushraf"
let bankAccount = 5005

// console.log(name + bankAccount + " value")  

console.log(`My name is :${name} My bankAccount No :${bankAccount}`)

let gameName = new String("mushraf-fc-ku")

console.log(gameName[0])
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

let anotherOneString = "  mushraf  "
console.log(anotherOneString);

console.log(anotherOneString.trim());

const url = "https:mushraf.com/mushraf%20sultan"
console.log(url.replace('%20', '-'))

console.log(url.includes("mushraf"))

console.log(gameName.split('-'))
