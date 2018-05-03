import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components 
import { AppComponent }   from './app.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
