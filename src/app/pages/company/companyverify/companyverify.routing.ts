import { Routes, RouterModule }  from '@angular/router';
import { CompanyverifyComponent } from './companyverify.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyverifyComponent
  }
];

export const routing = RouterModule.forChild(routes);