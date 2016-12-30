import { Routes, RouterModule }  from '@angular/router';
import { RfcparamComponent } from './rfcparam.component';

const routes: Routes = [
  {
    path: '',
    component: RfcparamComponent
  }
];

export const routing = RouterModule.forChild(routes);