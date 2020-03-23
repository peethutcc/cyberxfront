import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-unixdialog',
  templateUrl: './unixdialog.component.html',
  styleUrls: ['./unixdialog.component.css']
})
export class UnixdialogComponent implements OnInit {
  Element: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    //this.getdata();
  }

  getdata() {
    this.http.get<any>('http://localhost:3000/home').subscribe(result => {
      console.log(result[0].courseid);
      this.Element = result;
      console.log(this.Element)
    });

  }
}
