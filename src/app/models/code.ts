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

}
