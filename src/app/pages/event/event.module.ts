import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { EventComponent } from './event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './event.routing';
import { NgaModule } from '../../theme/nga.module';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    Ng2FilterPipeModule,
    routing
  ],
  declarations: [
    EventComponent
  ], 
  providers: []
})
export default class EventModule {}