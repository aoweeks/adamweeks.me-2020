import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[awAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements AfterViewInit {

  elTop: number;
  triggerPoint: number;


  scrollListener = this.renderer.listen(window, 'scroll', event => {
    this.checkIfElementInView();
  });

  resizeListener = this.renderer.listen(window, 'resize', event => {
    // console.log('resized');
    this.elTop = this.el.nativeElement.offsetTop;
    this.triggerPoint = this.calculateTriggerPoint();
    this.checkIfElementInView();
  });

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.elTop = this.el.nativeElement.offsetTop;
    this.triggerPoint = this.calculateTriggerPoint();

    if (this.elTop - window.innerHeight > window.pageYOffset) {
      this.renderer.addClass(this.el.nativeElement, 'waiting-for-scroll');
    } else {
      this.elementIsInView();
    }
  }

  checkIfElementInView() {
    if (window.pageYOffset > this.triggerPoint) { this.elementIsInView(); }
  }

  elementIsInView() {
    this.renderer.removeClass(this.el.nativeElement, 'waiting-for-scroll');
    this.scrollListener();
    this.resizeListener(); // Destroy listeners
  }

  calculateTriggerPoint(): number {
    return this.elTop - window.innerHeight + 90;
  }


}
