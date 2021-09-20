import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DeviceDetectorService } from 'ngx-device-detector';

import {  fadePageInOut } from '../route-animations';
// fadeFromToRight, fadeFromToBottom,
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //animations: [fadePageInOut]
  // , fadeFromToRight, fadeFromToBottom]
})
export class AppComponent implements OnInit {

  mobileMenuState = false;
  customInsetScrollbars = false;

  @HostListener('window:resize')
  onWindowResize() {
    this.checkIfScrollbarsShow();
  }

  constructor(private router: Router,
              private title: Title,
              private renderer: Renderer2,
              private deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.checkWhatScrollbars();


    // Remove mobile menu when navigation changes
    // and check if scrollbars are now showing
    this.router.events.subscribe( () => {
        this.closeMobileMenu();
      });
  }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  setPageTitle(): void {
    this.title.setTitle('Adam Weeks | Art + Code');
  }

  closeMobileMenu(): void {
    this.mobileMenuState = false;
    this.checkIfScrollbarsShow();
    setTimeout( () => {
      // Allow time for menu to revert before applying scrollbars
      this.renderer.setStyle(document.body, 'overflow', 'initial');
      this.checkIfScrollbarsShow();
    }, 1050);

  }

  /*  Check whether browser has custom scrollbars
      and whether they overlay page or shift page */
  private checkWhatScrollbars(): void {
    if (this.deviceService.isDesktop() === true
        && this.deviceService.browser !== 'Firefox') {
          this.customInsetScrollbars = true;
      }
  }

  checkIfScrollbarsShow() {
    if (this.customInsetScrollbars) {
      // Need to sort two way binding of mobile menu in header component
      // console.log(document.getElementById('invisible-footer').offsetTop);
      // console.log(window.innerHeight);
      // console.log('footer height: ' +  document.getElementById('invisible-footer').offsetTop);
      // console.log('window height: ' + window.innerHeight);

      if (document.getElementById('invisible-footer') &&
          document.getElementById('invisible-footer').offsetTop > window.innerHeight) {
        this.renderer.addClass(document.getElementById('aw-container'), 'scrollbar-active')
        //Create a const for aw-container element in ngOnInit
      } else {
        this.renderer.removeClass(document.getElementById('aw-container'), 'scrollbar-active')
      }
      // .getElementById('aw-container').scrollHeight);
    }
  }

  // /* Mobile Menu */

  // toggleMobileMenu(newMenuState: Boolean){
  //   this.mobileMenuActive = newMenuState;
  // }

  // isMobileMenuActive(): Boolean {
  //   return this.mobileMenuActive;
  // }
}
