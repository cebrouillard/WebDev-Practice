import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {
    this.goToComponentTester = this.goToComponentTester.bind(this);
    this.goToGameStart = this.goToGameStart.bind(this);
  }

  public goToComponentTester() {
    this.router.navigateByUrl('/component-tester')
  }

  public goToGameStart() {
    this.router.navigateByUrl("/");
  }
}
