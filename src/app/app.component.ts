import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storiesArray;
  title = 'Hacker News ng';
  articleText;

  constructor(private apiService: ApiService){}

  getArticle(article){
    this.articleText = article;
  }

  getDate(time){
    const utcSeconds = time;
    var timestamp = new Date(0); // The 0 there is the key, which sets the date to the epoch
    timestamp.setUTCSeconds(utcSeconds);
    return timestamp;
  }

  refreshFeed(){
    this.storiesArray = this.apiService.getStories();
    console.log('Feed Refreshed');
  }

  ngOnInit(){
    this.storiesArray = this.apiService.getStories();
  }
}
