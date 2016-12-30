import { Routes, RouterModule }  from '@angular/router';
import { EventComponent } from './event.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent//,
    //children: [
    //  { path: 'parameter', component: EventComponent },
    //  { path: 'field', component: EventComponent }
   // ]
  }
];

export const routing = RouterModule.forChild(routes);