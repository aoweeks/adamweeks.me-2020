import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundPositionTrackerService {

  constructor() { }

  updateBackgroundPositionX(newPosition: Number): void {
    console.log('updateBG: ' + newPosition);
  }
}
