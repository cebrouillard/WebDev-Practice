import { Input } from '@angular/core';

export class Modal {
    @Input()
    public modalTitle: string;
    @Input()
    public modalBody: string;

    constructor() {}
}