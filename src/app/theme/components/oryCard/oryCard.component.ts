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

  @Input()  updateShow:Boolean;
  @Output() update = new EventEmitter<any>();

  @Input()  createShow:Boolean;
  @Output() create = new EventEmitter<any>();

  @Input()  refreshShow:Boolean;
  @Output() refresh = new EventEmitter<any>();

  @Input()  searchShow:Boolean;
  @Output() search = new EventEmitter<any>();

  @Input()  startShow:Boolean;
  @Output() start = new EventEmitter<any>();

  @Input()  stopShow:Boolean;
  @Output() stop = new EventEmitter<any>();

  @Input()  contentShow:Boolean;
  @Output() content = new EventEmitter<any>();

}
