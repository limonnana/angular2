import { Component } from '@angular/core';
import { User }    from './app.user';
import {NgModule} from "@angular/core";
import { NgForm } from '@angular/forms';
import { HttpService01 } from './http.service01';

@Component({selector: 'loginForm', templateUrl: 'app/loginForm.component.html'})
export class loginFormComponent{

constructor(private _httpService: HttpService01) {}
  
  user: Object = {};
  
  showAlert(form: any): void {  
    console.log('you submitted value:', form);  
     this.sendDataToServer(form);
 }

 sendDataToServer(dataFromForm : any) {

        this._httpService.sendData(dataFromForm).subscribe(

            response => console.log(response), // success
            error => console.log(error),       // error
            () => console.log('completed')     // complete
        )

    }


}

