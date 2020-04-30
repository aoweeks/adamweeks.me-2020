import { Component, OnInit, HostBinding, ElementRef, } from '@angular/core';
import { BasePageComponent} from '../base-page.component';

import { trigger, transition, query, animate, style, stagger } from '@angular/animations';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.scss'],
  animations: [
    trigger('filterRevealAnimations', [
      transition( 'false => true', [
        query('.open-reveal-from-left', [
          style({
            'clip-path': 'inset(0px 100% 2px 0px)'
          }),
          stagger('50ms', [
            animate(
              '100ms 200ms ease-in',
              style({
                'clip-path': 'inset(0px 0px -2px 0px)'
              })
            )
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ArtGalleryComponent
  extends BasePageComponent implements OnInit {
  @HostBinding('class.filter-menu-activated') filterMenuActivated = false;

  extraPageTitle = 'Art Gallery';

  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);

    this.createImageArray();
  }

  filterMenuActivation(isFilterActivated): void {
    this.filterMenuActivated = isFilterActivated;
  }


  /* Temp stuff */

  imagesArray = [];

  createImageArray() {

    for (let i=0; i <= 40; i++) {
      let imageObject: any = {};

      imageObject.width = Math.floor(Math.random() * 400 + 200);
      imageObject.height =  Math.floor(Math.random() * 400 + 200);
      imageObject.red =  Math.floor(Math.random() * 255);
      imageObject.blue =  Math.floor(Math.random() * 255);
      imageObject.green =  Math.floor(Math.random() * 255);

      this.imagesArray.push(imageObject);
    }
    // this.imArray.forEach( (obj) => {

    //   newElement: ElementRef<div> =  new ElementRef<div>;

    // });

    // console.log(this.imageArray);
  }


  divClicked(el: HTMLElement, height: number, width: number) {
    console.log(el.clientHeight, height, el.clientWidth, width, el.offsetTop, el.offsetLeft);
    const elDimensions = {
      height: `${el.clientHeight}px`,
      width: `${el.clientWidth}px`,
      top: el.offsetTop,
      left: el.offsetLeft,
    }
    this.renderer.setStyle(el, 'position', 'fixed');
    this.renderer.setStyle(el, 'height', elDimensions.height);
    this.renderer.setStyle(el, 'width', elDimensions.width);
    this.renderer.setStyle(el, 'top', elDimensions.top);
    this.renderer.setStyle(el, 'left', elDimensions.left);
  }
}

