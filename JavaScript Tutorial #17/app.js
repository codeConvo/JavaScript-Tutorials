function logged () {
    console.log('my first function')
}

logged()
logged()
logged()
logged()
logged()

function fruits (apple , orange){
    console.log(apple,orange)

    const result = `Juice with ${apple} apple and ${orange} orange`
    return result
}

const finalVal = fruits(5,20)
console.log(finalVal)

function abc(a,b ){

    const hello = a +b ;
    console.log(hello)
    return hello;
}

abc(5,7)