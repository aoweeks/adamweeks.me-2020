import { Component, OnInit } from '@angular/core';
import { BasePageComponent} from '../base-page.component';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.sass']
})
export class ArtGalleryComponent
  extends BasePageComponent implements OnInit {

  extraPageTitle = "Art Gallery";

  ngOnInit(): void {
    this.setPageTitle(this.extraPageTitle);
  }

}
