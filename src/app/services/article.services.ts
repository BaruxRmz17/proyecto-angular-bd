import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable()
export class ArticleService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getArticles(): Observable<any> {
    return this._http.get(this.url + 'articles');
  }
}
