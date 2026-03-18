import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 IMPORTANTE
import { ArticleService } from '../../services/article.services';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[] = [];
  public url: string;

  constructor(
    private _articleService: ArticleService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
      (response: any) => {
        console.log(response); // 🔥 DEBUG
        this.articles = response.articles; // ✅ correcto
      },
      error => {
        console.log(error);
      }
    );
  }
}
