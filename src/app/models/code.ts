import { Base } from './base';

export class Code extends Base{

  // constructor() {

  // }

  private platforms: string[] = [];
  private technologies: string[] = [];

  getPlatforms(): string[] {
    return this.platforms;
  }


  getTechnologies(): string[] {
    return this.technologies;
  }

  hasPlatform(platform: string): boolean {

    // this.platforms.find("hi");
    return true;
  }

  hasTechnology(technology: string): boolean {

    // const containsItem: boolean = this.checkListForItem(this.platforms, technology);
    return true;
  }


}
