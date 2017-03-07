import { Routes, RouterModule }  from '@angular/router';
import { ManageComponent } from './manage.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent
  }
];

export const routing = RouterModule.forChild(routes);