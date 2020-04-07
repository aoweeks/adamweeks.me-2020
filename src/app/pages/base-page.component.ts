import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-base-page',
  template: '',
  styles: ['']
})
export class BasePageComponent{

  private basePageTitle = "Adam Weeks | "

  constructor(private title: Title) { }

  setPageTitle(extraPageTitle): void {
    this.title.setTitle(this.basePageTitle + extraPageTitle);
  }

}
