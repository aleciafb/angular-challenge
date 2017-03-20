import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectNewComponent } from './project-new/project-new.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'project/new', component: ProjectNewComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
