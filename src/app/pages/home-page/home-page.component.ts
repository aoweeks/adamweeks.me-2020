import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

import { BasePageComponent} from '../base-page.component';

@Component({
  selector: 'aw-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: []
})
export class HomePageComponent
  extends BasePageComponent implements OnInit {

  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

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
