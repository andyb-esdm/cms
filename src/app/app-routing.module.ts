import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { MapComponent } from './map/map.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit-project/:siteCode', component: EditProjectComponent },
  { path: 'site-details/:siteCode', component: SiteDetailsComponent },
  { path: 'projects-list/:siteCode', component: ProjectsListComponent },
  { path: 'map', component: MapComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
