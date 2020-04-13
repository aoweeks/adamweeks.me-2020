import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-code-gallery',
  templateUrl: './code-gallery.component.html',
  styleUrls: ['./code-gallery.component.scss']
})
export class CodeGalleryComponent
  extends BasePageComponent implements OnInit {

  private extraPageTitle = "Code";

  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);
  }

}
