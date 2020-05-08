import { Base } from './base';

export class Image extends Base {

  private fileType: string;
  private height: number;
  private width: number;


  constructor(params) {
    // TEMP
    const randomFileNum = Math.floor(Math.random() * 8);
    params.title  = (`../../../assets/images/temp/${randomFileNum}`);

    super({ title: params.title,
            createdDate: params.createdDate,
            bodyText: params.bodyText
          });

    this.fileType = params.fileType;
    this.height = params.height;
    this.width = params.width;


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
