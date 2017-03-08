import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormcolumnComponent } from './formcolumn.component';
import { routing } from './formcolumn.routing';
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
    FormcolumnComponent
  ], 
  providers: []
})
export default class FormcolumnModule {}