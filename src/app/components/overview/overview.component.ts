import { Component, OnInit } from '@angular/core';
import { UrlCrudService } from 'src/app/services/url-crud.service';
import { UrlValidationService } from 'src/app/services/url-validation.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  url: string;
  constructor(
    private urlService: UrlValidationService,
    private urlCrudService: UrlCrudService
  ) {}

  ngOnInit(): void {
    this.urlCrudService.getUrls();
  }

  public isValidHttpUrl(inputUrl: string): boolean {
    //getting the url to send to the result component
    this.url = inputUrl;
    let url: URL;

    try {
      url = new URL(inputUrl);
      const protocol = url.protocol === 'http:' || url.protocol === 'https:';
      if (protocol === true) {
        // this.urlService.isUrlExist(inputUrl);
        this.urlCrudService.addUrlToLocalStorage(inputUrl);
      }
    } catch (_) {
      return false;
    }
  }
}
