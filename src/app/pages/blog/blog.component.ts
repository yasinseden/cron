import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import BlogArticle from '../../models/blog-article.model';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CreateArticleComponent } from './create-article/create-article.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  articles: BlogArticle[] = []
  dialog = inject(MatDialog);

  constructor(private blogHttpService: BlogService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this.blogHttpService.getArticles().subscribe({
      next: data => this.articles = data,
      error: err => console.error(err)
    })
  }

  openDialog() {
    const dialog = this.dialog.open(CreateArticleComponent)
    dialog.afterClosed().pipe(filter(createResult => !!createResult)).subscribe(() => this.getArticles())
  }
}
