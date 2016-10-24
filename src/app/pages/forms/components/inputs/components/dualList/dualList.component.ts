import { Component } from '@angular/core';
import { DualListService } from './dualList.service';

@Component({
  selector: 'dual-list',
  providers: [DualListService],
  template: require('./dualList.html')
})
export class DualList {
  dualListData: any = {};
  dualListOptions: any = {};

  constructor(dualListService: DualListService) {
    dualListService.getDualListData().then(data => this.dualListData = data);
    this.dualListOptions = dualListService.getDualListOptions();
  }
}
