import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'ba-multi-select',
  styles: [require('./baMultiSelect.scss')],
  template: require('./baMultiSelect.html')
})
export class BaMultiSelect {
  @Input() data = [];
  @Input() size: number = 5;

  @Output() select: EventEmitter = new EventEmitter();

  set selected(selected) {
    this.select.emit(selected);
  }
}
