import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ba-dual-list',
  styles: [require('./baDualList.scss')],
  template: require('./baDualList.html')
})

export class BaDualList {
  @ViewChild('leftColumn')  leftColumn: ElementRef;
  @ViewChild('rightColumn')  rightColumn: ElementRef;

  @Input() options: any = {};

  @Input() data: any = {}; // { left: Array<{title: string}>, right: Array }
  @Output() dataChange = new EventEmitter();

  selected: any = [];
  leftFilterMask: string = '';
  rigthFilterMask: string = '';
  defaultListSize: number = 5;

  moveToRight(): void {
    this.move(this.data.left, this.data.right);
  }

  moveToLeft(): void {
    this.move(this.data.right, this.data.left);
  }

  move(from: Array<any>, to: Array<any>): void {
    const selected = this.getSelected(from);
    selected.forEach(chunk => {
      to.push(chunk);
      from.splice(from.indexOf(chunk), 1);
    });
    this.cleanSelected();
    this.dataChange.emit(this.data);
  }

  getSelected(from: Array<any>): Array<any> {
    return Array.isArray(from) ? from.filter(chunk => this.selected.includes(chunk.title)) : [];
  }

  cleanSelected(): void {
    this.selected = [];
  }

  getTitles(dataList: Array<any>): Array<string> {
    return Array.isArray(dataList) && dataList.map(chunk => chunk.title);
  }

  getSize(list): number {
    return list && list.size || this.options.size || this.defaultListSize;
  }
}
