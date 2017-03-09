import { Routes, RouterModule }  from '@angular/router';
import { UserimportComponent } from './userimport.component';

const routes: Routes = [
  {
    path: '',
    component: UserimportComponent
  }
];

export const routing = RouterModule.forChild(routes);