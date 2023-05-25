const restaurant = {
    name: 'Fast Food Hub',
    location: 'worldWide',
    category: ['fastfood', 'pizza', 'dessi', 'chiness'],
    staterMenu: ['biryani', 'pulao', 'zinger', 'sandwich', 'roll'],
    mainMenu: ['karhai', 'nihari', 'korma'],
    openingHours: {
        thus: {
            open: 09,
            close: 22,
        },
        fri: {
            open: 10,
            close: 23,
        },
        sat: {
            open: 08,
            close: 24,
        },
    }
}

const { name, category, openingHours } = restaurant;
console.log(name, category, openingHours);

const {
    name: restName,
    category: restCategory,
    openingHours: tags,
} = restaurant;

console.log(restName, restCategory, tags);

const { menu = [], mainMenu: stater = [] } = restaurant;
console.log(menu, stater);

const restmenu = restaurant.menu;
console.log(restmenu);

let a = 20;
let b = 30;

const obj = { a: 10, b: 50 };
({ a, b } = obj);

console.log(a, b);

const { sat: { open, close }, } = openingHours;

console.log(open, close )