import { Component } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'user',
  template: require('./user.html')
})
export class UserComponent {
    pageIndex   = 1 ;
    pageSize    = 100 ;
    totalPage   = 0 ;
    totalCount  = 0 ;

    tableDatas:Array<any>;
    
    stringFilter = {
        
    };

    constructor(protected http: Http) {
        this.getData("uma/system/users", true, this.pageIndex, this.pageSize) ;
    }

    onPageChange(number: number) {
        this.pageIndex = number ;
        this.getData("uma/system/users", true, this.pageIndex, this.pageSize) ;
    }

    refresh(target){
        target.value = "" ;
        this.stringFilter = {
        
        };
    }

    search(target){
        let searchValue = target.value ;
        this.stringFilter = {
            "name": searchValue
        };
    }

    getData(sourceUrl, paging, currentPage, itemsPerPage) {
            let url = "http://api.oryzasoft.com/rs/v1/"  + sourceUrl;
            if(paging){
                url = url + "?" + "pageIndex=" + currentPage + "&pageSize=" + itemsPerPage ;
            }
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