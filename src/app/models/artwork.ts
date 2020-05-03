import { Image } from './image';

export class Artwork extends Image {
  private medium: string;
  private genre: string;

  getMedium(): string {
    return this.medium;
  }
  getGenre(): string {
    return this.genre;
  }
}
