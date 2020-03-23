
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });


  onSubmitreg(testdata2){
    //alert(JSON.stringify(testdata));
  
    this.http.post<any>('http://localhost:3000/register',testdata2).subscribe(result=>{
      alert(result);
    });
  }

}
