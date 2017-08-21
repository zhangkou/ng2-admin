import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from './app.service';

@Injectable()
export class RESTApi {
  baseURL     = "http://api.oryzasoft.com/rs/v1/" ;

  constructor(protected http: Http, protected appState: AppState, protected route: ActivatedRoute, protected router: Router) {
       
  }

  getData(sourceUrl, paging?, currentPage?, itemsPerPage?, handleError?) {
        let url = this.baseURL  + sourceUrl;
        if(paging){
            url = url + (url.indexOf("?") == -1 ? "?" : "&") + "pageIndex=" + currentPage + "&pageSize=" + itemsPerPage ;
        }
        let token = this.appState.get("token") ;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('token', token) ;

        let getPromise =  new Promise((resolve, reject) => {
            this.http
                .get(url, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    if (data.message_rest.type == 'S') {
                        resolve(data);
                    }else{
                        if(handleError){
                            this.handleError(data) ;
                        }
                        reject(data);
                    }  
                });
        });

        return getPromise ;
  }

  putData(sourceUrl, data){
        let url = this.baseURL  + sourceUrl;
        let token = this.appState.get("token") ;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('token', token) ;

        let putPromise = new Promise((resolve, reject) => {
            this.http
                .put(url, data, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    if (data.message_rest.type == 'S') {
                        resolve(data);
                    }else{
                        this.handleError(data) ;
                        reject(data);
                    }  
                });
        });

        return putPromise ;
    }

    postData(sourceUrl, data){
        let url = this.baseURL  + sourceUrl;
        let token = this.appState.get("token") ;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('token', token) ;

        let postPromise = new Promise((resolve, reject) => {
            this.http
                .post(url, data, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    if (data.message_rest.type == 'S') {
                        resolve(data);
                    }else{
                        this.handleError(data) ;
                        reject(data);
                    }  
                });
        });

        return postPromise ;
    }

    handleError(error){
        this.router.navigate([""]) ;
    }
}
