import { Component, NgModule } from '@angular/core';//Farlı birmodül kullanılacaksa buradan import edilmesi gerekir.


@Component({
  selector: 'my-app',                 //Layout of the project - Ana Yapı
  templateUrl: './icerik.html',  //Layout'a gidecek sayfa
  styleUrls: ['./app.component.css']    //Sayfa'nın css dosyası
})
export class AppComponent {
  title = 'intro_angular';              
  degisken = "Erhan Kaya";              //Sayfada kullanılacak değişkenler
  classUser = "FrontEnd";

  // users = [
  //   {Name: "Erhan", Surname: "Kaya", Gender: "Male"},
  //   {Name: "Mithat", Surname: "Tutal", Gender: "Male"},
  //   {Name: "Özge", Surname: "Bahçeci", Gender: "Female"},
  //   {Name: "Tugba", Surname: "Tiryaki", Gender: "Female"}
  // ]

  users = [
    new User("Erhan", "Kaya", "Male"),
    new User("Mithat", "Tutal", "Male"),
    new User("Özge", "Bahçeci", "Female"),
    new User("Tuba", "Tiryaki", "Female")
  ]

}


export class User {
  Name;
  Surname;
  Gender;
  constructor(name:any, surname:any, gender:any){
    this.Name = name;
    this.Surname = surname;
    this.Gender = gender;
  }
}