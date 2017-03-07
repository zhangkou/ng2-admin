import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { RESTApi } from '../../../restApi.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'rfcparam',
  template: require('./rfcparam.html')
})

export class RfcparamComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURL    = "uma/system/saprfcParameters/{{p1}}" ;
        this.updateURL  = "uma/system/saprfcParameters/" ;
        this.update_key = "FUNCNAME" ;
        this.filter_key = "PARAMETER" ;
        this.paging     = false ;
        this.subPage    = true ;
    }

    updateHook(){
        let refresh_metadata_1  =  "sap/metadata/refresh/1" ;
        let refresh_metadata_E  =  "sap/metadata/refresh/E" ;
        let sycnData2Agent      =  "uma/sap/events?taskAction=SycnS2C" ;
        let sycnData2Agent_body =  {
            "table_name": "e0000_fupararef_dm",
            "filter": " FUNCNAME='" + this.params["p1"] + "' ",
            "first_load": "",
            "jpush_str1": "jpush_str_valueZ01",
            "jpush_str2": "jpush_str_valueZ02",
            "jpush_str3": "jpush_str_valueZ03",
            "jpush_str4": "jpush_str_valueZ04"
        }  ;
        this.restApi.postData(sycnData2Agent, sycnData2Agent_body) ;
        this.restApi.getData(refresh_metadata_1) ;
        this.restApi.getData(refresh_metadata_E) ;
    }
}