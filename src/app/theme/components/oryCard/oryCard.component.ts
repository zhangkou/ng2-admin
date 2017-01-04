import {Component, ViewEncapsulation, ViewChild, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ory-card',
  styles: [require('./oryCard.scss')],
  template: require('./oryCard.html'),
  encapsulation: ViewEncapsulation.None
})
export class OryCard {
  @Input() title:String;
  @Input() baCardClass:String;
  @Output() update = new EventEmitter<any>();
  @Output() create = new EventEmitter<any>();
  @Output() refresh = new EventEmitter<any>();
  @Output() search = new EventEmitter<any>();
}
