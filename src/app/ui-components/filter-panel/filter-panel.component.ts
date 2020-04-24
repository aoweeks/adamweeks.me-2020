import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aw-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  @HostBinding('class.filter-menu-active') filterMenuActive = false;
  @Output() filterMenuActivation: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.filterMenuActivation.emit(this.filterMenuActive);
  }

  toggleFilterMenu(newState: boolean = null): void {

    if (newState === null) {
      this.filterMenuActive = !this.filterMenuActive;
    } else {
      this.filterMenuActive = newState;
    }

    this.filterMenuActivation.emit(this.filterMenuActive);
  }

}
