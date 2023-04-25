// && || !

const sarahHasDrivingLicense = true;
const sarahHasGoodVision = true;

console.log(sarahHasDrivingLicense && sarahHasGoodVision);
console.log(sarahHasDrivingLicense || sarahHasGoodVision);
console.log(!sarahHasGoodVision)


// if(sarahHasDrivingLicense && sarahHasGoodVision ){
//     console.log('Sarah should start a driving');
// }else{
//     console.log('Someone should start a driving');
// }

const sarahHasSick = false;


if(sarahHasDrivingLicense && sarahHasGoodVision && !sarahHasSick ){
    console.log('Sarah should start a driving');
}else{
    console.log('Someone should start a driving');
}
