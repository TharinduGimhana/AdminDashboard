import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComplainsComponent } from './complains.component';
import { ComplainComponent } from './complain/complain.component';

const routes: Routes = [
  {
    path: '',
    component: ComplainsComponent,
    children: [
      {
        path: 'complain',
        component: ComplainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplainsRoutingModule {
}