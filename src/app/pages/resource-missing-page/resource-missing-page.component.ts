import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../base-page.component';

@Component({
  selector: 'app-resource-missing-page',
  templateUrl: './resource-missing-page.component.html',
  styleUrls: ['./resource-missing-page.component.scss']
})
export class ResourceMissingPageComponent extends BasePageComponent
       implements OnInit {

  private extraPageTitle = '404';

  ngOnInit(): void {
    super.ngOnInit();
    this.setPageTitle(this.extraPageTitle);
  }
}
