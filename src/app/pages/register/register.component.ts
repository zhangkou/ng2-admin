import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./register.scss')],
  template: require('./register.html'),
})
export class Register {

  public form:FormGroup;
  public companyName: AbstractControl ;
  public name:AbstractControl;
  public email:AbstractControl;

  public submitted:boolean = false;

  constructor(fb:FormBuilder, protected router: Router, protected http: Http) {

    this.form = fb.group({
      'companyName': [''],
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])]
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.companyName = this.form.controls['companyName'] ;
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      let nameValue         = this.name.value ;
      let emailValue        = this.email.value ;
      let companyNameValue  = this.companyName.value ;  

      this.regist(companyNameValue, nameValue, emailValue)
        .then(data => {
          console.log(data) ;
        })
        .catch(error => {
          console.log(error) ;
        });

    }
  }

  regist(companyName: String, name: String, email: String) {
        let creds = "http://api.oryzasoft.com/rs/v1/admin/company";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return new Promise((resolve, reject) => {
            this.http.post(creds,
                {
                  "email": email,
                  "name": name,
                  "companyName": companyName
                },
                { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    if (data.message_rest.type == 'S') {
                        resolve(data);
                    }else{
                        reject(data.message_rest.text);
                    }
                });
        });
    }
}
