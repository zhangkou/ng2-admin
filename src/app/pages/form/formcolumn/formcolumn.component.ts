import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { RESTApi } from '../../../restApi.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'formcolumn',
  template: require('./formcolumn.html')
})

export class FormcolumnComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURL    = "uma/system/forms/{{p1}}" ;
        this.updateURL  = "uma/system/forms/" ;
        this.update_key = "id" ;
        this.subPage    = true ;
        this.pageSize   = 999 ;
    }
}
