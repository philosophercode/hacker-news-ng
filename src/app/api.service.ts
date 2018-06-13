import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  getStories(): Observable<Object> {
    var articles:any = [];
    var url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    
    this.https.get<Object>(url).subscribe((x) => {
      for (const article in x) {
        var articleURL = `https://hacker-news.firebaseio.com/v0/item/${x[article]}.json?print=pretty`;
        this.https.get<Object>(articleURL).subscribe((articleRes) => {articles.push(articleRes);});
      }
    });
    return articles;
  }

  constructor(private https: HttpClient) { }

}
