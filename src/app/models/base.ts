import { Title } from '@angular/platform-browser';

export class Base {
  private title: string;
  private createdDate: Date;
  private url: string;

  constructor(title: string,
              createdDate: Date) {

    this.title = title;
    this.createdDate = createdDate;
    this.url = this.createURL(title);
  }

  getTitle(): string {
    return this.title;
  }

  getDate(): Date {
    return this.createdDate;
  }

  getURL(): string {
    return this.url;
  }

  private createURL(title: string): string {
    const parsedTitle = title.replace(/\s+/g, '').toLowerCase();
    const parsedURL = encodeURI(parsedTitle);
    return parsedURL;
  }
}
