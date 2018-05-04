import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

//Components
import { AboutComponent }       from './components/about/about.component';
import { EducationComponent }   from './components/education/education.component';
import { LanguagesComponent }   from './components/languages/languages.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { HobbiesComponent }     from './components/hobbies/hobbies.component';

const routes: Routes = [
    {
        path: 'home',
        component: AboutComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'languages',
        component: LanguagesComponent
    },
    {
        path: 'work-history',
        component: WorkHistoryComponent
    },
    {
        path: 'hobbies',
        component: HobbiesComponent
    },
    {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }