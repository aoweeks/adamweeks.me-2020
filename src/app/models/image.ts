import { Base } from './base';

export class Image extends Base {

  private height: number;
  private width: number;

  getHeightInPx(): string {
    return this.height + 'px';
  }

  getWidthInPx(): string {
    return this.width + 'px';
  }
}
