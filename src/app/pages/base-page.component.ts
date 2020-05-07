import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title,  } from '@angular/platform-browser';
import { ArtService } from '../services/art.service';

@Component({
  selector: 'app-base-page',
  template: '',
  styles: []
})
export class BasePageComponent implements OnInit {

  private basePageTitle = 'Adam Weeks | ';

  constructor(private title: Title,
              public renderer: Renderer2,
              public artService: ArtService) { }

  ngOnInit(): void {

  }

  setPageTitle(extraPageTitle): void {
    this.title.setTitle(this.basePageTitle + extraPageTitle);
  }

  // sanitizeHTML(dirtyHTML: string): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(dirtyHTML);
  // }

}
