import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../../app.service';
import { RESTApi } from '../../../restApi.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'companyverify',
  template: require('./companyverify.html')
})

export class CompanyverifyComponent extends BaseComponent {

    constructor(protected restApi: RESTApi, protected route: ActivatedRoute) {
        super(restApi, route) ;
    }

    init(){
        this.listURLS   = [
            "admin/company/verify"
        ] ;
        this.paging     = false ;
        this.subPage    = true ;
    }

    list(sourceUrl, paging?, currentPage?, itemsPerPage?) {
        let getPromise = this.restApi.getData(this.listURL, this.paging, this.pageIndex, this.pageSize)
        getPromise.then(data => {
            this.pageIndex      =  data["page"].pageIndex ;
            this.pageSize       =  data["page"].pageSize ;
            this.totalPage      =  data["page"].totalPage ;
            this.totalCount     =  data["page"].totalCount ;   
            if(data["page"].results){
                this.tableDatas     =  data["page"].results.map(result => {
                let jsonContent = result["jsonContent"] ;
                if(!!jsonContent){
                    result.company = JSON.parse(jsonContent).companyName ;
                }
                return result ;
            }) ;
            }
        }).catch(error => {
            console.log(error) ;
        });
    }

    verify(target){
        if(this.tableDatas){
            let allPostPromise = [] ;
            let verifyUrl      = "admin/company/verify" ;
            this.tableDatas
                .filter(value => !!value.saved)
                .forEach(value => {
                    let postContent = {
                        companyid:   value.companyid,
                        companyName: value.company,
                        email:       value.email
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
