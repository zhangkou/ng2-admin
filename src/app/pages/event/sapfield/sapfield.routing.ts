import { Routes, RouterModule }  from '@angular/router';
import { SapfieldComponent } from './sapfield.component';

const routes: Routes = [
  {
    path: '',
    component: SapfieldComponent
  }
];

export const routing = RouterModule.forChild(routes);