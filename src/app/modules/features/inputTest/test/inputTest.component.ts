import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: '',
  templateUrl: './inputTest.component.html',
  styleUrls: [],
})
export class InputTestComponent {
  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.router.navigateByUrl('inputTest/b');
  }
}
