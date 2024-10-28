import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BlogService } from '../../../services/blog.service';
import BlogArticle from '../../../models/blog-article.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent {

  formGroup: FormGroup

  constructor(private fb: FormBuilder, private blogService: BlogService, private dialogRef: MatDialogRef<void, boolean>) {
    this.formGroup = this.fb.group({
      title: this.fb.control(''),
      img: this.fb.control(''),
      content: this.fb.control(''),
      shortContent: this.fb.control('')
    })
  }

  postArticle() {
    const article: BlogArticle = {
      title: this.formGroup.value.title,
      img: this.formGroup.value.img,
      content: this.formGroup.value.content,
      shortContent: this.formGroup.value.shortContent,
      date: new Date().getTime()
    }

    this.blogService.createArticle(article).subscribe(
      data => this.dialogRef.close(true)
    )
  }

  cancel() {
    this.dialogRef.close(false)
  }
}
