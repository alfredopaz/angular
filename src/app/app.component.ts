import { Component } from '@angular/core';
import { DataService } from './data.service'
import { HttpClient } from '@angular/common/http'

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

  constructor(private dataService: DataService){
    console.log("Constructor working ... ")
    this.title = 'my-dream-app';
    this.name = 'Alfredo Paz'
    this.email = 'apazv@unsa.edu.pe'
    this.webpage = 'http://www.unsa.edu.pe'
    this.hobbies = ["programar", "astronomía", "peliculas"]
    this.showHobbies = false
    this.dataService.getData().subscribe(data => {
      console.log(data)
    })
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
