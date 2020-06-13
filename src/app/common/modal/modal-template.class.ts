import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export class ModalTemplate {
  public modalTitle: string;
  public modalBody: string;
  public modalOptions: NgbModalOptions;

  constructor(modalBody: string, modalTitle = "", modalOptions: NgbModalOptions = { centered: true }) {
      this.modalBody = modalBody;
      this.modalTitle = modalTitle;
      this.modalOptions = modalOptions;
  }
}