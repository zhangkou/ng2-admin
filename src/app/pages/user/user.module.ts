import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { UserComponent } from './user.component';
import { routing } from './user.routing';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  imports: [
    CommonModule,
    Ng2FilterPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    Ng2PaginationModule,
    routing
  ],
  declarations: [
    UserComponent
  ], 
  providers: []
})
export default class UserModule {}