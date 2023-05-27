const restaurant = {
    name: 'Fast Food Hub',
    location: 'worldWide',
    category: ['fastfood', 'pizza', 'dessi', 'chiness'],
    staterMenu: ['biryani', 'pulao', 'zinger', 'sandwich', 'roll'],
    mainMenu: ['karhai', 'nihari', 'korma'],


    orderPasta: function (ind1, ind2, ind3) {
        console.log(`Here is your delecious past with this ingredients ${ind1}${ind2}${ind3}`)
    }
}
const arr = [1, 2];

// const arr1 = [7, 8, 9 , arr[0],arr[1]];

const arr1 = [7, 8, 9, ...arr]

console.log(arr1)
console.log(...arr1)

// const staterIndex = [...restaurant.staterMenu];
const staterIndex = [...restaurant.staterMenu, 'pasta'];


console.log(staterIndex)

const menu = [...restaurant.mainMenu, ...restaurant.category, ...restaurant.staterMenu];

console.log(menu)

const names = 'michal';

const newName = [...names, 'pasta'];

console.log(newName);

// const ingredients = [prompt('lets make choose youre ingredients indrent1?'),
// prompt('ingredient2'),
// prompt('ingredient3')];

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// console.log(ingredients)

// restaurant.orderPasta(...ingredients);

const newRest = { founder: 'abc', ...restaurant, since: 1998 };

console.log(newRest);

const copyName = { ...restaurant };

copyName.name = 'abc';
console.log(copyName)