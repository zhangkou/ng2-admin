import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'tasklog',
  template: require('./tasklog.html')
})

export class TasklogComponent extends BaseComponent {

    constructor(protected http: Http, protected appState: AppState, protected route: ActivatedRoute, protected router: Router) {
        super(http, appState, route, router) ;
        this.init() ;
    }

    init(){
        this.listURL = "uma/system/tasks/{{id}}/logs" ;
        this.paging     = false ;
        this.subPage    = true ;
    }
}
