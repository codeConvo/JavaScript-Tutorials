const restaurant = {
    name: 'Fast Food Hub',
    location: 'worldWide',
    category: ['fastfood', 'pizza', 'dessi', 'chiness'],
    staterMenu: ['biryani', 'pulao', 'zinger', 'sandwich', 'roll'],
    mainMenu: ['karhai', 'nihari', 'korma'],
}

const menu = [...restaurant.staterMenu, ...restaurant.mainMenu];

for(const [i,e] of menu.entries()) {
    console.log(`${i + 1} : ${e}`)
}