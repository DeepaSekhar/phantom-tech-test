import { Component, OnInit } from '@angular/core';
import { URL } from '../../models/url';
import { UrlCrudService } from 'src/app/services/url-crud.service';
import { templateJitUrl } from '@angular/compiler';
import { Urls22 } from './mock-data/100.const';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  url = [];
  urls;
  showEditForm = false;
  pages: string[][] = [];
  numOfPages: number;
  currentPage = 1;
  currentPageIndex = 0;
  private perPage = 20;
  constructor(private urlCrudService: UrlCrudService) {}

  ngOnInit() {
    this.urls = this.urlCrudService.getUrls();
    this.sortUrlsIntoPages();
  }
  deleteUrl(url) {
    this.urlCrudService.deleteUrl(url);
  }

  // toggling form when edit button clicks

  toggleEditForm() {
    if (this.showEditForm === true) {
      this.showEditForm = false;
    } else {
      this.showEditForm = true;
    }
  }
  editUrl(oldUrl: string, newUrl: string) {
    this.toggleEditForm();
    this.urlCrudService.editUrl(oldUrl, newUrl);
  }
  // sort urls into pages

  sortUrlsIntoPages() {
    // calculating how many pages needed by dividing all url by 20

    this.numOfPages = Math.ceil(this.urls.length / this.perPage);
    let tempArray = [];

    //pushing items to temporary array
    if (this.urls.length <= this.perPage) {
      return this.pages.push(this.urls);
    }

    for (let i = 0; i < this.urls.length; i++) {
      tempArray.push(this.urls[i]); // add item to temporary array

      // when at end of whole list, add remaining urls to pages
      if (i + 1 === this.urls.length) {
        this.pages.push(tempArray);
        return;
      }

      //pusing tempArray value to the pages.
      // once you get to end of page or the last url, add to pages array
      if (i !== 0 && this.isDivisibleByPageNum(i)) {
        this.pages.push(tempArray);
        tempArray = [];
      }
    }
  }
  //next page

  goToNextPage() {
    if (this.currentPage < this.numOfPages) {
      this.currentPageIndex++;
      this.currentPage++;
    }
  }
  // previous page

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentPageIndex--;
    }
  }

  private isDivisibleByPageNum(num: number): boolean {
    return (num + 1) % this.perPage === 0;
  }
}
