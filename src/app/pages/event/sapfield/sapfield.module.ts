import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SapfieldComponent } from './sapfield.component';
import { routing } from './sapfield.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    SapfieldComponent
  ], 
  providers: []
})
export default class SapfieldModule {}