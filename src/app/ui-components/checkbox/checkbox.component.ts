import { Component, Input } from '@angular/core';


@Component({
  selector: 'aw-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {


  @Input() filterName = '';

  constructor() { }

}
