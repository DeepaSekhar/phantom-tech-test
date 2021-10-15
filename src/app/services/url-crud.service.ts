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
}

//   private url: URL[];
//   constructor() {
//     let urls = this.getLocalStorageUrls();
//   }
//   getLocalStorageUrls() {
//     let localStorageItem = JSON.parse(localStorage.getItem('urls'));
//     return localStorageItem == null ? [] : localStorageItem.url;
//   }
//   setLocalStorageUrls(url: URL[]) {
//     localStorage.setItem('url', JSON.stringify({ url: URL }));
//   }
//   addURL(newUrl: String) {
//     let urls = JSON.parse(localStorage.getItem('url'));
//     //add new url
//     urls.push(newUrl);
//     //set new url
//     localStorage.setItem('url', JSON.stringify(urls));
//   }
//   deleteUrl() {}
//   editUrl() {}
// }
