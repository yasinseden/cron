import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BlogArticle from '../models/blog-article.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<BlogArticle[]>('http://localhost:3000/articles')
  }

  createArticle(data: BlogArticle) {
    return this.http.post<BlogArticle>('http://localhost:3000/articles', data)
  }
}
