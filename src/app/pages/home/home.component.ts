import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutSharedComponent } from '../../components/about-shared/about-shared.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule, AboutSharedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    // this.http.get<any>('http://localhost:3000/posts').subscribe(res => console.log(res))
    this.http.get<any>('http://localhost:3000/posts').subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    })
  }
}
