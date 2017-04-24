import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { RESTApi } from '../../../restApi.service';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider, protected restApi: RESTApi) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 100,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'New',
        percentage: 50,
        order: 2,
        count: 0
      }, {
        value: 100,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Normal',
        percentage: 50,
        order: 3,
        count: 0
      }, {
        value: 100,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Locked',
        percentage: 50,
        order: 4,
        count: 0
      }, {
        value: 100,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'rejected',
        percentage: 50,
        order: 5,
        count: 0
      },
    ];
  }

  getAllUsers(user) {
    let url = "uma/system/users?onlyCount=X" ;
    let getPromise = this.restApi.getData(url)
    getPromise.then(data => {
        user.count     =  data["results"] ;
    }).catch(error => {
        console.log(error) ;
    });
  }

  getGroupUsers() {
    let url = "uma/system/users?groupBy=1" ;
    return this.restApi.getData(url)
  }
}
