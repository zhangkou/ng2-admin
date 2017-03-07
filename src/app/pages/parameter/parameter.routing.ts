import { Routes, RouterModule }  from '@angular/router';
import { ParameterComponent } from './parameter.component';

const routes: Routes = [
  {
    path: '',
    component: ParameterComponent//,
    //children: [
    //  { path: 'parameter', component: EventComponent },
    //  { path: 'field', component: EventComponent }
   // ]
  }
];

export const routing = RouterModule.forChild(routes);