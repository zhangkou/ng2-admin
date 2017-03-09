import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { RESTApi } from '../../../restApi.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'userimport',
  template: require('./userimport.html')
})

export class UserimportComponent {
    users: String ;

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute, protected router: Router) {
        
    }

    import(target){
      let createUserUrl = "admin/users/" ;
      if(this.users){
        let postUsers = [] ;
        let userArray = this.users.split(";") ;
        userArray.forEach(userEmail => {
          let user = {
            name:   userEmail.split("@")[0],
            email:  userEmail
          } ;
          postUsers.push(user) ;
        }) ;
        this.restApi.postData(createUserUrl, {users: postUsers}) ;
        this.router.navigate(["/pages/user/list"]) ;
      }
    }
}
