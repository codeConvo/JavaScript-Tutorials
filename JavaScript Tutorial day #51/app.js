const qestions =  new Map([
    ['question','What is the populer language in the world'],
    [1,'Java'],
    [2,'C++'],
    [3,'JavaScript'],
    ['correct',3],
    [true,'Correct ☺'],
    [false,'Try again'],
])
console.log(qestions.get('question'));
for(const [key,value] of qestions){
    if(typeof key === 'number'){
    console.log(`Answer ${key} : ${value}`);
}
}

// const answer = Number(prompt('What is the Correct answer'));
// console.log(answer);

// console.log(qestions.get(qestions.get('correct')=== answer));

console.log([...qestions.keys()]);
console.log([...qestions.values()]);