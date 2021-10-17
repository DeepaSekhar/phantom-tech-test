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
    private urlValidatioService: UrlValidationService,
    private urlCrudService: UrlCrudService
  ) {}

  ngOnInit(): void {
    this.urlCrudService.getUrls();
  }

  public isValidHttpUrl(inputUrl: string) {
    this.urlValidatioService.isValidHttpUrl(inputUrl);
  }
}
