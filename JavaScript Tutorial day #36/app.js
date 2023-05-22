// Globle 


function test (){
const local = 30;
console.log(local)
   // console.log(abc)
}

let abc = 'Globle';
test()

if(true){
    console.log(abc)
// console.log(local)

}

function hello (){
let abc = 'Block';
const efg = 'Local';

console.log(abc, efg)
}

hello()

function myFunction(){
    if(true){
        var blockVar =20;
        var blockVar2 =30;
        console.log(blockVar,blockVar2)
    }
    console.log(blockVar2, blockVar)
}
myFunction()
