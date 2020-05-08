export class Base {
  private title: string;
  private createdDate: Date;
  private url: string;
  private bodyText: string;

  constructor(params) {

    this.title = params.title;
    this.createdDate = params.createdDate;
    this.url = this.createURL(params.title);
    this.bodyText = params.bodyText;
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

  getBodyText(): string {
    return this.bodyText;
  }
}
