const detailObj = {
    firstName: 'syed bilal',
    lastName: 'Ali',
    job: 'Programmer',
    birthyear: 1997,

//    calcAge: function(birthday){
//     return 2023 -birthday
//    }

// calcAge: function(){
//     console.log(this)
//        return 2023 - this.birthyear // this keyword === detailObj
//       }


calcAge: function(){
    this.age = 2023 - this.birthyear // this keyword === detailObj
       return this.age
      }
      
}
 console.log(detailObj.calcAge())
 
//  console.log(detailObj['calcAge'](1997))

