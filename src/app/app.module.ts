import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerAboutMeComponent } from './banner-about-me/banner-about-me.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ListaProductoComponent } from './productos/lista-producto/lista-producto.component';
import { HomeComponent } from './productos/home/home.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { LoginComponent } from './auth/login/login.component';

import { interceptorProvider } from 'src/app/interceptors/producto-interceptor.service';
import { UserComponent } from './users/user/user.component';
import { AdminComponent } from './users/admin/admin.component';
import { RegistroComponent } from './users/registro/registro.component';
import { ExperiencesListComponent } from './professionalExperience/experiences-list/experiences-list.component';
import { ExperiencesNewComponent } from './professionalExperience/experiences-new/experiences-new.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerAboutMeComponent,
    ProfessionalExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    ListaProductoComponent,
    HomeComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    RegistroComponent,
    ExperiencesListComponent,
    ExperiencesNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
