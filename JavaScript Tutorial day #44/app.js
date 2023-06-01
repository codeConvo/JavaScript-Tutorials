const obj = {};

obj.check = 0;

const update = obj.check || 10;

console.log(update);

const update1 = obj.check ?? 10;

console.log(update1);

const null1 = null;

const nullOpe = null1 ?? 10;

console.log(nullOpe);

const efg = null;

const abc = 0;

const upd = efg ?? abc;

console.log(upd)
