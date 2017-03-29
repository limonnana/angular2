import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { loginFormComponent } from "./app.loginForm.component";
import { FormsModule }   from '@angular/forms'; 
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpService } from './http.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,JsonpModule ],
  providers: [HttpService],
  declarations: [ AppComponent, loginFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);