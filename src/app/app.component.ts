import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string
  email // : string
  webpage : string
  hobbies : string[]
  showHobbies : boolean

  constructor(){
    console.log("Constructor working ... ")
    this.title = 'my-dream-app';
    this.name = 'Alfredo Paz'
    this.email = 'apazv@unsa.edu.pe'
    this.webpage = 'http://www.unsa.edu.pe'
    this.hobbies = ["programar", "astronomía", "peliculas"]
    this.showHobbies = false
  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies
  }
  newHobby(hobby: any){
    this.hobbies.push(hobby.value)
    hobby.value = '';
    return false
  }
  deleteHobby(hobby: any){
    for(let i =0; i < this.hobbies.length; i++){
      if(hobby == this.hobbies[i]){
        this.hobbies.splice(i, 1)
      }
    }
  }
}
