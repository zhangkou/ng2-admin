import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'sapfield',
  template: require('./sapfield.html')
})

export class SapfieldComponent extends BaseComponent {

    constructor(protected http: Http, protected appState: AppState, protected route: ActivatedRoute, protected router: Router) {
        super(http, appState, route, router) ;
        this.init() ;
    }

    init(){
        this.listURL = "uma/system/sapFields/{{id}}" ;
        this.paging     = false ;
        this.subPage    = true ;
    }
}
