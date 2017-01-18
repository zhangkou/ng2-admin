import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TaskComponent } from './task.component';
import { routing } from './task.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import {BrowserModule} from '@angular/platform-browser';
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    BrowserModule,
    Ng2PaginationModule,
    routing
  ],
  declarations: [
    TaskComponent
  ]
})
export default class TaskModule {}