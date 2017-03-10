import { Routes, RouterModule }  from '@angular/router';

import { AdminLogin } from './adminlogin.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AdminLogin
  }
];

export const routing = RouterModule.forChild(routes);
