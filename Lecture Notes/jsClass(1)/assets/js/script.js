//Class

class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }   
    
    getUser(){
        console.log(`Name=${this.name} Age=${this.age}`)
    }
}
class user1{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log(`Name=${this.name} Age=${this.age}`)
    }   
}

function getUser(){
    const gu1=new user("Erhan",33);
    const gu2=new user("Berk",27);
    const gu3=new user1("Yusuf",25);

    gu1.getUser();
    gu2.getUser();
}