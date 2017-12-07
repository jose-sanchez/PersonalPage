import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedImageComponent }      from './linked-image/linked-image.component';
import { PersonalDashboardComponent}      from './personal-dashboard/personal-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/personalDashBoard', pathMatch: 'full' },
  { path: 'personalDashBoard',component: PersonalDashboardComponent },
  { path: 'personalDashBoardItem',component: LinkedImageComponent },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}) 
export class AppRoutingModule {}
