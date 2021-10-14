import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UrlValidationService {
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient) {}

  isUrlExist(url: string) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('HEAD', url, false);
    httpRequest.send();
    return httpRequest.status != 404;

    // 1.get the Url from the textbox.
    // 2.Run a head request to the url
    // 3.check status is not 404 the url exists
  }
}
