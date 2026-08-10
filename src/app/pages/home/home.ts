import { Component } from '@angular/core';

import { NavbarComponent } from '../../layout/navbar/navbar';
import { HeroComponent } from '../../sections/hero/hero';
import { AboutComponent } from '../../sections/about/about';
import { ProjectsComponent } from '../../sections/projects/projects';
import { SkillsComponent } from '../../sections/skills/skills';
import { ExperienceComponent } from '../../sections/experience/experience';
import { CertificatesComponent } from '../../sections/certificates/certificates';
import { ContactComponent } from '../../sections/contact/contact';
import { FooterComponent } from '../../layout/footer/footer';
import { ServicesComponent } from '../../sections/services/services';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificatesComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}