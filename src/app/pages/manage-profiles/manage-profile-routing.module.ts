import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageProfileComponent } from './manage-profile.component';
import { ClientComponent } from './client/client.component';
import { OfficersComponent } from './officers/officers.component';

const routes: Routes = [
  {
    path: '',
    component: ManageProfileComponent,
    children: [
      {
        path: 'officers',
        component: OfficersComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageProfileRoutingModule {
}