import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { MdSnackBar} from '@angular/material';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';

@Component({
  selector: 'event',
  template: require('./event.html')
})

export class EventComponent extends BaseComponent {

    constructor(protected http: Http, protected appState: AppState) {
        super(http, appState) ;
    }

    init(){
        this.listURL    = "uma/system/events" ;
        this.updateURL  = "uma/system/events/" ;
        this.filter_key = "FUNCNAME" ;
    }
}