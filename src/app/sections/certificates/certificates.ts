import { Component } from '@angular/core';
import { CERTIFICATES } from '../../core/data/certificates';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent {
  certificates = CERTIFICATES;
}
