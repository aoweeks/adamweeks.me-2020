import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
// import { routeTransition } from '../route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private title: Title) {}


  prepareRoute(outlet: RouterOutlet) {
    console.log("g");
    return outlet.activatedRouteData.state;
  }

  setPageTitle() {
    this.title.setTitle('Adam Weeks');
  }
}
