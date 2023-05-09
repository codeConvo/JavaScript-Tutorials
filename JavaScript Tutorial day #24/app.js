const detailObj = {
    firstName: 'syed bilal',
    lastName: 'Ali',
    job: 'Programmer',
    age: 2023 - 1997,
    friends: ['haris', 'sajjad', 'sajid']
}
console.log(detailObj.job);
console.log(detailObj['firstName']);


const NewName = 'first';
console.log(detailObj[NewName + 'Name']);

// const searching = prompt(`what is your searching about this OBJ detailObj ?
// firstName ,lastName ,job ,age,friends`,);

// console.log(detailObj[searching]);

// if(detailObj[searching]){
//     console.log(detailObj[searching]);
// }else{
//     console.log(`Please Search on this property
//     firstName ,lastName ,job ,age,friends`)
// }

detailObj.location = 'world';
detailObj['abc'] = 'hello';
console.log(detailObj);

console.log(`Bilal friend is ${detailObj.friends.length } but is bestfriend is ${detailObj.friends[0]}`)