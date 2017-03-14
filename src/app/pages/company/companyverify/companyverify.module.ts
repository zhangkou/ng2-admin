import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyverifyComponent } from './companyverify.component';
import { routing } from './companyverify.routing';
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
    CompanyverifyComponent
  ], 
  providers: []
})
export default class CompanyverifyModule {}