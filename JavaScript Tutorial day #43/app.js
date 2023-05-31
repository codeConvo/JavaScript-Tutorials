/// use any data type and return any data type this called short circuit

console.log('Short circuit || operator')

console.log(3 || 'michal');
console.log('' || 'michal');
console.log(true || 'michal');
console.log(undefined || null);

console.log(undefined || "" || 0 || "micahl" || null || true);


const obj = {
    met:function(ind1,ind2){
        console.log(ind1,ind2)
    }
};

obj.check = 0;

const check1 = obj.check ? obj.check : 10;
console.log(check1);

const check2 = obj.check || 10;
console.log(check2);

console.log('Short circuit && operator');

console.log(2 && 'michal');
console.log('' && 'michal');
console.log(0 && 'michal');
console.log('undefined' && true && 0 && "hello");

if(obj.met){
    obj.met('hello','world');
}

obj.met && obj.met('hello','world');