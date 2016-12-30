import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { EventComponent } from './event.component';
import { routing } from './event.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    EventComponent
  ], 
  providers: []
})
export default class EventModule {}