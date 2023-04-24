// == ===

const age = "18";

if(age == 18){
    console.log('yes age is 18 loose');
}

if(age === 18){
    console.log('yes age is 18 strict');
}

const fav = Number( prompt("what is ypur fav number"));
console.log(fav)
console.log(typeof fav)

if(fav === 18 ){
    console.log("Yes 18 is good number")
} else if(fav === 23){
    console.log('yes 23 is good number')
}
else if(fav === 40){
    console.log('yes 40 is good number')
}else{
    console.log('sorry this number is not matching')
}

if(fav !== 18){
    console.log('Why Are you not choosing 18')
}
// // !not