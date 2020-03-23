import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { UnixdialogComponent } from '../unixdialog/unixdialog.component';
import { WindowsdialogComponent } from '../windowsdialog/windowsdialog.component';
import { NetworkdialogComponent } from '../networkdialog/networkdialog.component';
import { CyberdialogComponent } from '../cyberdialog/cyberdialog.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  Element: any;
  mailbox;
  data;
  constructor(public dialog: MatDialog, public http: HttpClient) {
    
  }

  ngOnInit() {

this.getdata();

  }

 /* showdata() {
    this.mailbox = this.getdata();
    this.mailbox.then(results => {
      //console.log("sssss");
      
      this.data = JSON.parse(JSON.stringify(results));
      
    })
  }*/
  getdata() {
    this.http.get<any>('http://localhost:3000/home').subscribe(result => {
      console.log(result[0].courseid);
      this.Element = result;
     console.log(this.Element)
    });

  }

  openUnixDialog() {
    const dialogRefUnix = this.dialog.open(UnixdialogComponent, {

    });

  }
  openWindowsDialog() {
    const dialogRefWindows = this.dialog.open(WindowsdialogComponent, {

    });


  }

  openNetworkDialog() {
    const dialogRefWindows = this.dialog.open(NetworkdialogComponent, {

    });
  }

  openCyberDialog() {
    const dialogRefWindows = this.dialog.open(CyberdialogComponent, {

    });
  }
}
