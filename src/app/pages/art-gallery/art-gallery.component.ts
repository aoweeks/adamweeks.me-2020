import { Component, OnInit, HostBinding, ElementRef, HostListener, ViewChild, } from '@angular/core';
import { BasePageComponent} from '../base-page.component';

import { trigger, transition, query, animate, style, state, stagger, animateChild, sequence, group } from '@angular/animations';

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
    ]),

    trigger('imageSelected', [
      state('true', style({
        height: 'calc(100vh - var(--header-height))',
        visibility: 'visible'
      })),
      transition( 'false => true', [
        style({
          height: 0,
          visibility: 'visible'
        }),
        animate(
          '300ms 400ms ease-out',
          style({
            height: 'calc(100vh - var(--header-height))'
          })
        ),
        query('@slideUp', [
          stagger('100ms', animateChild())
        ])
      ]),
      transition( 'true => false', [
        sequence([
          query('@slideUp', [
             animateChild()
          ]),
          animate(
            '300ms 100ms ease-in',
            style({
              height: 0
            })
          ),
        ])
      ])
    ]),
    trigger('slideUp', [
      state('false', style({
        'clip-path': 'inset(0 0 100% 0)',
        'transform': 'translateY(200%)'
      })),
      state('true', style({
        'clip-path': 'inset(0)',
        'transform': 'translateY(0%)'
      })),
      transition('false => true', [
        style({
          'clip-path': 'inset(0 0 100% 0)',
          'transform': 'translateY(200%)'
        }),
        animate(
          '500ms ease-out',
          style({
            'clip-path': 'inset(0)',
            'transform': 'translateY(0%)'
          })
        ),
      ]),
      transition('true => false', [
        style({
          'clip-path': 'inset(0)',
          'transform': 'translateY(0%)'
        }),
        animate(
          '500ms ease-out',
          style({
            'clip-path': 'inset(0 0 100% 0)',
            'transform': 'translateY(200%)'
          })
        ),
      ]),

    ])
  ]
})
export class ArtGalleryComponent
  extends BasePageComponent implements OnInit {


  @ViewChild('imageGallery') imageGallery: ElementRef;
  @ViewChild('selectedImageFrame') selectedImageFrame: ElementRef;
  @HostBinding('class.filter-menu-activated') filterMenuActivated = false;
  @HostListener('window:resize')
  onWindowResize() {
    const el = this.selectedImageElement;
    const imageFrame = this.selectedImageFrame.nativeElement;

    if(el) {

      this.renderer.setStyle(el, 'left', imageFrame.offsetLeft + 7.5 + 'px');
      this.renderer.setStyle(el, 'top', imageFrame.offsetTop + 70 + 'px');
      this.renderer.setStyle(el, 'height', imageFrame.height + 'px');
      this.renderer.setStyle(el, 'width', imageFrame.width + 'px');
    }
  }

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


    if(this.selectedImageElement === el) {
      return;
    }

    if(this.selectedImageWrapper && this.selectedImageElement) {
      this.resetSelectedImageStyles(this.selectedImageElement, this.selectedImageWrapper);
    }

    this.selectedImage = "something";
    this.selectedImageElement = el;
    this.selectedImageWrapper = elWrapper;

    const elDimensions = {
      height: `${el.clientHeight}px`,
      width: `${el.clientWidth}px`,
      top: `${el.offsetTop - window.scrollY + 70}px`,
      left: `${el.offsetLeft + 7.5}px`,
    }

    this.renderer.setStyle(elWrapper, 'height', elWrapper.clientHeight + 'px');
    this.renderer.setStyle(elWrapper, 'background', 'none');

    this.renderer.setStyle(el, 'height', elDimensions.height);
    this.renderer.setStyle(el, 'width', elDimensions.width);
    this.renderer.setStyle(el, 'opacity', 1);
    this.renderer.setStyle(el, 'position', 'fixed');
    this.renderer.setStyle(el, 'top', elDimensions.top);
    this.renderer.setStyle(el, 'left', elDimensions.left);

    setTimeout(() => {
      this.renderer.addClass(el, 'transition-setter');
    }, 1);
    setTimeout(() => {

      const imageFrame = this.selectedImageFrame.nativeElement;

      this.renderer.setStyle(el, 'left', imageFrame.offsetLeft + 7.5 + 'px');
      this.renderer.setStyle(el, 'top', imageFrame.offsetTop + 70 + 'px');
      this.renderer.setStyle(el, 'height', imageFrame.height + 'px');
      this.renderer.setStyle(el, 'width', imageFrame.width + 'px');

      this.renderer.setStyle(el, 'z-index', 81);
      setTimeout(() => {
        this.renderer.removeClass(el, 'transition-setter');
      }, 376);
    }, 50);

  }

  /* Clear styles that are added for transition to image modal */
  resetSelectedImageStyles(image: HTMLElement, imageWrapper: HTMLElement = null): void {

    this.renderer.removeStyle(image, 'height');
    this.renderer.removeStyle(image, 'width');
    this.renderer.removeStyle(image, 'opacity');
    this.renderer.removeStyle(image, 'position');
    this.renderer.removeStyle(image, 'top');
    this.renderer.removeStyle(image, 'left');
    this.renderer.removeStyle(image, 'z-index');
    this.renderer.removeStyle(image, 'transition');
    this.renderer.removeStyle(image, 'clip-path');
    this.renderer.removeStyle(image, 'transform');

    this.renderer.removeClass(image, 'transition-setter');

    this.renderer.removeStyle(imageWrapper, 'height');
    this.renderer.removeStyle(imageWrapper, 'background');
  }

  thumbnailLoaded(imageWrapper: HTMLElement): void {
    this.renderer.addClass(imageWrapper, 'image-loaded');
  }

  clearSelectedImage(): void {

    this.renderer.setStyle(this.selectedImageElement, 'clip-path', 'inset(0)');
    this.renderer.setStyle(this.selectedImageElement, 'transform', 'translateY(85%)');
    this.renderer.setStyle(this.selectedImageElement, 'transition', 'all 0.5s ease-in');
    setTimeout(()=> {
      this.renderer.setStyle(this.selectedImageElement, 'clip-path', 'inset(0% 0% 100% 0%)');

      setTimeout( () => {
        this.resetSelectedImageStyles(this.selectedImageElement, this.selectedImageWrapper);
        this.selectedImage = '';
        this.selectedImageElement = null;
        this.selectedImageWrapper = null;
      }, 501);

    }, 1);
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
