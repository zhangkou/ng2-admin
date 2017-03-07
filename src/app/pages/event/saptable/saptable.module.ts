import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaptableComponent } from './saptable.component';
import { routing } from './saptable.routing';
import { NgaModule } from '../../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    SaptableComponent
  ], 
  providers: []
})
export default class SaptableModule {}