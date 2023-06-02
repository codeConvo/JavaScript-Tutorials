const obj1 = {
    names: 'jhone',
    age:24
};

const obj2 = {
    names: 'doe',
    edu: 'Bcs'
}

// obj1.age = obj1.age || 25;

// obj2.age = obj2.age || 24

// obj2.age ||= 24;
// obj1.age ||= 25

obj1.edu &&= 'MCS';
obj2.edu &&= 'Masters';


console.log(obj1, obj2);
