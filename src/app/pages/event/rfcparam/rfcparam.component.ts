import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'rfcparam',
  template: require('./rfcparam.html')
})

export class RfcparamComponent extends BaseComponent {

    constructor(protected http: Http, protected appState: AppState, protected route: ActivatedRoute, protected router: Router) {
        super(http, appState, route, router) ;
    }

    init(){
        this.listURL = "uma/system/saprfcParameters/{{id}}" ;
        this.paging     = false ;
        this.subPage    = true ;
    }
}