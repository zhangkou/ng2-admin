import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { AppState } from '../../app.service';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public token: String ;
  public message: String ;

  constructor(fb:FormBuilder, protected router: Router, protected http: Http, protected appState: AppState) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {

      let email_str: String = this.email.value ;
      let pass_str: String  = this.password.value ;

      this.authenticate(email_str, pass_str)
        .then(data => {
          this.router.navigate(["pages"]) ;
          console.log(this.appState.get("token")) ;
        })
        .catch(error => {
          this.message = error ;
          console.log(error) ;
        });
    }
  }

  authenticate(email: String, password: String) {
        let creds = "http://api.oryzasoft.com/rs/v1/users/login?email=" + email + "&password=" + password;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return new Promise((resolve, reject) => {
            this.http.get(creds, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    if (data.message_rest.type == 'S') {
                        this.token = data.page.results[0].token ;
                        this.appState.set("token", this.token) ;
                        this.appState.set("email", email) ;
                        resolve(true);
                    }
                    else
                        reject(data.message_rest.text);
                });
        });
    }
}
