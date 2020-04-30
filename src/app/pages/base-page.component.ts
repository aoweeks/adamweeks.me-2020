<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
=======
import { Component, OnInit, Renderer2} from '@angular/core';
import { Title, DomSanitizer, SafeHtml } from '@angular/platform-browser';
>>>>>>> bcfaf1917077213a1ea408a6794d4eb3539c454c

@Component({
  selector: 'app-base-page',
  template: '',
  styles: []
})
export class BasePageComponent implements OnInit {

  private basePageTitle = 'Adam Weeks | ';

<<<<<<< HEAD
  constructor(private title: Title,){}

              // private sanitizer: DomSanitizer) { }
=======
  constructor(private title: Title,
              private sanitizer: DomSanitizer,
              public renderer: Renderer2) { }
>>>>>>> bcfaf1917077213a1ea408a6794d4eb3539c454c

  ngOnInit(): void {

  }

  setPageTitle(extraPageTitle): void {
    this.title.setTitle(this.basePageTitle + extraPageTitle);
  }

  // sanitizeHTML(dirtyHTML: string): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(dirtyHTML);
  // }

}
