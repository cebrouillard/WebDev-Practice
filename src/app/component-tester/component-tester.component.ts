import { Component } from '@angular/core';
import { ModalService } from '../common/services/modal-service/modal.service';
import { ModalComponent } from '../common/modal/modal.component';

@Component({
  selector: 'app-component-tester',
  templateUrl: './component-tester.component.html',
  styleUrls: ['./component-tester.component.css']
})
export class ComponentTesterComponent {

  constructor(private modalService: ModalService) {
    this.openModal = this.openModal.bind(this);
  }

  public openModal() {
    const modal = {modalTitle: "Test Modal", modalBody: "You opened a modal with the modalService!"} as ModalComponent;
    this.modalService.openModal(modal);
  }
}
