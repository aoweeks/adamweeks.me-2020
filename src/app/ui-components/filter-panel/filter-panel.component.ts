import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'aw-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @HostBinding('class.filter-menu-active') filterMenuActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilterMenu(newState: boolean = null): void {

    if (newState === null) {
      this.filterMenuActive = !this.filterMenuActive;
    } else {
      this.filterMenuActive = newState;
    }
  }

}
