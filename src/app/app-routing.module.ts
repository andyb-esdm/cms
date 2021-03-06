import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { SiteDetailsComponent } from './site/site-details/site-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { MapPageComponent } from './map-page/map-page.component';
import { SitesComponent } from './site/sites/sites.component';
import { HelpComponent } from './help/help.component';
import { HelpDetailsComponent } from './help-details/help-details.component';
import { TreePageComponent } from './tree-page/tree-page.component';
import { SiteEditComponent } from './site/site-edit/site-edit.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'site-details/:siteCode', component: SiteDetailsComponent },
  { path: 'site-edit/:siteCode', component: SiteEditComponent },
  { path: 'projects/:siteCode', component: ProjectsPageComponent },
  { path: 'help', component: HelpComponent },
  { path: 'help-details/:id', component: HelpDetailsComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'tree', component: TreePageComponent },
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
