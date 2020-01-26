import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table.component'
import { TimeTableComponent } from './table/time-table.component';
import { RouteComponent } from './route/route.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component'


const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      {
        path: 'time-table',
        component: TimeTableComponent,
      },
      {
        path: 'route',
        component: RouteComponent,
      },
      {
        path: 'vehicle',
        component: VehicleDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {
}

export const routedComponents = [
  TableComponent,
  TimeTableComponent,
  RouteComponent,
  VehicleDetailsComponent
];