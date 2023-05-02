
// Function Expression
const calcAge = function (birthday) {
    return 2023 - birthday;
}
const age1 = calcAge(1997);
console.log(age1)

//Arrow Function


const calcAge2 = birthyear => 2023 - birthyear;

const age2 = calcAge2(1997);
console.log(age2)


const retirementUntil = (birthyear, firstName) => {
    const age = 2023 - birthyear;
    const retirment = 65 - age;
    // return retirment;
    return `${firstName} retirement remaining ${retirment} years`
}
console.log(retirementUntil(1997,'Bilal'));
console.log(retirementUntil(1989,'sajid'));