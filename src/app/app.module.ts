import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

//Components 
import { AppComponent }         from './app.component';
import { AboutComponent }       from './components/about/about.component';
import { LanguagesComponent }   from './components/languages/languages.component';
import { EducationComponent }   from './components/education/education.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { AppRoutingModule }     from './app-routing.component';
import { HeaderComponent }      from './components/header/header.component';
import { ProjectsComponent }    from './components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LanguagesComponent,
    EducationComponent,
    WorkHistoryComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
