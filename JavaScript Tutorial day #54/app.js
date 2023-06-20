const price = '100,99';
console.log(price)
const updateprice = price.replace(',', '.');

console.log(updateprice);

const para = `consequuntur consequuntur consequuntur consequuntur consequuntur consequuntur consequuntur consequuntur`;

const updPara = para.replaceAll('consequuntur', '');


console.log(para)
console.log(updPara);

const str = 'airport 360';
const str1 = 'airport 380';


const updStr = str.startsWith('air');

const endWith = str1.endsWith('880');
console.log(updStr, endWith)

if (updStr && endWith) {
    console.log('Congratulations Both words found')
}

const incPara = 'please found the world war 2 word ';


const searching = incPara.includes('wod');

console.log(searching);


function searchStd(item) {
    const check = item.toLowerCase();

    if(check.includes('mobile') || check.includes('calculator')){
        console.log('Yoy are not allowed')
    }else{
        console.log('You are allowed')
    }
}

searchStd('i have Mobile phone for contact parents');
searchStd('yes i have also Calculator');
searchStd('i have not any false products');
