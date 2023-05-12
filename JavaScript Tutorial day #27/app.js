const arr = [
    'jhon',
    'doe',
    2034 - 1991,
    ['jhon', 'doe', 'michal'],
    'world',
    'hello',
    30,
    20,
];
const types = []
// console.log(arr)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

for (let i = 0; i < arr.length; i++) {
console.log(arr[i], typeof arr[i]);

// types[i] = typeof arr[i];
types.push(typeof arr[i]);

}
console.log(types);


const years = [1991,1997,1998,2002,2012];
console.log(years);
const ages = [];
for(let i = 0 ; i < years.length; i++){
    console.log(2023 - years[i])
}


// break and continue the loops 
for (let i = 0; i < arr.length; i++) {

if(typeof arr[i] === 'number') break 
    console.log(arr[i], typeof arr[i]);
    }
    