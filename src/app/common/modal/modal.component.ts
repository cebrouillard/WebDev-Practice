import { Component, OnInit, Input, Optional } from '@angular/core';
import { NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input()
  public modalTitle: string;
  @Input()
  public modalBody: string;
  @Input()
  public modalOptions: NgbModalOptions;

  constructor (public activeModal: NgbActiveModal) {}
}
