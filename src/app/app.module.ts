import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AboutEditModalComponent } from './components/form/about-edit-modal/about-edit-modal.component';
import { ExperienceEditModalComponent } from './components/form/experience-edit-modal/experience-edit-modal.component';
import { EducationEditModalComponent } from './components/form/education-edit-modal/education-edit-modal.component';
import { ProjectsEditModalComponent } from './components/form/projects-edit-modal/projects-edit-modal.component';
import { FooterEditModalComponent } from './components/form/footer-edit-modal/footer-edit-modal.component';
import { ContactEditModalComponent } from './components/form/contact-edit-modal/contact-edit-modal.component';
import { SocialEditModalComponent } from './components/form/social-edit-modal/social-edit-modal.component';
import { SkillEditModalComponent } from './components/form/skill-edit-modal/skill-edit-modal.component';
import { HeaderEditComponent } from './components/form/header-edit/header-edit.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    AboutEditModalComponent,
    ExperienceEditModalComponent,
    EducationEditModalComponent,
    ProjectsEditModalComponent,
    FooterEditModalComponent,
    ContactEditModalComponent,
    SocialEditModalComponent,
    SkillEditModalComponent,
    HeaderEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } // Aquí se agrega el interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
