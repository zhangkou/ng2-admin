import { Component } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import { CustomServerDataSource } from './task.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'task',
  template: require('./task.html')
})

export class TaskComponent {
    pageIndex   = 1 ;
    pageSize    = 50 ;
    totalPage   = 0 ;
    totalCount  = 0 ;

    tableDatas:Array<any>;
  

    constructor(protected http: Http) {
        this.getData("uma/system/tasks") ;
    }

    onPageChange(number: number) {
        console.log('change to page', number);
    }

    getData(sourceUrl) {
            let url = "http://api.oryzasoft.com/rs/v1/"  + sourceUrl;
            let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ4MzA3NzgyNzMwOSwiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.njGVKuz2xB3umfI5MBGHOHYGdgLxb51WbyfEBS9DLgU";
            let headers = new Headers({ 'Content-Type': 'application/json' });
            headers.append('token', token) ;

            let requestPromise =  new Promise((resolve, reject) => {
                this.http.get(url, { headers: headers })
                    .map(res => res.json())
                    .subscribe(data => {
                        if (data.message_rest.type == 'S') {
                            resolve(data);
                        }else{
                            reject(data);
                        }  
                    });
            });

            requestPromise.then(data => {
                this.pageIndex      =  data["page"].pageIndex ;
                this.pageSize       =  data["page"].pageSize ;
                this.totalPage      =  data["page"].totalPage ;
                this.totalCount     =  data["page"].totalCount ;   
                this.tableDatas     =  data["page"].results ;
            }).catch(error => {
                console.log(error) ;
            });
        }
}