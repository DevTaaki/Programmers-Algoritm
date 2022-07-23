const fs = require('fs')
const input = fs.readFileSync('dev/stdin')
const a = input

if(101 > a && a > 89) {
    console.log('A')
} else if(90 > a && a > 79) {
    console.log('B')
} else if(80 > a && a > 69) {
    console.log('C')
} else if(70 > a && a > 59) {
    console.log('D')
} else 
    console.log('F')