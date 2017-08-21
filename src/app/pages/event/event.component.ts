import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'event',
  template: require('./event.html')
})

export class EventComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURLS   = [
            "uma/system/events"
        ] ;
        this.updateURL  = "uma/system/events/" ;
        this.update_key = "EVENT_NUMBER" ;
        this.filter_key = "FUNCNAME" ;
    }
}