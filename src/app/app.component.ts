import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
              private renderer: Renderer2) {

    // Remove mobile menu when navigation changes
    router.events.subscribe( () => {
        this.mobileMenuState = false;
        this.renderer.setStyle(document.body, 'overflow', 'scroll');
      });
  }

  mobileMenuState = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  setPageTitle() {
    this.title.setTitle('Adam Weeks');
  }

  // /* Mobile Menu */

  // toggleMobileMenu(newMenuState: Boolean){
  //   this.mobileMenuActive = newMenuState;
  // }

  // isMobileMenuActive(): Boolean {
  //   return this.mobileMenuActive;
  // }
}
