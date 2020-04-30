import { Component, OnInit, Renderer2} from '@angular/core';
import { Title, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-base-page',
  template: '',
  styles: []
})
export class BasePageComponent implements OnInit {

  private basePageTitle = 'Adam Weeks | ';

  constructor(private title: Title,
              private sanitizer: DomSanitizer,
              public renderer: Renderer2) { }

  ngOnInit(): void {

  }

  setPageTitle(extraPageTitle): void {
    this.title.setTitle(this.basePageTitle + extraPageTitle);
  }

  sanitizeHTML(dirtyHTML: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(dirtyHTML);
  }

}
