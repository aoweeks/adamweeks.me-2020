import { Component, OnInit } from '@angular/core';

import { BasePageComponent} from '../base-page.component';

@Component({
  selector: 'aw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent
  extends BasePageComponent implements OnInit {

  private extraPageTitle = "Art + Code";

  ngOnInit(): void {
    this.setPageTitle(this.extraPageTitle);
  }

}
