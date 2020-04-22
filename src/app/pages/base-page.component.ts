import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-base-page',
  template: '',
  styles: []
})
export class BasePageComponent implements OnInit {

  private basePageTitle = 'Adam Weeks | ';

  constructor(private title: Title) { }

  ngOnInit(): void {

  }

  setPageTitle(extraPageTitle): void {
    this.title.setTitle(this.basePageTitle + extraPageTitle);
  }

}
