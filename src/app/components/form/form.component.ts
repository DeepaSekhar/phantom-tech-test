import { Component, OnInit } from '@angular/core';
import { UrlValidationService } from '../../services/url-validation.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private urlService: UrlValidationService) {}

  ngOnInit(): void {}

  isValidHttpUrl(string: string): boolean {
    let url: URL;

    try {
      url = new URL(string);
      const protocol = url.protocol === 'http:' || url.protocol === 'https:';
      if (protocol === true) {
        this.urlService.isUrlExist(string);
      }
    } catch (_) {
      return false;
    }
  }
  //  limitation for the validation
  // -> It wont accept www.
}
