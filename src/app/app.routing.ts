import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { GymnastProfileComponent } from './gymnast-profile/gymnast-profile.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamListComponent
  },{
    path: 'gymnasts/:id',
    component: GymnastProfileComponent
  },{
      path: 'admin',
      component: AdminComponent
  },{
    path: 'about',
    component: AboutComponent

    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
