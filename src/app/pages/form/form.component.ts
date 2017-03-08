import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'form',
  template: require('./form.html')
})

export class FormComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURL        = "uma/system/forms/all?groupBy=1" ;
        this.pageSize       = 999 ;
    }
}