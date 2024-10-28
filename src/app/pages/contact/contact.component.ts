import { Component } from '@angular/core';
import { ContactSharedComponent } from '../../components/contact-shared/contact-shared.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactSharedComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
