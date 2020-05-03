import { Component, OnInit, HostBinding, ElementRef, HostListener, ViewChild, } from '@angular/core';
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

  @ViewChild('imageGallery') imageGallery: ElementRef;
  @HostBinding('class.filter-menu-activated') filterMenuActivated = false;
  // @HostListener('window:resize')
  // onWindowResize() {
  //   clearTimeout(this.windowFinishResize);
  //   this.windowFinishResize = setTimeout(this.windowFinishedResizing, 100);
  // }

  // windowFinishResize; //typeof setTimeout
  extraPageTitle = 'Art Gallery';
  selectedImage;
  selectedImageElement: HTMLElement;
  selectedImageWrapper: HTMLElement;

  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);

    this.createImageArray();
  }

  filterMenuActivation(isFilterActivated): void {
    this.filterMenuActivated = isFilterActivated;
  }

  // windowFinishedResizing() {
  //   console.log('finished resizing');
  // }


  /* Temp stuff */

  imagesArray = [];

  createImageArray() {

    for (let i=0; i <= 40; i++) {

      const randomFileNum = Math.floor(Math.random() * 8);
      this.imagesArray.push(`../../../assets/images/temp/${randomFileNum}.png`);
    }
  }

  /* Add styles to fix image in place for transition to image modal */
  imageClicked(el: HTMLElement, elWrapper: HTMLElement): void {

    if(this.selectedImageWrapper && this.selectedImageElement) {
      this.resetSelectedImageStyles(this.selectedImageElement, this.selectedImageWrapper);
    }

    this.selectedImageElement = el;
    this.selectedImageWrapper = elWrapper;

    const elDimensions = {
      height: `${el.clientHeight}px`,
      width: `${el.clientWidth}px`,
      top: `${el.offsetTop - window.scrollY + 55}px`,
      left: `${el.offsetLeft + 7.5}px`,
    }

    this.renderer.setStyle(elWrapper, 'height', elWrapper.clientHeight + 'px');
    this.renderer.setStyle(elWrapper, 'background', 'none');

    this.renderer.setStyle(el, 'opacity', 1);
    this.renderer.setStyle(el, 'position', 'fixed');
    this.renderer.setStyle(el, 'height', elDimensions.height);
    this.renderer.setStyle(el, 'width', elDimensions.width);
    this.renderer.setStyle(el, 'top', elDimensions.top);
    this.renderer.setStyle(el, 'left', elDimensions.left);

    setTimeout(() => {this.renderer.addClass(el, 'transition-setter');}, 1);
    setTimeout(() => {
      this.renderer.addClass(el, 'selected-image');
    }, 200);


  }

  /* Clear styles that are added for transition to image modal */
  resetSelectedImageStyles(image: HTMLElement, imageWrapper: HTMLElement): void {

    this.renderer.removeStyle(image, 'opacity');
    this.renderer.removeStyle(image, 'position');
    this.renderer.removeStyle(image, 'height');
    this.renderer.removeStyle(image, 'width');
    this.renderer.removeStyle(image, 'top');
    this.renderer.removeStyle(image, 'left');

    this.renderer.removeClass(image, 'transition-setter');
    this.renderer.removeClass(image, 'selected-image');

    this.renderer.removeStyle(imageWrapper, 'height');
    this.renderer.removeStyle(imageWrapper, 'background');
  }

  thumbnailLoaded(imageWrapper: HTMLElement): void {
    this.renderer.addClass(imageWrapper, 'image-loaded');
  }
}

/*

const conWidth = container.width;
imageSizes[] = n*{height, width};

makeRow() {
  const startingHeight = 400;
  const minHeight = 200;

  newRow[0] = imageSizes[next];

  if newRow(0).isLandscape {
    if newRow(0).width > conWidth {
      newRow(0).width = conWidth;
      newRow(0).height = auto;
    }
  else{
    newRow[0].height = startingHeight;
    newRow[0].width = auto;
  }

  rowHeight = newRow[0].height;


  ratio = rowHeight / imageSizes[next].height;
  const withoutNewImageWidth = newRow[0].width;
  const withNewImageWidth = newRow[0].width + (newRow[1].width * ratio);
  if (withNewImageWidth < conWidth)
    addNewImage
  else {
    if ( conWidth - withoutNew >= withNew - conWidth )
      scale down
    else
      scrap new image and scale up
    start new row
  }

}
*/
