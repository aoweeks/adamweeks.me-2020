import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-code-gallery',
  templateUrl: './code-gallery.component.html',
  styleUrls: ['./code-gallery.component.sass']
})
export class CodeGalleryComponent
  extends BasePageComponent implements OnInit {

  private extraPageTitle = "Code";

  ngOnInit(): void {
    this.setPageTitle(this.extraPageTitle);
  }

}
