const spl = 'syed+bilal+ali';
console.log(spl.split('+'));

const channel = 'Code Convo';

console.log(channel.split(' '));

const newName = [firstName, lastName] = 'Code Convo'.split(' ');

const jionMethod = ['Mr,', firstName, lastName].join('-----------');

console.log(jionMethod);

function capitaized  (name){
const names = name.split(' ');
const newArr = [];

for(const n of names){
    newArr.push(n[0].toUpperCase() + n.slice(1));
}
console.log(newArr.join(' '));
}
capitaized('syed bilal ali code convo');
capitaized('syed bilal ali code convo');
capitaized('syed bilal ali code convo');