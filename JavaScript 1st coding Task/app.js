// Data One person //
// weight 78 // hight 1.69//

// Data second person //
// weight 92 // hight 1.95//

const weightA = 50;
const hightA = 1.69;

const weightB = 92;
const hightB = 1.95;

const BMIA = weightA / hightA** 2;
const BMIB = weightB / (hightB * hightB);

const BMI = BMIA > BMIB
console.log(BMI) 
console.log(BMIA ,BMIB)
