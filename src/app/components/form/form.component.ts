import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UrlCrudService } from 'src/app/services/url-crud.service';
import { UrlValidationService } from '../../services/url-validation.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  //sending url to the parent
  @Output() inputUrlEmt = new EventEmitter<string>();
  constructor() {}
  //when user click submit button it Send data to the
  public onUserSubmit(inputUrl: string, evt: Event): void {
    evt.preventDefault();
    this.inputUrlEmt.emit(inputUrl);
  }
}
