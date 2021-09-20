import { trigger, transition, style, animate } from '@angular/animations';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { BasePageComponent} from '../base-page.component';

@Component({
  selector: 'aw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', '../pages.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style( { top: '100%', position: 'absolute' } ),
          animate('1.25s ease-in-out',
            style( { top: '2rem', position: 'absolute' } )
          )
        ])
      ]),
    trigger(
      'leaveAnimation', [
        transition(':leave', [
          style( { top: '2rem', position: 'absolute'  } ),
          animate('1.25s ease-in-out',
            style( { top: '-100%', position: 'absolute'  } )
          )
        ])
      ]
    )
  ],
})
export class HomePageComponent
  extends BasePageComponent implements OnInit {

  @HostListener('window:keydown',  ['$event'])
  private onKeyDown( event: KeyboardEvent) {
    if( event.key === 'ArrowDown' ){
      this.moreSectionVisible = true;
    }
  }

  public moreSectionVisible = false;

  private extraPageTitle = "Art + Code";


  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle( this.extraPageTitle );
  }

  public showMoreSection(): void {
    this.moreSectionVisible = true;
  }

}
