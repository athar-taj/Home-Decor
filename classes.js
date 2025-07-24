class Person{
    constructor (name ,age , email){
        this.name = name ;
        this.age = age;
        this.email = email;
    }

    constructor(name ,email){
        this.name = name;
        this.email = email;
    }

    getDetails(){
        console.log(this.name);
        console.log(this.email)
        console.log(this.age);
    }
}

const person = new Person("Name",41,"Nothing")

const person2 = new Person("Name2","Email")

person.getDetails()

person.getDetails()