import {Component, Input} from '@angular/core';

@Component({
  selector: 'inputTest-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() element: any;
}
