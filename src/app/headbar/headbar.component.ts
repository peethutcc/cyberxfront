import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.css']
})
export class HeadbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    
   
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
 
  }
  
     
    
}

