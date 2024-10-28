import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutSharedComponent } from '../../components/about-shared/about-shared.component';
import { ServicesSharedComponent } from '../../components/services-shared/services-shared.component';
import { ContactSharedComponent } from '../../components/contact-shared/contact-shared.component';
import { map, ReplaySubject } from 'rxjs';
import Slide from '../../models/slide.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, AboutSharedComponent, ServicesSharedComponent, ContactSharedComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  slideTrackSubject: ReplaySubject<Slide[]> = new ReplaySubject()
  slidesArr: Slide[] = [
    { title: 'Welcome To', highlight: 'Content Writing Service', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking', order: 1 },
    { title: 'Welcome To', highlight: 'Content Writing Service', description: '444444444444444444444444444But if the content changes ', order: 4 },
    { title: 'Welcome To', highlight: 'Content Writing Service', description: '222222222222222 reader will be distracted by the readable content of a page when looking', order: 2 },
    { title: 'Welcome To', highlight: 'Content Writing Service', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking', order: 3 }
  ]
  slides$ = this.slideTrackSubject.pipe(
    map(items => items.sort((a, b) => a.order - b.order))
  )

  ngOnInit(): void {
    this.slideTrackSubject.next(this.slidesArr)
  }
}
