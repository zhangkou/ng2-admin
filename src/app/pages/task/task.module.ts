import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TaskComponent } from './task.component';
import { routing } from './task.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { CustomServerDataSource } from './task.service';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    TaskComponent
  ], 
  providers: [CustomServerDataSource]
})
export default class TaskModule {}