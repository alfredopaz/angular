import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  @Input() nameHobby : any

  constructor() { }

  ngOnInit(): void {
  }
  sayEnjoy(nameHobby: any){
    alert("Disfrute de " + nameHobby)
  }
}
