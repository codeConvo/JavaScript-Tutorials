const arr = [
    'jhon',
    'doe',
    2034 - 1991,
    ['jhon', 'doe', 'michal'],
    'world',
    'hello',
];

for(let i = arr.length -1; i >= 0; i--){
    console.log(arr[i])
}

for(let i = 1; i < 4; i++){
    console.log(`Subjects ${i} ` );

    for(let r = 1; r < 7; r++){
        console.log(`Maths ${r} Exersice : ${i}`)
    }
}