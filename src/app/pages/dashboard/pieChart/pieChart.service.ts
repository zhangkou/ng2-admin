import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { RESTApi } from '../../../restApi.service';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider, protected restApi: RESTApi) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: '所有用户',
        stats: '0',
        icon: 'person',
        percent: ""
      }, {
        color: pieColor,
        description: '激活用户',
        stats: '0',
        icon: 'money',
        percent: ''
      }, {
        color: pieColor,
        description: '24小时所有任务',
        stats: '0',
        icon: 'face',
        percent: ''
      }, {
        color: pieColor,
        description: '24小时失败任务',
        stats: '0',
        icon: 'refresh',
        percent: ''
      }
    ];
  }

  getAllUsers(user) {
    let url = "uma/system/users?onlyCount=X" ;
    let getPromise = this.restApi.getData(url)
    getPromise.then(data => {
        user.stats     =  data["page"]["results"][0].totalCount ;
    }).catch(error => {
        console.log(error) ;
    });
  }

  getActivedUsers(user) {
    let url = "uma/system/users?filter=login_status=1&onlyCount=X" ;
    let getPromise = this.restApi.getData(url)
    getPromise.then(data => {
        user.stats     =  data["page"]["results"][0].totalCount ;
    }).catch(error => {
        console.log(error) ;
    });
  }

  getAllTask(task) {
    let url = "uma/system/tasks?onlyCount=X&filter=TIMESTAMPDIFF(SECOND, start_time, now()) <=86400" ;
    let getPromise = this.restApi.getData(url)
    getPromise.then(data => {
        task.stats     =  data["page"]["results"][0].totalCount ;
    }).catch(error => {
        console.log(error) ;
    });
  }

  getFailedTask(task) {
    let url = "uma/system/tasks?onlyCount=X&filter=TIMESTAMPDIFF(SECOND, start_time, now()) <=86400 and task_status=9" ;
    let getPromise = this.restApi.getData(url)
    getPromise.then(data => {
        task.stats     =  data["page"]["results"][0].totalCount ;
    }).catch(error => {
        console.log(error) ;
    });
  }
}
