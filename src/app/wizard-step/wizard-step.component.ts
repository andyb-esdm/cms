import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html'
})
export class WizardStepComponent {
  @Input() title: string;
  @Input() hidden = false;
  @Input() isValid = true;
  @Input() showNext = true;
  @Input() showPrev = true;

  @Output() Next: EventEmitter<any> = new EventEmitter<any>();
  @Output() Prev: EventEmitter<any> = new EventEmitter<any>();
  @Output() Complete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive = false;
  isDisabled = true;

  constructor() { }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

}