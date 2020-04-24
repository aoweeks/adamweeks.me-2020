import { Component, OnInit, HostListener } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

import { fadeFromRightOrBottom } from '../../../route-animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [fadeFromRightOrBottom]
})
export class AboutPageComponent
  extends BasePageComponent implements OnInit {

  private extraPageTitle = 'About';
  isPortrait: boolean;

  @HostListener('window:resize')
  onWindowResize() {
    this.isPortrait = this.checkForPortraitMode();
  }


  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);
    this.isPortrait = this.checkForPortraitMode();
  }

  checkForPortraitMode(): boolean {
      return  window.innerWidth <= window.innerHeight ? true : false;
  }

}
