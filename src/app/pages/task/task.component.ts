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
        this.listURLS   = [
            "uma/system/tasks",
            "uma/system/tasks?filter=task_status+in+({{p1}})+and+category+in+({{p2}})"
        ] ;
        this.filter_key     = "event_type" ;
        this.pageSize       = 10 ;
    }

    importTable(target){
        if(this.tableDatas){
            let allPostPromise = [] ;
            let importTableUrl      = "uma/sap/tables?taskAction=import" ;
            this.tableDatas
                .filter(value => !!value.saved && value.event_type == 'E0015')
                .forEach(value => {
                    let postContent = {
                        TABNAME: value.TAB_FUNC_NAME,
                        jpush_str1: "jpush_str_valueZ01",
                        jpush_str2: "jpush_str_valueZ02",
                        jpush_str3: "jpush_str_valueZ03",
                        jpush_str4: "jpush_str_valueZ04"
                    } ;
                    allPostPromise.push(this.restApi.postData(importTableUrl, postContent));
                }) ;
            if(allPostPromise && allPostPromise.length > 0){
                Promise.all(allPostPromise)
                       .then(values => {
                            this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
                        }, reason => {
                            console.log(reason)
                        });
            }
        }
    }
}