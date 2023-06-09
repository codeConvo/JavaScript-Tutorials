const restaurant = {
    name: 'Fast Food Hub',
    location: 'worldWide',
    category: ['fastfood', 'pizza', 'dessi', 'chiness'],
    staterMenu: ['biryani', 'pulao', 'zinger', 'sandwich', 'roll'],
    mainMenu: ['karhai', 'nihari', 'korma'],


}
const openHours = {
    thus: {
        open: 12,
        close: 6
    },
    fri: {
        open: 1.00,
        close: 8.00
    },
    sat: {
        open: 10,
        close: 9.00
    },

}

// get object properties and ittration;

const properties = Object.keys(openHours);
console.log(properties);

let str = `We are Open in just ${properties.length} Days `;

for (const days of properties) {
    str += `${days},`;
}
console.log(str);

// get object value;

const value = Object.values(openHours);
console.log(value)


// entries 

const ent = Object.entries(openHours);

console.log(ent);

for (const [key,{open ,close}] of ent) {
console.log(`on ${key} open ${open} and close ${close}`)

}