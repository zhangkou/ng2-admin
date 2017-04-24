import {Component, ViewEncapsulation} from '@angular/core';

import {PieChartService} from './pieChart.service';

import { BaseComponent } from '../../base/base.component';

import { HttpModule , Http, ConnectionBackend, Headers, RequestOptions } from '@angular/http';

import { Router, ActivatedRoute, Params } from '@angular/router';

import './pieChart.loader.ts';

@Component({
  selector: 'pie-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./pieChart.scss')],
  template: require('./pieChart.html')
})
// TODO: move easypiechart to component
export class PieChart {

  public charts: Array<Object>;
  private _init = false;

  constructor(private _pieChartService: PieChartService) {
    //super(null,null) ;
    this.charts = this._pieChartService.getData();
  }

  ngAfterViewInit() {
    if (!this._init) {
      //this._loadPieCharts();
      //this._updatePieCharts();
      this._init = true;
    }
    this._pieChartService.getAllUsers(this.charts[0]) ;
    this._pieChartService.getActivedUsers(this.charts[1]) ;
    this._pieChartService.getAllTask(this.charts[2]) ;
    this._pieChartService.getFailedTask(this.charts[3]) ;
  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(45);
    });
  }
}
