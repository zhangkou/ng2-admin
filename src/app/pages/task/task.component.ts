import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'task',
  template: require('./task.html')
})

export class TaskComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURL        = "uma/system/tasks" ;
        this.subListURL     = "uma/system/tasks?filter=task_status+in+({{p1}})+and+category+in+({{p2}})" ;
        this.filter_key     = "event_type" ;
        this.pageSize       = 10 ;
    }
}