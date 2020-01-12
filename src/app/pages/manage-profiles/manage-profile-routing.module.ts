import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageProfileComponent } from './manage-profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ManageProfileComponent,
    children: [
      {
        path: 'add-profile',
        component: AddProfileComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
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