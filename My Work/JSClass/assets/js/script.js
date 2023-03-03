////////////////////    CLASS    ////////////////////
class user{         /*  */
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getUser(){
        console.log(`${this.name} , ${this.age}`)
    }
}

class user1{
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(`${this.name} , ${this.age}`)
    }
}

function getUser(){         // Üç değişken de consola yazdırır. İlk ikisi user class'ını kullanır.
    const gu = new user("Erhan", 33);
    const gu2 = new user("Berk", 27);
    const gu3 = new user1("Yusuf", 25);

    gu.getUser();
    gu2.getUser();
}
