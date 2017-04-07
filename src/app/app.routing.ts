import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { GymnastProfileComponent } from './gymnast-profile/gymnast-profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TeamListComponent
  }, {
    path: 'gymnasts/:id',
    component: GymnastProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
