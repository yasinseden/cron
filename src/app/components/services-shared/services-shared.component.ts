import { Component } from '@angular/core';

@Component({
  selector: 'app-services-shared',
  standalone: true,
  imports: [],
  templateUrl: './services-shared.component.html',
  styleUrl: './services-shared.component.css'
})
export class ServicesSharedComponent {

  cardElements: {img: string, title: string, content:string}[] = [
    {img: 'images/like-icon.png', title: 'Written with Love', content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"},
    {img: 'images/fast-forword-icon.png', title: 'Fast Turnaround', content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"},
    {img: 'images/design-icon.png', title: 'Up to Date', content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"},
    {img: 'images/writing-icon.png', title: 'Premium Content', content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"}
  ]
}
