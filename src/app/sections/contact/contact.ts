import { Component } from '@angular/core';
import { CONTACTS } from '../../core/data/contact';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
   contacts = CONTACTS;
}
