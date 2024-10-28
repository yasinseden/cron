import { Component } from '@angular/core';
import { AboutSharedComponent } from '../../components/about-shared/about-shared.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutSharedComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
