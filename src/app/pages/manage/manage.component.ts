import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'manage',
  template: require('./manage.html')
})

export class ManageComponent  {
    sycnToClientDatas:  Array<any>;
    bacisTablesDatas:   Array<any>;
    allTablesDatas:     Array<any>; 
    tablesDeltaDatas:   Array<any>;

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        this.getSycnToClientDatas() ;
        this.getBacisTablesDatas() ;
        this.getAllTablesDatas() ;
        this.getTablesDeltaDatas() ;
    }

    getSycnToClientDatas(){
      let url = "uma/system/tasks?filter=category+in+(12)&groupBy=1" ;
      let getPromise = this.restApi.getData(url)
        getPromise.then(data => {
            this.sycnToClientDatas     =  data["page"].results ;
        }).catch(error => {
            console.log(error) ;
        });
    }

    getBacisTablesDatas(){
      let url = "uma/system/taskTables?filter=category+in+(1)&groupBy=1" ;
      let getPromise = this.restApi.getData(url)
        getPromise.then(data => {
            this.bacisTablesDatas     =  data["page"].results ;
        }).catch(error => {
            console.log(error) ;
        });
    }

    getAllTablesDatas(){
      let url = "uma/system/taskTables?filter=category+in+(2,5)&groupBy=1" ;
      let getPromise = this.restApi.getData(url)
        getPromise.then(data => {
            this.allTablesDatas     =  data["page"].results ;
        }).catch(error => {
            console.log(error) ;
        });
    }

    getTablesDeltaDatas(){
      let url = "uma/system/taskTablesDelta?groupBy=2" ;
      let getPromise = this.restApi.getData(url)
        getPromise.then(data => {
            this.tablesDeltaDatas     =  data["page"].results ;
        }).catch(error => {
            console.log(error) ;
        });
    }

    checkStatus(status){
        let statusFlag = true ;
        switch (status) {
            case "0":
            case "1":
                statusFlag = false ;
                break;
        }
        return statusFlag ;
    }

    startTask(category, status){
        let startTaskUrl = "uma/system/tasks/category/" + category + "/status/" + status + "/start"
        this.restApi.getData(startTaskUrl) ;
        this.refresh() ;
    }

    stopTask(category, status){
        let stopTaskUrl = "uma/system/tasks/category/" + category + "/status/" + status + "/stop"
        this.restApi.getData(stopTaskUrl) ;
        this.refresh() ;
    }

    refresh(){
        this.getSycnToClientDatas() ;
        this.getBacisTablesDatas() ;
        this.getAllTablesDatas() ;
        this.getTablesDeltaDatas() ;
    }

}