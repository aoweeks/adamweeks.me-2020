import { Injectable } from '@angular/core';

import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private artList: Artwork[] = [];
  private currentSelectedImage = 0;


  constructor() {

    //TEMP
      for (let i=0; i <= 40; i++) {
        this.artList.push(new Artwork({ title: 'A title',
                                        createdDate: new Date(),
                                        fileType: 'png',
                                        height: 12,
                                        width: 90,
                                        bodyText: 'This is some body text. <span>And this is inside a span.</span>'
                                      }));
      }
  }

  getArtList(): Artwork[] {
    return this.artList;
  }

  getSelectedImageIndex(): number {
    return this.currentSelectedImage;
  }

  setSelectedImageIndex(artListIndex: number): void {
    this.currentSelectedImage = artListIndex;
  }

}
