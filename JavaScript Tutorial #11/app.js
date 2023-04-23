// falsy value 0, "", undefined,null,NaN

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean("true"))

let money =10;

if(money){
    console.log("you should enough money")
}else{
    console.log("please find a job gareebo");

}

let abc="cd";

if(abc){
    console.log("this value is not undefined,this value is truthy value")

}else{
    console.log("this value is undefined ,this value is falsy value")

}