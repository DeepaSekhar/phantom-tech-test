import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UrlCrudService } from './url-crud.service';

@Injectable({
  providedIn: 'root',
})
export class UrlValidationService {
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  });

  constructor(
    private http: HttpClient,
    private urlCrudService: UrlCrudService
  ) {}

  public isValidHttpUrl(inputUrl: string): boolean {
    //getting the url to send to the result component

    let url: URL;

    try {
      url = new URL(inputUrl);
      const protocol = url.protocol === 'http:' || url.protocol === 'https:';
      if (protocol === true) {
        // this.urlService.isUrlExist(inputUrl);
        this.urlCrudService.addUrlToLocalStorage(inputUrl);
      }
    } catch (_) {
      alert('Not a valid url');
      return false;
    }
  }

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
