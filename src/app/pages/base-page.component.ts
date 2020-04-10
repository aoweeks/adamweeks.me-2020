import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BackgroundPositionTrackerService } from '../services/background-position-tracker.service';

@Component({
  selector: 'app-base-page',
  template: '',
  styles: ['']
})
export class BasePageComponent{

  private basePageTitle = "Adam Weeks | "

  constructor(private title: Title, private bgTracker: BackgroundPositionTrackerService) { }

  setPageTitle(extraPageTitle): void {
    this.title.setTitle(this.basePageTitle + extraPageTitle);
  }

}
