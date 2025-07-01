let num = [5, 8, 2, 9, 3];

num.push(1);
console.log(num.sort());
console.log(num);
console.log(`tamanho de vetor e ${num.length}`);
console.log(`A posição 0 tem o valor ${num[5]}`);

// for(let pos = 0; pos <num.length; pos++) {
//     console.log(`posição ${pos} e do valor {${num[pos]}}`)
// }

for (let pos in num) {
    console.log(`posição ${pos} e do valor ${num[pos]}`);
}

// for = para
// in = dentro

// num = vetor
// pos = posição
// num[pos] = valor da posição


