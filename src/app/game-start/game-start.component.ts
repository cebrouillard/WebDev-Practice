import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent implements OnInit {

  constructor(private router: Router) { 
    this.goToGame = this.goToGame.bind(this);
  }

  ngOnInit(): void {
  }

  public goToGame(){
    this.router.navigateByUrl('/game');
  }

}
