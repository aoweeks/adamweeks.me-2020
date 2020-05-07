import { Base } from './base';

export class Image extends Base {

  private fileType: string;
  private height: number;
  private width: number;

  constructor(title: string,
              createdDate: Date,
              fileType: string,
              height: number,
              width: number) {
    // TEMP
    const randomFileNum = Math.floor(Math.random() * 8);
    title = (`../../../assets/images/temp/${randomFileNum}`);

    super(title, createdDate);
    this.fileType = fileType;
    this.height = height;
    this.width = width;

    //IMPLEMENT BODY TEXT AND TITLE ETC

  }

  getHeightInPx(): string {
    return this.height + 'px';
  }

  getWidthInPx(): string {
    return this.width + 'px';
  }

  isLandscape(): boolean {
    return this.width > this.height ? true : false;
  }

  getImageURL(): string {
    return this.getURL() + '.' + this.fileType;
  }
}
