import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentTesterComponent } from './component-tester/component-tester.component';
import { GameStartComponent } from './game-start/game-start.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: "component-tester",
    component: ComponentTesterComponent
  },
  {
    path: "game",
    component: GameComponent
  },
  {
    path: "",
    component: GameStartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
