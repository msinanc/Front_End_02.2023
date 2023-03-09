import { Component } from '@angular/core';
import { Model, User } from './model';

@Component({
  selector: 'app-root',//seçilecek olan layout (tag, id veua class) ismi yazılır
  templateUrl: './icerik.html',//layouta gidecek sayfa
  styleUrls: ['./app.component.css']//sayfanın css dosyası
})
export class AppComponent {
  
    model=new Model();
    isView=false;

    getCourseName(){
      return this.model.CourseName;
    }
    getUsers(){
      return this.isView ? this.model.Users : this.model.Users.filter(user=>user.Status);
    }
  
    addUser(name:any,surname:any,gander:any){
      if(name!="" && surname!="" && gander!=""){
        this.model.Users.push(new User(name,surname,gander,false));
      }
    }
}

