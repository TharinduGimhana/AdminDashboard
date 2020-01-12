import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropOffLocationsComponent } from './drop-off-locations.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    component: DropOffLocationsComponent,
    children: [
      {
        path: 'drop-off-map',
        component: MapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropOffLocationsRoutingModule {
}