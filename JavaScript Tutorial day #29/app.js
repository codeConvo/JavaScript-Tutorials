// let i =0;
// while(i <= 6){
//     console.log(i);
//     i++;
// };

let dice =Math.trunc( Math.random() *6)+1;
// console.log(dice);

while(dice !== 6){
    console.log(`You have ${dice}`)
    dice =Math.trunc( Math.random() *6)+1;
    if(dice === 6){
   console.log(`You got ${dice}`)
    }
}