import { Component, OnInit } from '@angular/core';
import { BasePageComponent} from '../base-page.component';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.scss']
})
export class ArtGalleryComponent
  extends BasePageComponent implements OnInit {

  extraPageTitle = "Art Gallery";

  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);
  }

}
