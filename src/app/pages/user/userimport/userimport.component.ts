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
    tableDatas:Array<any>;

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute, protected router: Router) {
        
    }

    import(target){
      let createUserUrl = "admin/users/" ;
      if(this.tableDatas && this.tableDatas.length > 0){
        let postPromise = this.restApi.postData(createUserUrl, {users: this.tableDatas}) ;
        postPromise.then(data => {
            let importedUsers = data["users"] ;
            this.tableDatas = importedUsers
                .map(user => {
                  return {
                      name:   user.email.split("@")[0],
                      email:  user.email,
                      status: user["message_rest"]["type"],
                      text:   user["message_rest"]["text"]
                    } ;
                }) ;
        }).catch(error => {
            console.log(error) ;
        });
      }
    }

    onChange(){
      if(this.users && this.users.indexOf("@") > 0){
        let userArray = this.users.replace(/[\r\n]/g, ";").split(";") ;
        this.tableDatas = userArray
            .filter(userEmail =>{
              return !!userEmail && userEmail.indexOf("@") > 0;
            })
            .map(userEmail => {
              return {
                  name:   userEmail.split("@")[0],
                  email:  userEmail,
                  status: "No import"
              } ;
            }) ;
      }else{
        this.tableDatas = [] ;
      }
    }
}
