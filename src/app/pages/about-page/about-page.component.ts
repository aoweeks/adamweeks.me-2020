import { Component, OnInit, HostListener } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent
  extends BasePageComponent implements OnInit {

  private extraPageTitle = 'About';
  isAboveMobileBreakpoint = true;

  @HostListener('window:resize')
  onWindowResize() {
    this.isAboveMobileBreakpoint = this.checkForMobileBreakpoint();
  }


  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);
    this.isAboveMobileBreakpoint = this.checkForMobileBreakpoint();
  }

  checkForMobileBreakpoint(): boolean {
      return  window.innerWidth > 800 ? true : false;
  }

}
