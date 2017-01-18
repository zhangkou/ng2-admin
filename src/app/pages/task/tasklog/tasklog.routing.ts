import { Routes, RouterModule }  from '@angular/router';
import { TasklogComponent } from './tasklog.component';

const routes: Routes = [
  {
    path: '',
    component: TasklogComponent
  }
];

export const routing = RouterModule.forChild(routes);