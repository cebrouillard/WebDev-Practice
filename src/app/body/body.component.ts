import { Component, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  public divVisible = false;

  constructor(private modalService: NgbModal) {
    this.showDiv = this.showDiv.bind(this);
  }

  public showDiv(): void {
    this.modalService.open("Hi")
  }

  public getButtonText(): string {
    return this.divVisible ?  'Hide Div' : 'Show Div';
  }
}
