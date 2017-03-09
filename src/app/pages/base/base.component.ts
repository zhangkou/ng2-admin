import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../../app.service';
import { RESTApi } from '../../restApi.service';

export class BaseComponent {
    listURL     = "" ;
    subListURL  = "" ;
    createURL   = "" ;
    deleteURL   = "" ;
    updateURL   = "" ;
    paging      = true ;
    subPage     = false ;
    params      = {} ;
    filter_key  = "" ;
    param_key   = ["p1", "p2", "p3"] ;
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

    constructor(protected restApi: RESTApi, protected route?: ActivatedRoute) {
        this.init() ;
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.params = params ;
            console.log(this.params) ;
            if(!this.subListURL){
                this.subListURL = this.listURL ;
            }
            this.param_key.forEach((value) => {
                if(this.params[value]){  
                    this.subPage = true ;  
                    this.subListURL = this.subListURL.replace("{{" + value + "}}", this.params[value]) ;
                }
            }) ;
            if(this.subPage){
                this.listURL = this.subListURL ;
            }
            this.list(this.listURL, this.paging, this.pageIndex, this.pageSize) ;
        });
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

    start(target, taskIdName?){
        if(this.tableDatas){
            if(!taskIdName){
                taskIdName = "id" ;
            }
            let startTaskUrl = "uma/system/tasks/{{id}}/start " ;
            let allPutPromise = [] ;
            this.tableDatas
                  .filter(value => !!value.saved)
                  .forEach(value => {
                      allPutPromise.push(this.restApi.getData(startTaskUrl.replace("{{id}}", value[taskIdName])));
            }) ;
            if(allPutPromise && allPutPromise.length > 0){
                  Promise.all(allPutPromise)
                    .then(values => {
                            
                          }, reason => {
                            console.log(reason)
                          });
            }
        }
    }

    stop(target, taskIdName?){
        if(this.tableDatas){
            if(!taskIdName){
                taskIdName = "id" ;
            }
            let stopTaskUrl = "uma/system/tasks/{{id}}/stop " ;
            let allPutPromise = [] ;
            this.tableDatas
                  .filter(value => !!value.saved)
                  .forEach(value => {
                      allPutPromise.push(this.restApi.getData(stopTaskUrl.replace("{{id}}", value[taskIdName])));
            }) ;
            if(allPutPromise && allPutPromise.length > 0){
                  Promise.all(allPutPromise)
                    .then(values => {
                            
                          }, reason => {
                            console.log(reason)
                          });
            }
        }
    }

    create(target, funcname, eventDes){
        console.log(target) ;
        console.log(funcname) ;
        console.log(eventDes) ;
        target.hide() ;
    }

    list(sourceUrl, paging?, currentPage?, itemsPerPage?) {
        let getPromise = this.restApi.getData(this.listURL, this.paging, this.pageIndex, this.pageSize)
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
                      allPutPromise.push(this.restApi.putData(this.updateURL + (value[this.update_key] ? value[this.update_key] :  "" ), value));
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
        //subclass
    }
}