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

    const indexOfFind = this.platforms.find(item => item == platform);
    return indexOfFind !== undefined ? true : false;
  }

  hasTechnology(technology: string): boolean {

    const indexOfFind = this.technologies.find(item => item == technology);
    return indexOfFind !== undefined ? true : false;
  }


}
