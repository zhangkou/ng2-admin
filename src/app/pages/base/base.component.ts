import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../app.service';

export class BaseComponent {
    baseURL     = "http://api.oryzasoft.com/rs/v1/" ;
    listURL     = "" ;
    createURL   = "" ;
    deleteURL   = "" ;
    updateURL   = "" ;
    paging      = true ;
    subPage     = false ;
    params      = {} ;
    filter_key  = "" ;
    param_key   = "id" ;
    update_key  = "" ;
    pageIndex   = 1 ;
    pageSize    = 5 ;
    totalPage   = 0 ;
    totalCount  = 0 ;

    tableDatas:Array<any>;
    
    stringFilter = {
        
    };

    toggles = [
      { value: 'X'},
      { value: null},
    ];

    constructor(protected http: Http, protected appState: AppState, protected route?: ActivatedRoute, protected router?: Router) {
        this.init() ;
        if(!this.subPage){
          this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
        }
    }

    ngOnInit() {
        if(this.subPage){
          this.route.params.subscribe((params: Params) => {
            this.params = params ;
            this.listURL = this.listURL.replace("{{id}}", params[this.param_key]) ;
            this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
          });
        }
    }

    init(){

    }

    onPageChange(number: number) {
        this.pageIndex = number ;
        this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
    }

    refresh(target){
        target.value = "" ;
        this.stringFilter = {};
        this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
    }

    search(target){
        let searchValue = target.value ;
        this.stringFilter = {};
        if(searchValue){
          this.stringFilter[this.filter_key] = searchValue ;
        }
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

    list(sourceUrl, paging?, currentPage?, itemsPerPage?) {
        let getPromise = this.getData(this.listURL, this.paging, this.pageIndex, this.pageSize)
        getPromise.then(data => {
            this.pageIndex      =  data["page"].pageIndex ;
            this.pageSize       =  data["page"].pageSize ;
            this.totalPage      =  data["page"].totalPage ;
            this.totalCount     =  data["page"].totalCount ;   
            this.tableDatas     =  data["page"].results ;
        }).catch(error => {
            console.log(error) ;
        });
    }

    update(event){
        if(this.tableDatas){
            let allPutPromise = [] ;
            this.tableDatas
                  .filter(value => !!value.saved)
                  .forEach(value => {
                      allPutPromise.push(this.putData(this.updateURL + value[this.update_key], value));
            }) ;
            if(allPutPromise && allPutPromise.length > 0){
                  Promise.all(allPutPromise)
                    .then(values => {
                            this.updateHook() ;
                            this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
                          }, reason => {
                            console.log(reason)
                          });
            }
        }
    }

    updateHook(){

    }

    getData(sourceUrl, paging?, currentPage?, itemsPerPage?) {
        let url = this.baseURL  + sourceUrl;
        if(paging){
            url = url + "?" + "pageIndex=" + currentPage + "&pageSize=" + itemsPerPage ;
        }
        let token = this.appState.get("token") ;
        //let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ4NTE1NDUxODM1OSwiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.O_fp9bNo0JL48Hx4isSV8mLykY3eaPMrltYN7d_tunY" ;
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
                        reject(data);
                    }  
                });
        });

        return getPromise ;
    }


    putData(sourceUrl, data){
        let url = this.baseURL  + sourceUrl;
        //let token = this.appState.get("token") ;
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ4NTE1NDUxODM1OSwiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.O_fp9bNo0JL48Hx4isSV8mLykY3eaPMrltYN7d_tunY" ;
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
                        reject(data);
                    }  
                });
        });

        return putPromise ;
    }

    postData(sourceUrl, data){
        let url = this.baseURL  + sourceUrl;
        //let token = this.appState.get("token") ;
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nS2V5IjoiRSIsImpwdXNoSWQiOm51bGwsImNyZWF0ZVRva2VuRGF0ZSI6MTQ4NTE1NDUxODM1OSwiY215R1VJRCI6IjQwMjg4YjgxNDdjZDE2Y2UwMTQ3Y2QyMzZkZjIwMDAwIiwidXNlcklkIjoxMDAyMDUsImVtYWlsIjoidGVzdGVyMDhAb3J5emFzb2Z0LmNvbSJ9.O_fp9bNo0JL48Hx4isSV8mLykY3eaPMrltYN7d_tunY" ;
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
                        reject(data);
                    }  
                });
        });

        return postPromise ;
    }
}