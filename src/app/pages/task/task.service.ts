import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Injectable()
export class CustomServerDataSource extends LocalDataSource {

  lastRequestCount: number = 0;

  constructor(protected http: Http) {
    super() ;
  }

  count(): number {
    return this.lastRequestCount;
  }

  remove(element: any): Promise<any>{
    console.log(element) ;
    return super.remove(element) ;
  }

  update(element: any, values: any): Promise<any>{
    console.log(element) ;
    console.log(values) ;
    return super.update(element, values) ;
  }

  getElements(): Promise<any> {  
    let url = 'http://api.oryzasoft.com/rs/v1/uma/sap/purchaseOrdersAll?';

    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      url += `pageIndex=${this.pagingConf['page']}&pageSize=${this.pagingConf['perPage']}`;
    }

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ3ODU5NTM5NTkxMywiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.g-SFnB0JwWPE3tVsamQW4acP2lR4TxY7wNpgdVO4pnQ");
    headers.append('appKey', '{"PO_REL_CODE/PO_REL_GROUP":"01/PH","PO_REL_CODE":"01","PO_REL_GROUP":"PH","appId":"fda5d625-0b0b-4551-b2e8-d0596274f8a4"}');
    if(this.http){
      return this.http.get(url, new RequestOptions({
          headers:headers
        }))
        .map(res =>res.json())
        .map(data =>  {
          this.lastRequestCount = data.page.totalCount ;
          this.data = data.page.results ;
          return data.page.results;
        }).toPromise();
    }else{
     return super.getElements() ;
    }
  }
}