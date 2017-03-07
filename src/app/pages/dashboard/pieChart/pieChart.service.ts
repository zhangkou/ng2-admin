import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: '所有用户',
        stats: '57,820',
        icon: 'person',
        percent: '90'
      }, {
        color: pieColor,
        description: '激活用户',
        stats: '89,745',
        icon: 'money',
        percent: '60'
      }, {
        color: pieColor,
        description: '24小时所有任务',
        stats: '178,391',
        icon: 'face',
        percent: '80'
      }, {
        color: pieColor,
        description: '24小时失败任务',
        stats: '32,592',
        icon: 'refresh',
        percent: '99'
      }
    ];
  }
}
