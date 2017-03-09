import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { RESTApi } from '../../../restApi.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'saptable',
  template: require('./saptable.html')
})

export class SaptableComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURL    = "uma/system/taskTables?filter=SCHEDULED_FLAG='{{p1}}'+and+task_status+in+({{p2}})+and+category+in+({{p3}})" ;
        this.paging     = false ;
    }
}
