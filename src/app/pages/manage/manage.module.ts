import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ManageComponent } from './manage.component';
import { routing } from './manage.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    Ng2FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    Ng2PaginationModule,
    routing
  ],
  declarations: [
    ManageComponent
  ]
})
export default class ManageModule {}