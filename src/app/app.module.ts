import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components 
import { AppComponent }          from './app.component';
import { AboutComponent }        from './components/about/about.component';
import { LanguagesComponent }    from './components/languages/languages.component';
import { EducationComponent }    from './components/education/education.component';
import { WorkHistoryComponent }  from './components/work-history/work-history.component';
import { AppRoutingModule }      from './app-routing.component';
import { HeaderComponent }       from './components/header/header.component';
import { ProjectsComponent }     from './components/projects/projects.component';
import { SiteFooterComponent }   from './components/footer/sitefooter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LanguagesComponent,
    EducationComponent,
    WorkHistoryComponent,
    ProjectsComponent,
    SiteFooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
