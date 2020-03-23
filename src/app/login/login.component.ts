import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {





  constructor(private http:HttpClient) { }

  ngOnInit() {
   
  }


onSubmit(testdata){
  //alert(JSON.stringify(testdata));

  this.http.post<any>('http://localhost:3000/login',testdata).subscribe(result=>{
    alert(result);
  });
}




}
