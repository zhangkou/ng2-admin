import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { MdSnackBar} from '@angular/material';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'parameter',
  template: require('./parameter.html')
})

export class ParameterComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURL    = "uma/system/dmParameters" ;
        this.updateURL  = "uma/system/dmParameters/" ;
        this.update_key = "id" ;
        this.pageSize   = 100 ;
    }

    updateHook(){
        let sycn2agent  =  "uma/system/tasks/3821/start " ;
        this.restApi.getData(sycn2agent) ;
    }
}