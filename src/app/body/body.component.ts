import { Component } from '@angular/core';
import { ModalService } from '../common/services/modal-service/modal.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(private modalService: ModalService) {
  }

  openModal() {
  }
}
