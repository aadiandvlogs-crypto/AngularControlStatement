import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface Student {
  
  id:number;
  name:string
  marks:number
  address:string
  gender:string

}

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})


export class App {
  protected readonly title = signal('controlstatements');

  isLoggedIn:boolean=true

  toggleLogin(){

    this.isLoggedIn=!this.isLoggedIn
  }

  marks = 56

  isAdmin = true

  isActive=false

  orderStatus = "cancelled"

  students:Student[]=[
  {
    id:1,
    name:"ram",
    marks:45,
    address:"Pune",
    gender:"Male"
  },
  {
    id:2,
    name:"shyam",
    marks:65,
    address:"Mumbai",
    gender:"Male"
  },
  {
    id:3,
    name:"rani",
    marks:45,
    address:"Pune",
    gender:"feMale"
  }
]

}

 
