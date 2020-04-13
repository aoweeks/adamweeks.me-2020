import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{


  @Input() mobileMenuActive: Boolean;
  @Output() mobileMenuActiveChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  toggleMobileMenuActive(): void{
    this.mobileMenuActive = !this.mobileMenuActive;
    this.mobileMenuActiveChange.emit(this.mobileMenuActive);
  }

}
