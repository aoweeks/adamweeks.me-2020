import { Component, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'aw-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements AfterViewInit {

  @Input() text = '';
  @ViewChild('tooltipBody') tooltip: ElementRef;

  @HostListener('window:resize')
  onWindowResize() {
    this.ensureTooltipWithinWindow();
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.ensureTooltipWithinWindow();
  }


  /*  If the tooltip would extend out past the left of the browser window,
      move accordingly */
  ensureTooltipWithinWindow(): void {
    setTimeout( () => { // In setTimeout to circumvent angular error
      const absoluteLeft: number = this.tooltip.nativeElement.getBoundingClientRect().left;
      const relativeLeft: number = parseInt(window.getComputedStyle(this.tooltip.nativeElement).left, 10);

      if (absoluteLeft < 0) {
        const adjustedLeft = relativeLeft + -absoluteLeft + 10;
        this.tooltip.nativeElement.style.left = `${adjustedLeft}px`;
      }
    }, 0);
  }
}
