import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InputTestComponent} from './inputTest.component';
import {BComponent} from './b/b.component';

const routes: Routes = [
  {
    path: '',
    component: InputTestComponent,
    children: [
      {
        path: 'b',
        component: BComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputTestRoutingModule {}
