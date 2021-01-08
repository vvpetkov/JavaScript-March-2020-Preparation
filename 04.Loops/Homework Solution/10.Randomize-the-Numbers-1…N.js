// // Prep/Loops/Homeworks
// 10.Randomize-the-Numbers-1…N.js

const input = ['10']
const print = this.print || console.log
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0)

const n = +gets()

let numbers = []
for (let i = 1; i <= n; i++) {
    numbers.push(i)
}

print(numbers)
print(numbers.join(' '))
let min = 0
let max = numbers.length

for (let index = 0; index < numbers.length; index++) {
    let randomIndex = Math.floor(Math.random() * (max - min)) + min

    let currentNumbers = numbers[index]
    let randomNumber = numbers[randomIndex]

    numbers[index] = randomNumber
    numbers[randomIndex] = currentNumbers

    
}
print(numbers.join(' '))

// 2021

let numbers21 = []
console.log(numbers21) // []
numbers21.push(5)
console.log(numbers21) // [ 5 ]
numbers21.push(3)
console.log(numbers21) // [ 5, 3 ]
