import { Component } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'user',
  styles: [require('./user.scss')],
  template: require('./user.html')
})

export class UserComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURLS   = [
            "uma/system/users"
        ] ;
        this.filter_key = "name" ;
        this.pageSize   = 30 ; 
    }

    changeStatus(status){
        if(this.tableDatas){
            let users = [] ;
            let changeStatusUrl      = "admin/users/changeStatus" ;
            this.tableDatas
                .filter(value => !!value.saved)
                .forEach(value => {
                    users.push({
                        userId: value.user_id + "",
                        status: status + ""
                    }) ;
                }) ;
            if(users.length > 0){
                this.restApi.postData(changeStatusUrl, {users: users})
                .then(data => {
                    this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
                }).catch(error => {
                    console.log(error) ;
                });
            }
        }
    }
}