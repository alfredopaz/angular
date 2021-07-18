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

  constructor(){
    console.log("Constructor working ... ")
    this.title = 'my-dream-app';
    this.name = 'Alfredo Paz'
    this.email = 'apazv@unsa.edu.pe'
    this.webpage = 'http://www.unsa.edu.pe'
    this.hobbies = ["programar", "astronomía", "peliculas"]
  }
  showhobbies(){
    return true;
  }
}
