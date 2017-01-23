import { Component } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';

@Component({
  selector: 'user',
  template: require('./user.html')
})

export class UserComponent extends BaseComponent {

    constructor(protected http: Http, protected appState: AppState) {
        super(http, appState) ;
    }

    init(){
        this.listURL    = "uma/system/users" ;
        this.filter_key = "name" ;
        this.pageSize   = 30 ; 
    }
}