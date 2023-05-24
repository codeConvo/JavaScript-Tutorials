const restaurant = {
    name: 'Fast Food Hub',
    location: 'worldWide',
    category: ['fastfood', 'pizza', 'dessi', 'chiness'],
    staterMenu: ['biryani', 'pulao', 'zinger', 'sandwich', 'roll'],
    mainMenu: ['karhai', 'nihari', 'korma']
}

const arr = ['jhon', 'doe', 'sarah'];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c)

const [e, , g] = arr;
console.log(e, '', g);

let [firstVal, secondVal] = restaurant.category;
console.log(firstVal, secondVal);



// let temp = firstVal;
// firstVal = secondVal;
// secondVal = temp;
// console.log(firstVal, secondVal)

[firstVal, secondVal] = [secondVal, firstVal];
console.log(firstVal, secondVal)

// const arr1 = [1, 2, [3, 4]];

// const [x, , [y, z]] = arr1
// console.log(x, y, z)

const [t, w, h] = [9, 0]
console.log(t, w, h)