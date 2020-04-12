import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  private mobileMenuActive: Boolean = false;

  @Output() mobileMenuStateChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  toggleMobileMenuActive(): void{
    this.mobileMenuActive = !this.mobileMenuActive;
    this.mobileMenuStateChange.emit(this.mobileMenuActive);
  }

  isMobileMenuActive(): Boolean {
    return this.mobileMenuActive;
  }

}
