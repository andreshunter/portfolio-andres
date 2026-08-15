import { Component } from '@angular/core';

import { NavbarComponent } from '../../layout/navbar/navbar';
import { HeroComponent } from '../../sections/hero/hero';
import { AboutComponent } from '../../sections/about/about';
import { ImpactComponent } from '../../sections/impact/impact';
import { TestimonialComponent } from '../../sections/testimonial/testimonial';
import { ProjectsComponent } from '../../sections/projects/projects';
import { SkillsComponent } from '../../sections/skills/skills';
import { ExperienceComponent } from '../../sections/experience/experience';
import { BlogComponent } from '../../sections/blog/blog';
import { ServicesComponent } from '../../sections/services/services';
import { CertificatesComponent } from '../../sections/certificates/certificates';
import { ContactComponent } from '../../sections/contact/contact';
import { FooterComponent } from '../../layout/footer/footer';
import { ContactModalComponent } from '../../sections/contact-modal';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent, HeroComponent, AboutComponent, ImpactComponent,
    TestimonialComponent, ProjectsComponent, SkillsComponent,
    ExperienceComponent, // BlogComponent, ContactComponent ,
    CertificatesComponent, ServicesComponent , FooterComponent, ContactModalComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  contactModalOpen = false;

  openContactModal() {
    this.contactModalOpen = true;
  }

  closeContactModal() {
    this.contactModalOpen = false;
  }
}
