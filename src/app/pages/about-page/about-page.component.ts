import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent
  extends BasePageComponent implements OnInit {

  private extraPageTitle = "About";

  ngOnInit(): void {
    this.setPageTitle(this.extraPageTitle);
  }

}
