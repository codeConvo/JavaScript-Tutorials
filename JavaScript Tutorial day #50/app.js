// 
const rest = new Map();
rest.set('name' , 'Bilal');
rest.set('age',22);
rest.set('birthYear',2001);

console.log(rest.get('age'));
rest.set(1,"codeCovo");
rest.set(true,'We are open ');
rest.set(false ,'We are close ');

rest.set('category',[ 'pizza',  'pasta',   'sandwich',    'zinger',   'pizza',    'pasta']
)
rest.set('open',11);
rest.set('close',23);


// console.log(rest.get(1));
// console.log(rest.get(true));
// console.log(rest.get(false));

const time = 21;
console.log(
    rest.get(time > rest.get('open') && time < rest.get('close')));
    
    console.log(rest.has('open'));
    rest.delete('open');
    //rest.clear();


    const arr = [1,2];
    rest.set(arr,'testing');

    
     console.log(rest.get(arr));

     console.log(rest.size);