import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inputTest',
    pathMatch: 'full',
  },
  {
    path: 'inputTest',
    loadChildren: () =>
      import('./modules/features/inputTest/test/test.module').then(
        m => m.TestModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
