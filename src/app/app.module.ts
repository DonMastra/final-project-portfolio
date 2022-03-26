import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerAboutMeComponent } from './banner-about-me/banner-about-me.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerAboutMeComponent,
    ProfessionalExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
