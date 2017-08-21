import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../base/base.component';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'company',
  template: require('./company.html')
})

export class CompanyComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURLS   = [
            "admin/company"
        ] ;
        this.pageSize   = 100 ;
    }

    loadData(target){
        if(this.tableDatas){
            let allPostPromise = [] ;
            let verifyUrl      = "admin/company/loaddata" ;
            this.tableDatas
                .filter(value => !!value.saved)
                .forEach(value => {
                    let postContent = {
                        companyId: value.COMPANY_GUID
                    } ;
                    allPostPromise.push(this.restApi.postData(verifyUrl, postContent));
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