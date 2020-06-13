import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';
import { ModalTemplate } from '../../modal/modal-template.class';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {
  }

  public openModal(content: ModalTemplate) {
    const modal = this.modalService.open(ModalComponent, content.modalOptions)
    const componentInstance = modal.componentInstance as ModalComponent;
    componentInstance.modalBody = content.modalBody;
    componentInstance.modalTitle = content.modalTitle;
    componentInstance.modalOptions = content.modalOptions;
  }
}
