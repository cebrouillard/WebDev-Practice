import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent {

  constructor(private router: Router) { 
    this.goToGame = this.goToGame.bind(this);
  }

  public goToGame() {
    this.router.navigateByUrl("/game")
  }

}
