import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DeviceDetectorService } from 'ngx-device-detector';

import { slideLeft } from '../route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideLeft]
})
export class AppComponent {

  constructor(private router: Router,
              private title: Title,
              private renderer: Renderer2,
              private deviceService: DeviceDetectorService) {

    console.log(this.deviceService.getDeviceInfo());
    // Remove mobile menu when navigation changes
    router.events.subscribe( () => {
        this.closeMobileMenu();
      });
  }

  mobileMenuState = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  setPageTitle(): void {
    this.title.setTitle('Adam Weeks | Art + Code');
  }

  private closeMobileMenu(): void {
    this.mobileMenuState = false;
    setTimeout( () => {
      // Allow time for menu to revert before applying scrollbars
      this.renderer.setStyle(document.body, 'overflow', 'scroll');
    }, 1050);
  }

  private checkWhatScrollbars(): void {

  }

  // /* Mobile Menu */

  // toggleMobileMenu(newMenuState: Boolean){
  //   this.mobileMenuActive = newMenuState;
  // }

  // isMobileMenuActive(): Boolean {
  //   return this.mobileMenuActive;
  // }
}
