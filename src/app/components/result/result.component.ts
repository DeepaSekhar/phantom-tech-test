import { Component, OnInit } from '@angular/core';
import { UrlCrudService } from 'src/app/services/url-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  url$ = this.urlCrudService.url$;
  constructor(private urlCrudService: UrlCrudService, private router: Router) {}

  ngOnInit(): void {}
  navigateToOverView() {
    this.router.navigateByUrl('/overview');
  }
}
