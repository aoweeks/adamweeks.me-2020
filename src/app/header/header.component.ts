import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'aw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{


  @Input() mobileMenuActive: Boolean;
  @Output() mobileMenuActiveChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private renderer: Renderer2) { }

  toggleMobileMenuActive(): void{
    this.mobileMenuActive = !this.mobileMenuActive;

    if(this.mobileMenuActive === true){
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else{
      this.renderer.setStyle(document.body, 'overflow', 'scroll');
    }
    
    this.mobileMenuActiveChange.emit(this.mobileMenuActive);
  }

}
