import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { EventComponent } from './event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './event.routing';
import { NgaModule } from '../../theme/nga.module';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    Ng2FilterPipeModule,
    DropdownModule,
    ModalModule,
    routing
  ],
  declarations: [
    EventComponent
  ], 
  providers: []
})
export default class EventModule {}