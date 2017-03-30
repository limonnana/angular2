import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { loginFormComponent } from "./app.loginForm.component";
import { FormsModule }   from '@angular/forms'; 
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpService01 } from './http.service01';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,JsonpModule ],
  providers: [HttpService01],
  declarations: [ AppComponent, loginFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);