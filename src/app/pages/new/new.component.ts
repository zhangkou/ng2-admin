import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'new',
  template: `<strong (click) = "xx()">My page content here</strong>`
})
export class NewComponent {
  constructor(protected http: Http) {
    
  }

  xx() {
    console.log(this.http) ;
    let url = "http://api.oryzasoft.com/rs/v1/uma/sap/purchaseOrdersAll?keywords=&pageIndex=1&pageSize=30" ;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ3ODU5NTM5NTkxMywiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.g-SFnB0JwWPE3tVsamQW4acP2lR4TxY7wNpgdVO4pnQ");
    headers.append('appKey', '{"PO_REL_CODE/PO_REL_GROUP":"01/PH","PO_REL_CODE":"01","PO_REL_GROUP":"PH","appId":"fda5d625-0b0b-4551-b2e8-d0596274f8a4"}');

    let xxx =  this.http.get(url, new RequestOptions({
          headers:headers
        })).map(res => {
      return res.json();
    });

    console.log(xxx) ;

    xxx.subscribe() ;
  }
}