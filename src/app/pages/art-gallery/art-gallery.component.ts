import { Component, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BasePageComponent} from '../base-page.component';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.scss']
})
export class ArtGalleryComponent
  extends BasePageComponent implements OnInit {


  @ViewChildren('p') paragraphs: QueryList<'p'>;

  extraPageTitle = "Art Gallery";

  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);
  }

  breakIntoLines() {
    console.log(this.paragraphs);

    this.paragraphs.forEach(p => {
      this.splitParagraph(p);
    });
  }

  animateLines() {

  }

  splitParagraph(p) {

    const words = p.nativeElement.innerHTML.split(" "); //(/(\s+)/); // any whitespace char
    console.log(words);
    let spannedWords: string;
    
    words.forEach(word => {
      spannedWords += `<span class="break-word">${word}</span> `;
    }); // remove trailing whitespace
    console.log(spannedWords);

    p.nativeElement.innerHTML = spannedWords;
    console.log(p);
  }
}
