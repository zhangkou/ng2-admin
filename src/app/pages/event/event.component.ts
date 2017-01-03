import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'event',
  template: require('./event.html')
})
export class EventComponent {

  tableDatas:Array<any>;

  toggles = [
    { value: 'X'},
    { value: null},
  ];
  
  constructor(protected http: Http) {
    
    this.getData("uma/system/events")
        .then(data => {
         this.tableDatas = data["page"].results ;
        })
        .catch(error => {
          console.log(error) ;
        });
  }

  checkboxChanged(target, tdata){
      target.checked? (tdata[target.name] = this.toggles[0].value) : (tdata[target.name] = this.toggles[1].value);
      tdata.saved=true ;
  }

  inputChanged(target, tdata){
      tdata.saved=true ;
  }

  getData(sourceUrl) {
        let url = "http://api.oryzasoft.com/rs/v1/"  + sourceUrl;
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ4MzA3NzgyNzMwOSwiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.njGVKuz2xB3umfI5MBGHOHYGdgLxb51WbyfEBS9DLgU";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('token', token) ;

        return new Promise((resolve, reject) => {
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
    }
}