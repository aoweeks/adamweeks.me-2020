import { Injectable } from '@angular/core';

import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private artList: Artwork[];

  constructor() {
    const newArtwork = new Artwork('Title', new Date, 'png', 1400, 1200);
    console.log(newArtwork);
  }

  getArtList(): Artwork[] {
    return this.artList;
  }
}
