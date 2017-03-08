import { Routes, RouterModule }  from '@angular/router';
import { FormcolumnComponent } from './formcolumn.component';

const routes: Routes = [
  {
    path: '',
    component: FormcolumnComponent
  }
];

export const routing = RouterModule.forChild(routes);