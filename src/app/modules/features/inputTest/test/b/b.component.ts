import {Component, Input} from '@angular/core';

@Component({
  selector: '',
  templateUrl: './b.component.html',
  styleUrls: [],
})
export class BComponent {
  @Input() current = {
    steps: [
      {
        content: {
          pageElements: [
            {
              elements: [
                {
                  id: 'input',
                  answerId: 'age',
                  type: 'textField',
                  label: 'Age',
                  default: 67,
                },
              ],
            },
          ],
        },
      },
    ],
  };
  steps = this.current.steps;
  slideOpts: Record<string, number | boolean> = {
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
  };

  constructor() {}
}
