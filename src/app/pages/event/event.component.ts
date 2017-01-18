import {Component} from '@angular/core';
import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'event',
  template: require('./event.html')
})
export class EventComponent {

  tableDatas:Array<any>;

  stringFilter = {
        
  };

  toggles = [
    { value: 'X'},
    { value: null},
  ];
  
  constructor(protected http: Http, protected snackBar: MdSnackBar) {
    this.getData("uma/system/events") ;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  checkboxChanged(target, tdata){
      target.checked? (tdata[target.name] = this.toggles[0].value) : (tdata[target.name] = this.toggles[1].value);
      tdata.saved=true ;
  }

  inputChanged(target, tdata){
      tdata.saved=true ;
  }

  create(target, funcname, eventDes){
      console.log(target) ;
      console.log(funcname) ;
      console.log(eventDes) ;
      target.hide() ;
  }

  update(event){
      console.log(event) ;
      if(this.tableDatas){
          let allPutPromise = [] ;
          this.tableDatas
                .filter(value => !!value.saved)
                .forEach(value => {
                    allPutPromise.push(this.putData("uma/system/events/" + value.EVENT_NUMBER, value));
          }) ;
          if(allPutPromise && allPutPromise.length > 0){
                Promise.all(allPutPromise)
                            .then(values => { 
                                console.log(values);
                                
                                this.getData("uma/system/events") ;
                            }, reason => {
                                
                                console.log(reason)
                });
          }  
      }
  }

  refresh(target){
      target.value = "" ;
      this.stringFilter = {
       
      };
      this.getData("uma/system/events") ;
  }

  search(target){
      let searchValue = target.value ;
      this.stringFilter = {
        "FUNCNAME": searchValue
      };
      console.log(this.stringFilter) ;
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
         this.tableDatas = data["page"].results ;
        }).catch(error => {
          console.log(error) ;
        });
    }

     putData(sourceUrl, data){
        let url = "http://api.oryzasoft.com/rs/v1/"  + sourceUrl;
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ4MzA3NzgyNzMwOSwiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.njGVKuz2xB3umfI5MBGHOHYGdgLxb51WbyfEBS9DLgU";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('token', token) ;

        let putPromise = new Promise((resolve, reject) => {
            this.http.put(url, data, { headers: headers })
                .map(res => res.json())
                .subscribe(data => {
                    if (data.message_rest.type == 'S') {
                        resolve(data);
                    }else{
                        reject(data);
                    }  
                });
        });

        return putPromise ;
    }
}