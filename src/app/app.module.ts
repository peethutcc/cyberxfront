import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { Block1Component } from './block1/block1.component';
import { Block2Component } from './block2/block2.component';
import { B2tComponent } from './b2t/b2t.component';
import { CourseComponent } from './course/course.component';
import { UnixdialogComponent } from './unixdialog/unixdialog.component';
import { WindowsdialogComponent } from './windowsdialog/windowsdialog.component';
import { NetworkdialogComponent } from './networkdialog/networkdialog.component';
import { CyberdialogComponent } from './cyberdialog/cyberdialog.component';
import { FlagComponent } from './flag/flag.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    SidebarComponent,
    HeadbarComponent,
    Block1Component,
    Block2Component,
    B2tComponent,
    CourseComponent,
    UnixdialogComponent,
    WindowsdialogComponent,
    NetworkdialogComponent,
    CyberdialogComponent,
    FlagComponent,
    PlaygroundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UnixdialogComponent,WindowsdialogComponent,NetworkdialogComponent,CyberdialogComponent]
})
export class AppModule { }
