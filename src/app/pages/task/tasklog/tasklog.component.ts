import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { RESTApi } from '../../../restApi.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'tasklog',
  template: require('./tasklog.html')
})

export class TasklogComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURLS   = [
            "uma/system/tasks/{{p1}}/logs"
        ] ;
        this.paging     = false ;
        this.subPage    = true ;
    }
}
