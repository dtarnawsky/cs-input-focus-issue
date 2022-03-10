import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputTestComponent} from './inputTest.component';
import {InputTestRoutingModule} from './inputTest-routing.module';
import {StepComponent} from './b/step/step.component';
import {BComponent} from './b/b.component';

import {InputComponent} from './b/step/input/input.component';

import {SwiperModule} from 'swiper/angular';

@NgModule({
  declarations: [InputTestComponent, BComponent, StepComponent, InputComponent],
  imports: [CommonModule, InputTestRoutingModule, SwiperModule],
})
export class TestModule {}
