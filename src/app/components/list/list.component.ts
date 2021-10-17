import { Component, OnInit } from '@angular/core';
import { URL } from '../../models/url';
import { UrlCrudService } from 'src/app/services/url-crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  url = [];
  urls;
  showEditForm = false;
  constructor(private urlCrudService: UrlCrudService) {}

  ngOnInit() {
    this.urls = this.urlCrudService.getUrls();
    console.log('from list component', this.urls);
  }
  deleteUrl(url) {
    console.log('delete from component');
    this.urlCrudService.deleteUrl(url);
  }
  toggleEditForm() {
    // OTHER METHODS OF TOGGLING
    // this.showEditForm = this.showEditForm === true ? false : true
    // this.showEditForm = !this.showEditForm
    if (this.showEditForm === true) {
      this.showEditForm = false;
    } else {
      this.showEditForm = true;
    }
  }
  editUrl(oldUrl: string, newUrl: string) {
    this.toggleEditForm();
    console.log('old vale', oldUrl, 'new value', newUrl);
    this.urlCrudService.editUrl(oldUrl, newUrl);
  }
}
