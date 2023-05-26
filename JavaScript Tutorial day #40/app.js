const restaurant = {
    name: 'Fast Food Hub',
    location: 'worldWide',
    category: ['fastfood', 'pizza', 'dessi', 'chiness'],
    staterMenu: ['biryani', 'pulao', 'zinger', 'sandwich', 'roll'],
    mainMenu: ['karhai', 'nihari', 'korma'],

    order: function (staterIndex, MainIndex) {
        return [this.staterMenu[staterIndex], this.mainMenu[MainIndex]]
    },

    orderDeliver: function ({ location, time, staterIndex, mainIndex }) {
        console.log(`Order Deliver: ${this.staterMenu[staterIndex]}
         and${this.mainMenu[mainIndex]} deliver will be ${location} at ${time}`)
    }

}

const [abc, efg] = restaurant.order(2, 0);
console.log(abc, efg);

restaurant.orderDeliver({
    time: '2:00pm',
    location: 'worldWide',
    staterIndex: 2,
    mainIndex: 2,
})




