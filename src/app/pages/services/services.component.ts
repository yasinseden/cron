import { Component } from '@angular/core';
import { ServicesSharedComponent } from '../../components/services-shared/services-shared.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServicesSharedComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
