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

  constructor(private urlCrudService: UrlCrudService) {}

  ngOnInit() {}
}
