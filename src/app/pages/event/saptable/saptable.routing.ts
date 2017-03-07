import { Routes, RouterModule }  from '@angular/router';
import { SaptableComponent } from './saptable.component';

const routes: Routes = [
  {
    path: '',
    component: SaptableComponent
  }
];

export const routing = RouterModule.forChild(routes);