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
    console.log('urls and length of urls', this.urls, this.urls.length);
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
    console.log('number of pages from function', this.numOfPages);
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
    console.log('currentPage', this.currentPage);
    console.log('num of pages', this.numOfPages);
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

const placeholderUrls = [
  'http://www.youtube.com',
  'http://www.facebook.com',
  'http://www.baidu.com',
  'http://www.yahoo.com',
  'http://www.amazon.com',
  'http://www.wikipedia.org',
  'http://www.qq.com',
  'http://www.google.co.in',
  'http://www.twitter.com',
  'http://www.live.com',
  'http://www.taobao.com',
  'http://www.bing.com',
  'http://www.instagram.com',
  'http://www.weibo.com',
  'http://www.sina.com.cn',
  'http://www.linkedin.com',
  'http://www.yahoo.co.jp',
  'http://www.msn.com',
  'http://www.vk.com',
  'http://www.google.de',
  'http://www.yandex.ru',
  'http://www.hao123.com',
  'http://www.google.co.uk',
  'http://www.reddit.com',
  'http://www.ebay.com',
  'http://www.google.fr',
  'http://www.t.co',
  'http://www.tmall.com',
  'http://www.google.com.br',
  'http://www.360.cn',
  'http://www.sohu.com',
  'http://www.amazon.co.jp',
  'http://www.pinterest.com',
  'http://www.netflix.com',
  'http://www.google.it',
  'http://www.google.ru',
  'http://www.microsoft.com',
  'http://www.google.es',
  'http://www.wordpress.com',
  'http://www.gmw.cn',
  'http://www.tumblr.com',
  'http://www.paypal.com',
  'http://www.blogspot.com',
  'http://www.imgur.com',
  'http://www.stackoverflow.com',
  'http://www.aliexpress.com',
  'http://www.naver.com',
  'http://www.ok.ru',
  'http://www.apple.com',
  'http://www.github.com',
  'http://www.chinadaily.com.cn',
  'http://www.imdb.com',
  'http://www.google.co.kr',
  'http://www.fc2.com',
  'http://www.jd.com',
  'http://www.blogger.com',
  'http://www.163.com',
  'http://www.google.ca',
  'http://www.whatsapp.com',
  'http://www.amazon.in',
  'http://www.office.com',
  'http://www.tianya.cn',
  'http://www.google.co.id',
  'http://www.youku.com',
  'http://www.rakuten.co.jp',
  'http://www.craigslist.org',
  'http://www.amazon.de',
  'http://www.nicovideo.jp',
  'http://www.google.pl',
  'http://www.soso.com',
  'http://www.bilibili.com',
  'http://www.dropbox.com',
  'http://www.xinhuanet.com',
  'http://www.outbrain.com',
  'http://www.pixnet.net',
  'http://www.alibaba.com',
  'http://www.alipay.com',
  'http://www.microsoftonline.com',
  'http://www.booking.com',
  'http://www.googleusercontent.com',
  'http://www.google.com.au',
  'http://www.popads.net',
  'http://www.cntv.cn',
  'http://www.zhihu.com',
  'http://www.amazon.co.uk',
  'http://www.diply.com',
  'http://www.coccoc.com',
  'http://www.cnn.com',
  'http://www.bbc.co.uk',
  'http://www.twitch.tv',
  'http://www.wikia.com',
  'http://www.google.co.th',
  'http://www.go.com',
  'http://www.google.com.ph',
  'http://www.doubleclick.net',
  'http://www.onet.pl',
  'http://www.googleadservices.com',
  'http://www.accuweather.com',
  'http://www.googleweblight.com',
  'http://www.answers.yahoo.com',
  'http://www.googleweblight.com',
  'http://www.answers.yahoo.com',
];
