import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/register.module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
      //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
      { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
      { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
      { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
      { path: 'maps', loadChildren: () => System.import('./maps/maps.module') },
      { path: 'new',  loadChildren: () => System.import('./new/new.module') },
      { path: 'user/import',  loadChildren: () => System.import('./user/user.module') },
      { path: 'user/list',  loadChildren: () => System.import('./user/user.module') },
      { path: 'task',  loadChildren: () => System.import('./task/task.module') },
      { path: 'tasklog/:id',  loadChildren: () => System.import('./task/tasklog/tasklog.module') },
      { path: 'event',  loadChildren: () => System.import('./event/event.module') },
      { path: 'rfcparam/:id',  loadChildren: () => System.import('./event/rfcparam/rfcparam.module') },
      { path: 'sapfield/:id',  loadChildren: () => System.import('./event/sapfield/sapfield.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
