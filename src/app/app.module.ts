import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { MapComponent } from './map/map.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { SitesListComponent } from './sites-list/sites-list.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    PageNotFoundComponent,
    EditProjectComponent,
    MapComponent,
    FormWizardComponent,
    WizardStepComponent,
    SitesListComponent,
    SiteDetailsComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
