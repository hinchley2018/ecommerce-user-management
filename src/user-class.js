class User {
    //Initialize data
    constructor(firstName,lastName,phone,email){
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
    }
    //multiple constructors not allowed in JS :( in other languages it is 
    // constructor(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    //how do i make getFullName... -> firstName + " " + lastName
    getFullName() {
       return  this.firstName + " " + this.lastName
    }
    //why would the first one be prefered?
    getFullName2(firstName, lastName) {
        return firstName + " " + lastName;
    }
}

let u = new User("Jon","Hinchley","1234567890","eamil@email.com")
console.log(u.firstName,u.lastName,u.phone,u.email)
console.log('---->')
//preferred one
console.log('getFullName: ',u.getFullName())

//this one has to reference the parameters, that's a bit more typing
console.log('getFullName: ', u.getFullName2(u.firstName, u.lastName))

//also what if i make a typo...
console.log('getFullName with typo: ', u.getFullName2(u.firstName, u.lastNamee))



