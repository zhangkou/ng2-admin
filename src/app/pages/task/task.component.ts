import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';

@Component({
  selector: 'task',
  template: require('./task.html')
})

export class TaskComponent extends BaseComponent {

    constructor(protected http: Http, protected appState: AppState) {
        super(http, appState) ;
    }

    init(){
        this.listURL = "uma/system/tasks" ;
        this.filter_key = "event_type" ;
    }
}