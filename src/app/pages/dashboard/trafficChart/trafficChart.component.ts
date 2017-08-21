import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

import {Chart} from './trafficChart.loader.ts';
import {TrafficChartService} from './trafficChart.service';

@Component({
  selector: 'traffic-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./trafficChart.scss')],
  template: require('./trafficChart.html')
})

// TODO: move chart.js to it's own component
export class TrafficChart {

  public doughnutData: Array<Object>;
  public user: Object = {
      count: ""
    } ;

  constructor(private trafficChartService:TrafficChartService) {
    this.doughnutData = trafficChartService.getData();
  }

  ngAfterViewInit() {
    let that = this ;
    this.trafficChartService.getAllUsers(this.user) ;
    this.trafficChartService.getGroupUsers().then(data => {
        let  groupedUser    =  data["page"].results ;
        if(groupedUser){
          let mUsers = new Map() ;
          groupedUser.forEach((u, index) => {
            mUsers.set(u.user_status, u) ;
          });
          that.doughnutData.forEach(u => {
            let user = mUsers.get(u["order"]+"") ;
            if(user && user.count){
              u["value"] = user.count ;
              u["count"] = user.count ;
            }else{
              u["value"] = 0 ;
              u["count"] = 0 ;
            }
          });
        }  
        that._loadDoughnutCharts();
    }).catch(error => {
        console.log(error) ;
        that._loadDoughnutCharts();
    }); ;
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0);
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
