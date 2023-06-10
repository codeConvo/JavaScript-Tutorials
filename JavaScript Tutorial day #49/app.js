const setData = new Set([
    'pizza',
    'pasta',
    'sandwich',
    'zinger',
    'pizza',
    'pasta'
]);
console.log(setData.size);

setData.add('pizational');
setData.add(1);
setData.add({name:'Bilal'});

console.log(setData);

for(const set of setData) console.log(set);

console.log(setData.has('pizza'));
console.log(setData.has('biryani'));

// setData.clear()
// console.log(setData);

setData.delete('pizational');

console.log(setData);

const setStr = new Set('syedbilalaliwelcometocodeconvo');

console.log(setStr.size);

const arrDup = ['haris','sajjad','jawwad','imran','khan','haris','sajjad'];

const set = [...new Set(arrDup)];

console.log(set);




