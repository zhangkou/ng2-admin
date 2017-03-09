import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ParameterComponent } from './parameter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './parameter.routing';
import { NgaModule } from '../../theme/nga.module';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    Ng2FilterPipeModule,
    DropdownModule,
    ModalModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [
    ParameterComponent
  ], 
  providers: []
})
export default class ParameterModule {}