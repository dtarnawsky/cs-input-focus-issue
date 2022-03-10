import {Component, Input} from '@angular/core';
@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: [],
})
export class StepComponent {
  @Input() step: any;
}
