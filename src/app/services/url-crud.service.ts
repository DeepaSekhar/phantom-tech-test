import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { URL } from '../models/url';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlCrudService {
  urls = [];

  private urlSubject = new BehaviorSubject<String | null>(null);
  url$: Observable<String | null>;

  constructor(private router: Router) {
    this.url$ = this.urlSubject.asObservable();
  }

  addUrlToLocalStorage(newBookmark: string): void {
    // Get list from localstorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // Add new url to list
    bookmarks.push(newBookmark);
    // update local list
    this.urls = bookmarks;
    // update localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    //sending data to the subject for result component
    this.urlSubject.next(newBookmark);
    this.router.navigate(['/result']);
  }
  getUrls() {
    //get the value from local storage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    this.urls = bookmarks;
    return bookmarks;
  }
  deleteUrl(url) {
    console.log('delete from service', url, this.urls);

    for (let i = 0; i < this.urls.length; i++) {
      if (this.urls[i] == url) {
        this.urls.splice(i, 1);
      }
    }
  }
}
