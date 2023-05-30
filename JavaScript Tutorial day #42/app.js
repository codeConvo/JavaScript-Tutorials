const restaurant = {
    name: 'Fast Food Hub',
    location: 'worldWide',
    category: ['fastfood', 'pizza', 'dessi', 'chiness'],
    staterMenu: ['biryani', 'pulao', 'zinger', 'sandwich', 'roll'],
    mainMenu: ['karhai', 'nihari', 'korma'],

    openHours: {
        thus: {
            open: 10,
            close: 11,
        },
        fri: {
            open: 11,
            close: 12,
        },
        sat: {
            open: 0,
            close: 0,
        }
    },

    orderNow: function (inngredient, ...othersIngredient) {
        console.log(inngredient);
        console.log(othersIngredient);
    }


}


// Destructuring
const [a, b, , ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(a, b, rest);

const [pizza, pasta, ...others] = [...restaurant.category, ...restaurant.staterMenu];

console.log(pizza, pasta, others);


//Object

// const { openHours} =restaurant;
// console.log(openHours)

const { sat, ...weekday } = restaurant.openHours;

console.log(weekday);

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i]
    console.log(sum);

}

add(3, 2);
add(1, 4, 6);
add(5, 8, 9, 3);


restaurant.orderNow('pasta', 'pizza', 'zinger', 'buiryani');