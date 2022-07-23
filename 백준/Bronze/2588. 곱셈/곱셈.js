const fs=require('fs');
const [A, B]=fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const units = B % 10;
const tens = Math.floor((B%100)/10);
const hundreds = Math.floor(B/100);

console.log(A*units);
console.log(A*tens);
console.log(A*hundreds);
console.log(A*B);