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

  @Input()  button1Show:Boolean;
  @Input()  button1Text:Boolean;
  @Output() button1 = new EventEmitter<any>();

  @Input()  button2Show:Boolean;
  @Input()  button2Text:Boolean;
  @Output() button2 = new EventEmitter<any>();

  @Input()  button3Show:Boolean;
  @Input()  button3Text:Boolean;
  @Output() button3 = new EventEmitter<any>();

  @Input()  button4Show:Boolean;
  @Input()  button4Text:Boolean;
  @Output() button4 = new EventEmitter<any>();

  @Input()  button5Show:Boolean;
  @Input()  button5Text:Boolean;
  @Output() button5 = new EventEmitter<any>();

}
