import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RfcparamComponent } from './rfcparam.component';
import { routing } from './rfcparam.routing';
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
    RfcparamComponent
  ], 
  providers: []
})
export default class RfcparmaModule {}