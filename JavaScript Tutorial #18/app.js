// Funtion Declaration

const age1 = calcAge(1997);

function calcAge(birthDate) {

    return 2023 - birthDate
}

console.log(age1);


/// function Expression

const calcAge2 = function (birthDate) {
    return 2023 - birthDate
}

const age2 = calcAge2(1998);

console.log(age2);
