import { Component, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'aw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  @Input() mobileMenuActive: boolean;
  @Output() mobileMenuActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  @ViewChild('logo') logo: ElementRef;

  constructor(private renderer: Renderer2) { }

  toggleMobileMenuActive(): void {
    this.mobileMenuActive = !this.mobileMenuActive;

    if (this.mobileMenuActive === true) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
        // Allow time for menu to revert before applying scrollbars
        setTimeout( () => {
          this.renderer.setStyle(document.body, 'overflow', 'initial');
        }, 1050);
    }

    this.mobileMenuActiveChange.emit(this.mobileMenuActive);
  }

  blurLogo(): void {
    this.logo.nativeElement.blur();
  }

}
