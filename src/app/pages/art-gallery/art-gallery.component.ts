import { Component, OnInit, HostBinding, } from '@angular/core';
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
  }

  filterMenuActivation(isFilterActivated): void {
    this.filterMenuActivated = isFilterActivated;
  }

}
