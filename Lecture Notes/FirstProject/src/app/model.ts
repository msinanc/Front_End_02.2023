export class User{
    Name;
    Surname;
    Gander;
    Status;
    constructor(name:any,surname:any,gander:any,status:any){
      this.Name=name;
      this.Surname=surname;
      this.Gander=gander
      this.Status=status
    }
  }

export class Model{//initilaizer - Demo Veriler
    CourseName;
    Users;

    constructor(){
        this.CourseName="Frontend";
        this.Users=[
            new User("Erhan","Kaya","Male",true),
            new User("Mithat","Tutal","Male",false),
            new User("Özge","Bahçeci","Famale",true),
            new User("Tuba","Tiryaki","Famale",false)
        ]
    }
}
  