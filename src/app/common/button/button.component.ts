import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input()
  public class: string = "";
  @Input()
  public type: "submit" | "button" = "button";
  @Input()
  public onClick: () => {};
  @Input()
  public buttonText = "Test";

  getClasses() {
    return "btn " + this.class;
  }
}
