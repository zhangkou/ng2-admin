import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';

@Component({
  selector: 'adminlogin',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./adminlogin.scss')],
  template: require('./adminlogin.html'),
})
export class AdminLogin {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public company:AbstractControl;
  public cid:     String ;
  public submitted:boolean = false;
  public token: String ;
  public companys =  [
    {id: "40288b8147cd16ce0147cd236df20000", name: "Dell"},
    {id: "40288b8147cd16ce0147cd24e2850001", name: "Lenovo"},
    {id: "40288b8147cd16ce0147cd25921d0002", name: "Apple"},
    {id: "40288b8147cd16ce0147cd25921d0011", name: "Sample11"},
    {id: "40288b8147cd16ce0147cd25922d0012", name: "Sample12"},
    {id: "40288b8147cd16ce0147cd25923d0013", name: "Sample13"},
    {id: "40288b8147cd16ce0147cd25924d0014", name: "Sample14"},
    {id: "40288b8147cd16ce0147cd25925d0015", name: "Sample15"},
    {id: "40288b8147cd16ce0147cd25926d0016", name: "Sample16"},
    {id: "40288b8147cd16ce0147cd25927d0017", name: "Sample17"},
    {id: "40288b8147cd16ce0147cd25928d0018", name: "Sample18"},
    {id: "40288b8147cd16ce0147cd25929d0019", name: "Sample19"},
    {id: "40288b8147cd16ce0147cd25930d0020", name: "Sample20"},
    {id: "40288b8147cd16ce0147cd25931d0021", name: "Sample21"},
    {id: "40288b8147cd16ce0147cd25932d0022", name: "Sample22"},
    {id: "40288b8147cd16ce0147cd25933d0023", name: "Sample23"},
    {id: "40288b8147cd16ce0147cd25934d0024", name: "Sample24"},
    {id: "40288b8147cd16ce0147cd25935d0025", name: "Sample25"},
    {id: "40288b8147cd16ce0147cd25936d0026", name: "Sample26"},
    {id: "40288b8147cd16ce0147cd25937d0027", name: "Sample27"},
    {id: "40288b8147cd16ce0147cd25938d0028", name: "Sample28"},
    {id: "40288b8147cd16ce0147cd25939d0029", name: "Sample29"},
    {id: "40288b8147cd16ce0147cd25940d0030", name: "Sample30"}

  ] ;
  public message: String ;

  constructor(fb:FormBuilder, protected router: Router, protected http: Http, protected appState: AppState, protected restApi: RESTApi) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'company': ['', Validators.compose([Validators.required])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.company = this.form.controls['company'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      let email_str: String = this.email.value ;
      let pass_str: String  = this.password.value ;
      console.log(this.cid) ;
      this.authenticate(email_str, pass_str, this.cid) ;
    }
  }

  authenticate(email: String, password: String, companyId: String) {
    let creds = "users/login?email=" + email + "&password=" + password + "&cid=" + companyId ;
    let getPromise = this.restApi.getData(creds, undefined, undefined, undefined, false) ;
    getPromise.then(data => {
        this.token = data["page"].results[0].token ;
        this.appState.set("token", this.token) ;
        this.appState.set("email", email) ;
        this.router.navigate(["pages"]) ;
        console.log(this.appState.get("token")) ;
    }).catch(error => {
        this.message = error.message_rest.text ;
        console.log(error) ;
    });
  }
}
