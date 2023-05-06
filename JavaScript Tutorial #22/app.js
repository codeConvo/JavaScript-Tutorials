// add some values in the and of arrays

const friends = ['bilal','haris','osama','sajid'];
console.log(friends);

friends.push('sajjad'); // add last value

console.log(friends)

// add some values in the beginning of arrays

friends.unshift('syed');// add first value

console.log(friends);

// remove methods

const arr = friends.pop();// remove last value
console.log(friends);
console.log(arr);

friends.shift(); // remove first value
console.log(friends);

const inc = friends.includes('bilal'); 
console.log(inc)

const ind = friends.indexOf('osama');
console.log(ind)