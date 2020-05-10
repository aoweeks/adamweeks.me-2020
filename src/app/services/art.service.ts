import { Injectable } from '@angular/core';

import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private artList: Artwork[] = [];
  private currentSelectedImage = null;


  constructor() {

    //TEMP
      for (let i=0; i <= 40; i++) {
        this.artList.push(new Artwork({ title: 'A title',
                                        createdDate: new Date(),
                                        fileType: 'png',
                                        height: 12,
                                        width: 90,
                                        bodyText: `${Math.random()} This is some body text. <span>And this is inside a span.</span>`
                                      }));
      }
  }

  getArtList(): Artwork[] {
    return this.artList;
  }

  getSelectedImageIndex(): number {
    console.log(this.currentSelectedImage);
    return this.currentSelectedImage;
  }

  getSelectedImage(): Artwork {
    return this.artList[this.currentSelectedImage];
  }

  setSelectedImageIndex(artListIndex: number = null): void {

    if(artListIndex >= this.artList.length) {
      artListIndex = 0;
    } else if (artListIndex < 0) {
      artListIndex = this.artList.length - 1;
    }
    this.currentSelectedImage = artListIndex;
  }

}
