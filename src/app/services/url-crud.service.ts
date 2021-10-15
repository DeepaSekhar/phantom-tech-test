import { Injectable } from '@angular/core';
import { URL } from '../models/url';
@Injectable({
  providedIn: 'root',
})
export class UrlCrudService {
  urls = ['http://www.aaa.com', 'http://bbb.com'];

  constructor() {}

  addUrlToLocalStorage(newBookmark: string): void {
    console.log('from service', newBookmark);
    // Get list from localstorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // Add new url to list
    bookmarks.push(newBookmark);
    // update local list
    this.urls = bookmarks;
    // update localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
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
